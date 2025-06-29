import http.server
import socketserver
import os

class CORSRequestHandler(http.server.SimpleHTTPRequestHandler):
	def end_headers(self):
		self.send_header('Access-Control-Allow-Origin', '*')
		self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
		self.send_header('Access-Control-Allow-Headers', 'Content-Type')
		super().end_headers()
		
if __name__ == '__main__':
	PORT = 8000
	DIRECTORY = '/'
	
	os.chdir(DIRECTORY)
	
	with socketserver.TCPServer(("", PORT), CORSRequestHandler) as httpd:
		print(f"Serving at http:127.0.0.1:{PORT}")
		httpd.serve_forever()