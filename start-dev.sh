#!/bin/bash

# Start PocketBase
echo "Starting PocketBase..."
./pocketbase serve &

# Start web server
echo "Starting web server..."
(cd web && npm run dev) &

wait
