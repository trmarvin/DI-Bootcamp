from menu_item import MenuItem

import psycopg2

conn = psycopg2.connect(
    dbname="restaurant",
    user="postgres",
    password="07Nathan30!",
    host="localhost",
    port=5432
)

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        with conn.cursor() as cur:
            cur.execute(
                "SELECT item_id, item_name, item_price FROM menu_items WHERE item_name = %s LIMIT 1;",
                (name,)
            )
            row = cur.fetchone()
            if row is None:
                return None
            return MenuItem(name=row[1], price=row[2], item_id=row[0])

    @classmethod
    def all_items(cls):
        with conn.cursor() as cur:
            cur.execute("SELECT item_id, item_name, item_price FROM menu_items ORDER BY item_id;")
            rows = cur.fetchall()
        return [MenuItem(name=r[1], price=r[2], item_id=r[0]) for r in rows]