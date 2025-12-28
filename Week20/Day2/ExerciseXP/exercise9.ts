// Create an overloaded function greet that can either take a name and greet the person, 
// or take no arguments and return a default greeting.

function greet(): string;
function greet(name: string): string;

function greet(name?: string): string {
    if (name) {
        return `Hello, ${name}`;
    }
    return "Hello there!";
}