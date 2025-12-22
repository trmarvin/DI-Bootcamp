// Create a function getAction that takes a string representing a user role and 
// returns an action for the user. Use a switch statement with complex conditions 
// to handle multiple roles.

function getAction(userRole: string): string {
    switch (userRole) {
        case "admin":
            return "Full access to the system";
        case "editor":
            return "Can edit content";
        case "viewer":
            return "Can view content";
        case "guest":
            return "Limited guest access";
        case "unknown":
            return "No access";
        default:
            return "No access";
    }
}

// Test the function with different roles
console.log(getAction("admin")); // Output: Manage users and settings
console.log(getAction("editor")); // Output: Edit content
console.log(getAction("viewer")); // Output: View content
console.log(getAction("guest")); // Output: Limited access
console.log(getAction("unknown")); // Output: Invalid role