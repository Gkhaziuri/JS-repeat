// 1. მიიღეთ მომხმარებლების სია https://jsonplaceholder.typicode.com/users-დან
// და ამოიღეთ მხოლოდ მომხმარებლის სახელები მასივში.

// const namesMassive = [];

// getNames = async () => {
//     try {
//         const info = await fetch("https://jsonplaceholder.typicode.com/users");
//         const getJson = await info.json();

//         namesMassive.push(getJson.map(item => item.name))
//         console.log(namesMassive)
//     }
//     catch {
//         return("error")
//     }
// }
// getNames()

// 2. შექმენით კლასი Car,რომელშიც აღწერილი იქნება:მოდელის, კომპანია,
// და წელი. შექმენით ამ კლასში ფუნქცია getCarDetails, რომელიც აბრუნებს
// მანქანის დეტალების შემაჯამებელ სტრიქონს.

// class car {
//     constructor(company, model, year) {
//         this.model = model;
//         this.company = company;
//         this.year = year;
//     }

//     getCarInfo() {
//         return console.log(`This model is ${this.model}, which is made by ${this.company} and it was produced in ${this.year}.`)
//     }
// }

// const newCar = new car("Audi", "S5", 2022)
// newCar.getCarInfo()

// 3.ამ პოსტების API-დან https://jsonplaceholder.typicode.com/posts
// შექმენით კლასის პოსტი თვისებების ID,
// სათაური და ტექსტი. შექმენით Post ობიექტების მასივი მოტანილი მონაცემების საფუძველზე.

// class post {
//     constructor (id, tittle, content){
//         this.id = id;
//         this.tittle = tittle;
//         this.content = content;
//     }
// }

// const getInfo = async () => {
//     try {
//         const info = await fetch("https://jsonplaceholder.typicode.com/posts")
//         const getJson = await info.json();
//         console.log(getJson)
        
//         const newArray = getJson.map((item) => new post(item.id, item.tittle, item.body));
//         console.log(newArray)
//     }
//     catch(error) {
//         console.log(error, "error")
//     }
// }
// getInfo()


// 4. შექმენით ობიექტი,რომელიც შედგება სახელებისა და ასაკს მასივის გათვალისწინებით,
// გაფილტრეთ და დააბრუნეთ ახალი მასივი 18 წელზე უფროსი ასაკის პირების ობიექტებით,
//გამოიყენეთ filter მეთოდი!!

// const object = [
//     {
//         name: "Giorgi",
//         age: 21,
//     },
//     {
//         name: "Nika",
//         age: 17,
//     },
//     {
//         name: "Ana",
//         age: 25,
//     },
//     {
//         name: "Sandro",
//         age: 15,
//     },
// ]

// const result = object.filter((item) => item.age >= 18)
// console.log(result)

// 5.ამ Todo API-დან https://jsonplaceholder.typicode.com/todos,
// შექმენით კლასი Todo,რომელშიც აღწერილი მექნება: ID, title და completed. 
// შემდეგ გაფილტრეთ მხოლოდ დასრულებული სამუშაოები Todo ობიექტების მასივში.

class Todo {
    constructor(id, title, completed) {
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}

const getResult = async () => {
    try{
        const info = await fetch("https://jsonplaceholder.typicode.com/todos")
        const getJson = await info.json()
        const filteredInfo = getJson.filter((item) => item.completed)
        const filteredResult = filteredInfo.map((item) => new Todo(item.id, item.title, item.completed))
        console.log(filteredResult)
    }
    catch(error) {
        console.log("error")
    }
}
getResult()