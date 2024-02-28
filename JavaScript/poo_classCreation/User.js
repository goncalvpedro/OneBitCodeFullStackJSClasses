class User {
    constructor (fullname, email, password) {
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }

    login (email, password) {
        if (this.email === email && this.password === password) {
            return "Login Successful";
        }
        else {
            return "Login Failed";
        }

}}