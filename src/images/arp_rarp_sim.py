# arp_rarp_sim.py

class ARPTable:
    def __init__(self):
        self.arp_table = {}  # IP -> MAC

    def add_entry(self, ip, mac):
        self.arp_table[ip] = mac

    def arp_request(self, ip):
        print(f"ARP Request: Who has IP {ip}?")
        if ip in self.arp_table:
            print(f"ARP Reply: IP {ip} is at MAC {self.arp_table[ip]}")
            return self.arp_table[ip]
        else:
            print("ARP Reply: No entry found.")
            return None

    def rarp_request(self, mac):
        print(f"RARP Request: Who has MAC {mac}?")
        for ip, mac_addr in self.arp_table.items():
            if mac_addr == mac:
                print(f"RARP Reply: MAC {mac} is assigned to IP {ip}")
                return ip
        print("RARP Reply: No entry found.")
        return None

# Example usage
def main():
    arp = ARPTable()

    # Populate the ARP table
    arp.add_entry("192.168.1.2", "AA:BB:CC:DD:EE:01")
    arp.add_entry("192.168.1.3", "AA:BB:CC:DD:EE:02")
    arp.add_entry("192.168.1.4", "AA:BB:CC:DD:EE:03")

    print("\n--- Simulating ARP ---")
    arp.arp_request("192.168.1.3")
    arp.arp_request("192.168.1.5")

    print("\n--- Simulating RARP ---")
    arp.rarp_request("AA:BB:CC:DD:EE:03")
    arp.rarp_request("AA:BB:CC:DD:EE:09")

if __name__ == "__main__":
    main()
