import requests
import psycopg2

connection = psycopg2.connect(
    database="random_countries",
    user="postgres",
    password="07Nathan30!", 
    host="localhost",
    port="5432"
)
cursor = connection.cursor()

# 2) create tables (once)
cursor.execute("""
CREATE TABLE IF NOT EXISTS countries (
    id SERIAL PRIMARY KEY,
    country_name TEXT NOT NULL,
    capital TEXT,
    flag TEXT,
    subregion TEXT,
    population BIGINT
);
""")
cursor.execute("""
CREATE TABLE IF NOT EXISTS random_ten (
    id SERIAL PRIMARY KEY,
    country_name TEXT NOT NULL,
    capital TEXT,
    flag TEXT,
    subregion TEXT,
    population BIGINT
);
""")
connection.commit()

print("Tables are ready.")

url = "https://restcountries.com/v2/all?fields=name,capital,subregion,flag,population"
resp = requests.get(url, timeout=30)
data = resp.json()  # list of dicts

cursor.execute("TRUNCATE countries;")
for c in data:
    name = c.get("name")
    capital = c.get("capital")
    subregion = c.get("subregion")
    flag = c.get("flag")               
    population = c.get("population")   
    if not name:
        continue
    cursor.execute(
        "INSERT INTO countries (country_name, capital, flag, subregion, population) VALUES (%s, %s, %s, %s, %s)",
        (name, capital, flag, subregion, population)
    )
connection.commit()
print(f"Loaded {len(data)} countries into 'countries'.")

cursor.execute("TRUNCATE random_ten;")
cursor.execute("""
    INSERT INTO random_ten (country_name, capital, flag, subregion, population)
    SELECT country_name, capital, flag, subregion, population
    FROM countries
    ORDER BY RANDOM()
    LIMIT 10;
""")
connection.commit()
print("Filled 'random_ten' with 10 random countries.")

cursor.execute("SELECT country_name, capital, subregion, population FROM random_ten;")
rows = cursor.fetchall()
print("\nRandom 10:")
for row in rows:
    print(row)

# 7) clean up
cursor.close()
connection.close()