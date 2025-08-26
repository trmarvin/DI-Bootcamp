import psycopg2

conn = psycopg2.connect(
    dbname="restaurant",
    user="postgres",
    password="07Nathan30!",
    host="localhost",
    port=5432
)

cur = conn.cursor()

class MenuManager:
    def __init__(self):
        self.menu_items = []

    if:
        def get_by_name(self, name):
            cur.execute("SELECT item_name, item_price FROM menu_items WHERE item_name = %s", (name,))
    else:
        print("None")

cur.close()
conn.close()

            
