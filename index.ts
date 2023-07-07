// 1. Given the data below, define a type alias for representing users.
 
let users = [  
    {
        name:'Brandt C',
        age:99,
        company:'Coding Temple'
    }  
    {
        name:'Brendan Carlson',
        age:99
    }
];

const users1 : {  
        name : 'Brandt C',
        age : 99,
        company : 'Coding Temple'
    } = {
        name : 'Brendan Carlson',
        age : 99
    };

// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.

const week : {
    day1 : string
    day2 : string
    day3 : string
    day4 : string
    day5 : string
    day6 : string
    day7 : string
} = {
    day1 : 'monday'
    day2 : 'tuesday'
    day3 : 'wednesday'
    day4 : 'thursday'
    day5 : 'friday'
    day6 : 'saturday'
    day7 : 'sunday'
}

// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person1 {
    constructor(
        public firstName:string, 
        public lastName:string) {
            this.firstName = firstName
            this.lastName = lastName
        }
        info(): string {
            return `${this.firstName} ${this.lastName}`
        }
}

// 4. Create a new class called "Employee" that extends 
// "Person" and adds a new property called salary. 

class Person {
    constructor(public salary:number){
        this.salary = salary
    }
    printInfo = ():number => {
        return `Ok fine I'll tell you my salary is ${this.salary}`
    }
}

class Employee extends Person {
    constructor(public rank:string, public salary: number){
        super(rank, salary)
    }
}

// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.

interface Employee {
    name : string;
    salary : number;
    info(): string;
}

interface Address {
    street : string;
    city : string;
    zipCode: number;
}

let employee = {
    name:'Brandt C',
    salary:10_000_000,
    address:{
        street:'Clutch Ave',
        city:'Seattle',
        zipCode: 98101
    }
};