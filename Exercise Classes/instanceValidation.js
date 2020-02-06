class CheckingAccount{
    innerClientId;
    innerEmail;
    innerFirstName;
    innerLastName;

    constructor(clientId, email, firstName, lastName){
        this.clientId=clientId;
        this.email=email;
        this.firstName=firstName;
        this.lastName=lastName;
    }

    get clientId(){
        return this.innerClientId;
    }
    set clientId(value){
        if (value.length!==6 ||  isNaN(Number(value))) {
            throw new TypeError('Client ID must be a 6-digit number');
        }
        this.innerClientId=value;
    }

    get email(){
        return this.innerEmail;
    }
    set email(value){
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))) {
            throw new TypeError('Invalid e-mail');
        }
    }

    get firstName(){
        return this.innerFirstName;
    }
    set firstName(value){
        if (value.length<3||value.length>20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }
        if (!(/^[A-Za-z]{3,20}$/.test(value))) {
            throw new TypeError('First name must contain only Latin characters');
        }
        this.innerFirstName=value;
    }

    get lastName(){
        return this.innerLastName;
    }
    set lastName(value){
        if (value.length<3||value.length>20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }
        if (!(/^[A-Za-z]{3,20}$/.test(value))) {
            throw new TypeError('Last name must contain only Latin characters');
        }
        this.innerLastName=value;
    }
}
let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')