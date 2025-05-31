import socket

HOST = '127.0.0.1'
PORT = 8080

def http_get():
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect((HOST, PORT))
    request = "GET / HTTP/1.1\r\nHost: localhost\r\n\r\n"
    s.send(request.encode())
    response = s.recv(4096).decode()
    print("Server Response:\n", response)
    s.close()

def http_post():
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect((HOST, PORT))

    with open("upload_this.html", "r") as f:
        body = f.read()

    request = (
        "POST / HTTP/1.1\r\n"
        f"Host: localhost\r\n"
        f"Content-Length: {len(body)}\r\n"
        "Content-Type: text/html\r\n\r\n"
        f"{body}"
    )
    s.send(request.encode())
    response = s.recv(4096).decode()
    print("Server Response:\n", response)
    s.close()

if __name__ == "__main__":
    print("1. Download page (GET)")
    print("2. Upload page (POST)")
    choice = input("Choose option: ")

    if choice == "1":
        http_get()
    elif choice == "2":
        http_post()
