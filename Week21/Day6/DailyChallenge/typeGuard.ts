type User = {
 type: 'user';
 name: string;
 age: number;
};

type Product = {
 type: 'product';
 id: number;
 price: number;
};

type Order = {
 type: 'order';
 orderId: string;
 amount: number;
};

type DataItem = User | Product | Order;

function handleData(data: DataItem[]): string[] {
  return data.map((item) => {
    switch (item.type) {
      case 'user':
        return `Hello ${item.name}! You are ${item.age} years old.`;

      case 'product':
        return `Product #${item.id} costs $${item.price}.`;

      case 'order':
        return `Order ${item.orderId} has a total amount of $${item.amount}.`;

      default:
        // Graceful fallback for unexpected cases
        return 'Unknown data item received.';
    }
  });
}

const data: DataItem[] = [
  { type: 'user', name: 'Tamar', age: 42 },
  { type: 'product', id: 101, price: 29.99 },
  { type: 'order', orderId: 'ORD-001', amount: 120 },
];

const results = handleData(data);
console.log(results);