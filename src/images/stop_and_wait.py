# stop_and_wait.py

import socket
import threading
import time
import random

# Constants
HOST = '127.0.0.1'
PORT = 12345
TIMEOUT = 3

# Receiver Code
def receiver():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.bind((HOST, PORT))

    expected_frame = 0

    while True:
        data, addr = s.recvfrom(1024)
        frame, frame_num = data.decode().split(',')
        frame_num = int(frame_num)

        if frame == "END":
            print("Receiver: Transmission ended.")
            break

        if frame_num == expected_frame:
            print(f"Receiver: Received frame {frame_num} => {frame}")
            s.sendto(f"ACK{frame_num}".encode(), addr)
            expected_frame = 1 - expected_frame  # Toggle between 0 and 1
        else:
            print(f"Receiver: Duplicate frame {frame_num} => Discarded")
            s.sendto(f"ACK{1 - expected_frame}".encode(), addr)

    s.close()

# Sender Code
def sender(frames):
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.settimeout(TIMEOUT)

    frame_num = 0
    i = 0

    while i < len(frames):
        message = f"{frames[i]},{frame_num}"
        s.sendto(message.encode(), (HOST, PORT))
        print(f"Sender: Sent frame {frame_num} => {frames[i]}")

        try:
            ack, _ = s.recvfrom(1024)
            ack_num = int(ack.decode().replace("ACK", ""))

            if ack_num == frame_num:
                print(f"Sender: Received ACK{ack_num}")
                frame_num = 1 - frame_num  # Toggle
                i += 1
            else:
                print("Sender: Incorrect ACK, resending...")
        except socket.timeout:
            print("Sender: Timeout! Resending frame...")

    # Send end signal
    s.sendto("END,0".encode(), (HOST, PORT))
    s.close()

# Run the simulation
if __name__ == "__main__":
    frames_to_send = ['Hello', 'from', 'Stop-and-Wait', 'Protocol']

    # Start receiver thread
    threading.Thread(target=receiver, daemon=True).start()
    time.sleep(1)

    # Start sender
    sender(frames_to_send)
