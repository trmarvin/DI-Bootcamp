interface User {
    readonly id: number;
    name: string;
    email: string;
}

interface PremiumUser extends User {
    membershipLevel?: string;
}

function printUserDetails(user: PremiumUser): void {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);

    if (user.membershipLevel) {
        console.log(`Membership Level: ${user.membershipLevel}`);
    }
}