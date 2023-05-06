import { FirestoreService } from "../services/firestore-service.service";

export class User {
    private create_date: any;
    private last_login: any;
    private email: string = "";
    private isAdmin: boolean = false;
    private name: string = "";
    private surname: string = "";
    private phone: string = "";
    private username: string = "";
    private wallets: [] = [];

    constructor(create_date: any, last_login: any, email: string,
        isAdmin: boolean, name: string, surname: string, phone: string,
        username: string, wallets: []) {
        this.create_date = create_date;
        this.last_login = last_login;
        this.email = email;
        this.isAdmin = isAdmin;
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.username = username;
        this.wallets = wallets;
    }

    public getCreateDate() { return this.create_date }
    public getLastLogin() { return this.last_login }
    public getEmail() { return this.email }
    public getIsAdmin() { return this.isAdmin }
    public getName() { return this.name }
    public getSurname() { return this.surname }
    public getPhone() { return this.phone }
    public getUsername() { return this.username }
    public getWallets() { return this.wallets }

    //set user elements
    public setCreateDate(create_date: any) { this.create_date = create_date }
    public setLastLogin(last_login: any) { this.last_login = last_login }
    public setEmail(email: string) { this.email = email }
    public setIsAdmin(isAdmin: boolean) { this.isAdmin = isAdmin }
    public setName(name: string) { this.name = name }
    public setSurname(surname: string) { this.surname = surname }
    public setPhone(phone: string) { this.phone = phone }
    public setUsername(username: string) { this.username = username }
    public setWallets(wallets: []) { this.wallets = wallets }

    public static getUserFromData() {
        let temp = localStorage.getItem("userData")

        if (temp != null) {
            console.log(JSON.parse(temp));
            let userdata = JSON.parse(temp);
            let user = new User(userdata['create_date'],
                userdata['last_login'], userdata['email'], userdata['isAdmin'],
                userdata['name'], userdata['surname'], userdata['phone'],
                userdata['username'], userdata['wallets']);

            return user;
        }
        return undefined;
    }
}