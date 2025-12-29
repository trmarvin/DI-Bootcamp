type Person = {
    name: string;
    age: number;
};

type Job = {
    position: 'Manager' | 'Developer' | 'Designer';
    department: string;
};

type Employee = Person & Job;

function describeEmployee(employee: Employee): string {
    if (employee.position === 'Manager') {
        return `${employee.name} is a Manager in the ${employee.department} department.`;
    }

    if (employee.position === 'Developer') {
        return `${employee.name} is a Developer in the ${employee.department} department.`;
    }

    if (employee.position === 'Designer') {
        return `${employee.name} is a Designer in the ${employee.department} department.`;
    }

    return 'Unknown position';
}

    const manager: Employee = {
  name: "Tamar",
  age: 42,
  position: "Manager",
  department: "Engineering",
};

const developer: Employee = {
  name: "Alex",
  age: 30,
  position: "Developer",
  department: "Platform",
};

console.log(describeEmployee(manager));
// Tamar is a Manager in the Engineering department.

console.log(describeEmployee(developer));
// Alex is a Developer working in the Platform department.