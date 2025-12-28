import requests, psycopg2, json

# Connect to PostgreSQL
connection = psycopg2.connect(
    database="parsha",
    user="postgres",
    password="07Nathan30!",
    host="localhost",
    port="5432"
)  
cursor = connection.cursor()

# API 3 - PARSHA INFO
response3 = requests.get("https://api.yet-another-example.com/data3")
parsha_info = response3.json()

cursor.close()
connection.close()