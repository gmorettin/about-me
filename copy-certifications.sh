#!/bin/bash

# Create the certifications folder
mkdir -p client/public/certifications

# Copy all image files from the uploaded folder
cd "New Folder With Items"

# Copy JPG certificates
cp "assertion-sf9Ldle6RfOGl1fNmOE8ZA.png" "../client/public/certifications/"
cp "certificate-2sq9gxcbyo74-1747837737.jpg" "../client/public/certifications/"
cp "certificate-7fg54y4qzhef-1747837693.jpg" "../client/public/certifications/"
cp "certificate-a2a296qvjq5v-1747837716.jpg" "../client/public/certifications/"
cp "certificate-cb2oyzgndpzm-1747837753.jpg" "../client/public/certifications/"
cp "certificate-h6g33ickymet-1747840962.jpg" "../client/public/certifications/"
cp "certificate-ichneojjyauh-1747910750.jpg" "../client/public/certifications/"
cp "certificate-zyfz7qmu4esb-1747837780.jpg" "../client/public/certifications/"

# Copy PNG downloads
cp "download.png" "../client/public/certifications/"
cp "download (1).png" "../client/public/certifications/"
cp "download (2).png" "../client/public/certifications/"
cp "download (3).png" "../client/public/certifications/"
cp "download (4).png" "../client/public/certifications/"

echo "✅ All certificate images copied successfully!"
ls -la ../client/public/certifications/
