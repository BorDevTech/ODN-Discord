export default class User {
    // Save User to SupaBase Database
    userName: string;
    email: string;
    password: string;
    constructor(userName: string, email: string, password: string) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
    async register() {
        // Implementation for saving user to SupaBase
    }
    async unregister() {
        // Implementation for saving user to SupaBase
    }
}