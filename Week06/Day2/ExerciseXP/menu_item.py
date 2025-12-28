import psycopg2

conn = psycopg2.connect(
    dbname="restaurant",
    user="postgres",
    password="07Nathan30!",
    host="localhost",
    port=5432
)

class MenuItem:
    def __init__(self, name, price, item_id=None):
        self.id = item_id
        self.name = name
        self.price = price

    def save(self):
        with conn.cursor() as cur:
            cur.execute(
                """
                INSERT INTO menu_items (item_name, item_price)
                VALUES (%s, %s)
                RETURNING item_id;
                """,
                (self.name, self.price)
            )
            self.id = cur.fetchone()[0]
        conn.commit()
        return self.id

    def update(self, new_name, new_price):
        if self.id is None:
            raise ValueError("Call save() first so I have an id to update.")
        with conn.cursor() as cur:
            cur.execute(
                """
                UPDATE menu_items
                   SET item_name = %s,
                       item_price = %s
                 WHERE item_id = %s;
                """,
                (new_name, new_price, self.id)
            )
        conn.commit()
        self.name = new_name
        self.price = new_price

    def delete(self):
        if self.id is None:
            raise ValueError("Call save() first so I have an id to delete.")
        with conn.cursor() as cur:
            cur.execute("DELETE FROM menu_items WHERE item_id = %s;", (self.id,))
        conn.commit()
        # Optionally mark as deleted in memory
        self.id = None
