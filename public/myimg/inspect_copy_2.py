import os
import struct

path = r"C:\Users\amand\OneDrive\Desktop\vigilwebsite\react-app\public\myimg\image copy 2.png"

if os.path.exists(path):
    print(f"File exists! Size: {os.path.getsize(path)} bytes")
    try:
        with open(path, 'rb') as f:
            data = f.read(24)
            if len(data) >= 24 and data[:8] == b'\x89PNG\r\n\x1a\n':
                w, h = struct.unpack('>ii', data[16:24])
                print(f"Dimensions: {w}x{h}")
            elif data[:2] == b'\xff\xd8':
                print("It is a JPEG image")
            else:
                print("Unknown image format")
    except Exception as e:
        print(f"Error checking dimensions: {e}")
else:
    print("File does NOT exist!")
