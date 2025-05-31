# sliding_window.py

import socket
import threading
import time
import random

# Constants
HOST = '127.0.0.1'
PORT = 12346
WINDOW_SIZE = 4
TOTAL_FRAMES = 10
TIMEOUT = 3  # seconds

# Receiver Code
def receiver():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.bind((HOST, PORT))

    received = set()

    while True:
        data, addr = s.recvfrom(1024)
        if data.decode() == 'END':
            print("Receiver: Transmission complete.")
            break

        frame_num = int(data.decode())
        if frame_num not in received:
            print(f"Receiver: Received frame {frame_num}")
            received.add(frame_num)
        else:
            print(f"Receiver: Duplicate frame {frame_num} ignored.")

        # Simulate ACK loss randomly
        if random.random() > 0.1:
            ack_msg = f"ACK{frame_num}"
            s.sendto(ack_msg.encode(), addr)
        else:
            print(f"Receiver: Simulating ACK{frame_num} loss")

    s.close()

# Sender Code
def sender():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.settimeout(TIMEOUT)

    base = 0
    next_frame = 0
    acked = set()

    while base < TOTAL_FRAMES:
        # Send frames in window
        while next_frame < base + WINDOW_SIZE and next_frame < TOTAL_FRAMES:
            print(f"Sender: Sending frame {next_frame}")
            s.sendto(str(next_frame).encode(), (HOST, PORT))
            next_frame += 1

        try:
            ack, _ = s.recvfrom(1024)
            ack_num = int(ack.decode().replace("ACK", ""))
            print(f"Sender: Received {ack.decode()}")
            if ack_num >= base:
                base = ack_num + 1  # Slide window
        except socket.timeout:
            print("Sender: Timeout! Resending window...")
            next_frame = base  # Resend from base

    # Send end signal
    s.sendto("END".encode(), (HOST, PORT))
    s.close()

# Run the simulation
if __name__ == "__main__":
    # Start receiver in a thread
    threading.Thread(target=receiver, daemon=True).start()
    time.sleep(1)

    # Start sender
    sender()
