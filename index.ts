// INSTALL TYPESCRIPT GLOBALLY
// npm install -g typescript

// RUN APP:
// tsc --watch
// nodemon index.js

// Basic Types
let number: number = 32
let string: string = 'John'
let boolean = true
let any: any = 'this could be any type'

let arrayOfNumbers: number[] = [1, 2, 3]
let arrayOfStrings: string[] = ['a', 'b', 'c']
let arrayOfAny: any[] = [1, 'a', true]
let arrayOfObjects: object[] = [{ a: 1 }, { b: 2 }]

let tuple: [string, number] = ['a', 1]
let tupleArray: [string, number][] = [
  ['a', 1],
  ['b', 2],
]

// Union
let union: string | number = 'a'
union = 1

// Objects
// TIP: You can also use interfaces (interface User {...}) -see below

// Record<string, never> means an empty object, use this instead of {}
type User = {
  name: string
  age: number
}

const user: User = {
  name: 'Jack',
  age: 32,
}

// Array of my defined objects
const arrayOfUsers: User[] = [
  {
    name: 'Jack',
    age: 32,
  },
  {
    name: 'John',
    age: 47,
  },
]

// Functions
function add(a: number, b: number): number {
  return a + b
}

const subtract = (a: number, b: number): number => a - b

function log(message: string | number): void {
  console.log(message)
}

// Interfaces (useful when declaring objects)
interface UserInterface {
  // define a readonly property (the id cannot be reassigned, e.g. user1.id = 2)
  readonly id: number
  name: string
  // define an optional property (the age property is optional)
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
}
user1.age = 47

// Function interfaces - define the shape of a function
interface MyMathFunction {
  (a: number, b: number): number
}

// When implementing a function from an interface, all types must match the interface
const multiply: MyMathFunction = (a: number, b: number): number => a * b

// Type assertion (when you know the type of a variable)
// TIP: Try to avoid using any type
let customerID: any = '123'
let customerIDAsNumber = customerID as number
let customerIDAsNumber2 = <number>customerID

// ------------------------------------------------------------
// Classes
class Person {
  constructor(public id: number, public name: string) {}

  register() {
    return `${this.name} is now registered`
  }
}

const person1 = new Person(1, 'Jack')
const person2 = new Person(2, 'John')

// TIP: class properties are public by default. we can also define private and protected properties (those will be only accessible within the class and its subclasses)
// e.g. private id: number, protected name: string

// Extending Classes (Subclasses)
class Employee extends Person {
  constructor(id: number, name: string, public position: string) {
    super(id, name)
  }

  // Overriding a method
  register() {
    return `${this.name} is now registered as an employee`
  }
}

const employee1 = new Employee(1, 'James', 'Developer')

console.log(employee1.register())

// Class Interface
interface FruitInterface {
  name: string
  isFavorite: boolean
  favorite(): string
}

class Fruit implements FruitInterface {
  name: string
  isFavorite: boolean

  constructor(name: string, isFavorite: boolean) {
    this.name = name
    this.isFavorite = isFavorite
  }

  favorite() {
    if (this.isFavorite) {
      return `${this.name} is my favorite fruit`
    } else {
      return `${this.name} is my NOT favorite fruit`
    }
  }
}

const banana = new Fruit('banana', false)
const mango = new Fruit('mango', true)

// Generics (allow us to create reusable components)
// <T> is a placeholder that allows to later define the type of the generic
function getId<T>(id: T) {
  return id
}
const numberId = getId<number>(1) // this function call will only accept numbers
const stringId = getId<string>('1') // this function call will only accept str

// Enum - allows to define a set of enumerated named constants
enum Color {
  Red,
  Green,
  Blue,
}
let color: Color = Color.Blue // 2
let colorName: string = Color[2] // 'Blue'

enum Color2 {
  Red = 1,
  Green,
  Blue,
}
let color2: Color2 = Color2.Blue // 3

enum Color3 {
  Red = '#ff0000',
  Green = '#00ff00',
  Blue = '#0000ff',
}
let color3: Color3 = Color3.Blue // '#0000ff'

// Pick - allows to pick a subset of properties from an object type
interface User2 {
  id: number
  name: string
  lastName: string
  age: number
}

type Username = Pick<User2, 'name' | 'lastName'>

// Omit - allows to omit a subset of properties from an object type
type UserWithoutId = Omit<User2, 'id'>

// Partial - allows to make all properties of an object type optional
type PartialUser = Partial<User2>
