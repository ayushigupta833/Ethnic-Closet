import socket

HOST = '127.0.0.1'
PORT = 8080

def handle_client(conn):
    request = conn.recv(1024).decode()
    headers = request.split('\n')
    method, path, _ = headers[0].split()

    if method == 'GET':
        try:
            with open('webpage.html', 'r') as f:
                content = f.read()
            response = "HTTP/1.1 200 OK\nContent-Type: text/html\n\n" + content
        except FileNotFoundError:
            response = "HTTP/1.1 404 Not Found\n\nPage not found."
        conn.sendall(response.encode())

    elif method == 'POST':
        body = request.split('\r\n\r\n')[1]
        with open('uploaded.html', 'w') as f:
            f.write(body)
        response = "HTTP/1.1 200 OK\n\nFile uploaded successfully!"
        conn.sendall(response.encode())

    conn.close()

def run_server():
    print(f"Starting server at http://{HOST}:{PORT}")
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.bind((HOST, PORT))
    s.listen(1)

    while True:
        conn, addr = s.accept()
        handle_client(conn)

if __name__ == "__main__":
    run_server()
