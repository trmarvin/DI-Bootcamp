export type UserRecord = {
    id: number;
    email: string;
    password: string; // hashed password
    createdAt: string;
};

export const usersTable: UserRecord[] = [];

let nextId = 1;

export function createUser(email: string, passwordHash: string): UserRecord {
    const newUser: UserRecord = {
        id: nextId++,
        email,
        passwordHash,
        createdAt: new Date().toISOString(),
    };
    usersTable.push(user);
    return user;
}

export function findUserByEmail(email: string): UserRecord | undefined {
    return usersTable.find((u))=> usersTable.email.toLowerCase() === email.toLowerCase());
}

export function findUserById(id: number): UserRecord | undefined {
    return usersTable.find((u) => u.id === id);
}