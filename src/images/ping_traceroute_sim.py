# ping_traceroute_sim.py

import time
import random

# Simulated network path
network_path = [
    "192.168.0.1",   # Local router
    "10.0.0.1",      # ISP Gateway
    "172.16.0.1",    # Regional Server
    "203.0.113.1",   # Internet Backbone
    "93.184.216.34"  # Destination (example.com)
]

# Simulated PING command
def ping(destination_ip, count=4):
    print(f"Pinging {destination_ip} with 32 bytes of data:\n")

    for i in range(count):
        delay = round(random.uniform(10, 100), 2)  # Simulated delay in ms
        packet_loss = random.random() < 0.1  # 10% chance of loss

        if packet_loss:
            print("Request timed out.")
        else:
            print(f"Reply from {destination_ip}: bytes=32 time={delay}ms TTL=64")

        time.sleep(1)

    print("\nPing complete.\n")


# Simulated TRACEROUTE command
def traceroute(destination_ip, max_hops=30):
    print(f"Tracing route to {destination_ip} over a maximum of {max_hops} hops:\n")

    for i, hop_ip in enumerate(network_path, 1):
        delay = round(random.uniform(10, 100), 2)
        print(f" {i}\t{hop_ip}\t{delay} ms")
        time.sleep(0.5)
        if hop_ip == destination_ip:
            break
    else:
        print("Destination unreachable.")

    print("\nTrace complete.\n")


# Main Menu
def main():
    print("=== Network Utility Simulator ===")
    while True:
        print("\n1. PING")
        print("2. TRACEROUTE")
        print("3. Exit")
        choice = input("Select an option: ")

        if choice == "1":
            ping(network_path[-1])
        elif choice == "2":
            traceroute(network_path[-1])
        elif choice == "3":
            print("Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")

# Run
if __name__ == "__main__":
    main()
