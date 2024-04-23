// Типи Даних:
const num:number = 4;
const str:string = 'TS'
const myBoolean:boolean = false
const absent: null = null
const notDefined:undefined = undefined
let obj: {} = { name: "Jack", age: 34 };

function printValue(value: unknown) {
    if (typeof value === "string") {
        console.log(value);
    } else {
        console.log("Not a string");
    }
}

printValue("This is an unknown value")

// void - це тип, який не приймає жодних значень.
// Цей тип часто використовується для функцій, які не повертають жодних значень.
function sayHi():void {
    console.log('Hi')
}

sayHi()

// never це тип, який ніколи не приймає жодних значень.
// Цей тип часто використовується для коду, який завжди викликає помилку.

// function throwError(message: string): never {
//     throw new Error(message);
// }

// try {
//     throwError("An error");
// } catch (error) {
//     console.error(error);
// }
console.log('');

// Інтерфейси
interface Person {
    name: string
    age: number
    hobbies:string[]
}

const person: Person = {
    name: 'Jack',
    age: 36,
    hobbies: ['читання', 'біг', 'програмування'],
};

function introduceYourself(person: Person): void {
    console.log(`Привіт! Мене звати ${person.name}. Мені ${person.age} років.`);
    if (person.hobbies.length > 0) {
        console.log("Мої хобі:");
        person.hobbies.forEach(hobby => {
            console.log(`- ${hobby}`);
        });
    } else {
        console.log("У мене немає хобі :(");
    }
}

introduceYourself(person)
console.log('');


// Функції
const addNumbers = (a: number, b: number): number => {
    return a + b;
};

const result = addNumbers(6, 4);
console.log("Сума чисел:", result);
console.log('');


// Перелічення (Enum):
enum WeekDay {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

const currentDay: WeekDay = new Date().getDay() - 1;
console.log(`Today is: ${WeekDay[currentDay]}`);