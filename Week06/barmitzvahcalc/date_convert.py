import requests, json

greg_date = input("Enter a Gregorian date (YYYY-MM-DD): ")

# API 1 - HEBREW DATE CONVERTER
response1 = requests.get("/api/dateconverter/gregtoheb")
hebrew_date = response1.json()
