export class Person {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string,){
        this.firstName = firstName;
        this.lastName= lastName;
       
    }

    getFullInfo(): string{
        return this.firstName + " " + this.lastName;
    }

    setFullInfo(firstName: string, lastName: string,): void{
        this.firstName = firstName;
        this.lastName = lastName;
        
    }
}