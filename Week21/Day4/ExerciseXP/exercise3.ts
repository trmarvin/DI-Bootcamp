class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): string {
        return `${this.name} makes a sound.`;
    }   
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    makeSound(): string {
        return `${this.name} barks.`;
    }
}