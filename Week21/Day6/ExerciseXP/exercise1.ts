type Person = {
  name: string;
  age: number;
};

type Address = {
    street: string;
    city: string;
}

type PersonWithAddress = Person & Address;

const personWithAddress: PersonWithAddress = {
    name: 'Tamar',
    age: 47,
    street: 'Migdal haMenorah 29',
    city: 'Modiin',
};