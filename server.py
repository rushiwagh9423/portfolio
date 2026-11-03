import http.server
import socketserver
import sys

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
    '.js': 'application/javascript',
})

socketserver.TCPServer.allow_reuse_address = True
try:
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving at http://localhost:{PORT}", flush=True)
        httpd.serve_forever()
except Exception as e:
    print(f"Server error: {e}", flush=True)
    sys.exit(1)
