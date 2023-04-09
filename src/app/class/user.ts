class User{
    create_date: any;
    last_login: any;
    email:string = "";
    isAdmin: boolean = false;
    name: string = "";
    surname: string = "";
    phone: string = "";
    username: string = "";
    wallets: [] = [];


    constructor(create_date:any, last_login:any, email:string, 
        isAdmin: boolean, name:string, surname:string, phone:string, 
        username: string, wallets: []){
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
    
    public getCreateDate(){return this.create_date}
    public getLastLogin(){return this.last_login}
    public getEmail(){return this.email}
    public getIsAdmin(){return this.isAdmin}
    public getName(){return this.name}
    public getSurname(){return this.surname}
    public getPhone(){return this.phone}
    public getUsername(){return this.username}
    public getWallets(){return this.wallets}
}