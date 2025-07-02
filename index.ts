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
  age?: number
}

type Username = Pick<User2, 'name' | 'lastName'>

// Omit - allows to omit a subset of properties from an object type
type UserWithoutId = Omit<User2, 'id'>

// Partial - allows to make all properties of an object type optional
type PartialUser = Partial<User2>

// Required - allows to make all properties of an object type required
type RequiredUser = Required<User2>

// Record - allows to create an object type with a specific set of keys and values
let products: Record<string, number> = {
  'MacBook Air': 12,
  'AirPods Pro': 18,
}

// Exclude - creates a new type by excluding specified types from a union type
type Theme = 'light' | 'dark' | 'system'
let themeSwitch: Exclude<Theme, 'system'> = 'light' // light | dark

// Return Type - extracts the return type of a function
function getUser(): { name: string; age: number } {
  return {
    name: 'Jane',
    age: 28,
  }
}

let userReturnType: ReturnType<typeof getUser> = {
  name: 'Bob',
  age: 25,
}

// Parameters - extracts the parameter types of a function
function add2(a: number, b: number): number {
  return a + b
}
let addParams: Parameters<typeof add2> = [5, 10] // [number, number]

// Use addParams to call the function
let sum = add2(...addParams)
console.log(sum) // 15, (5 + 10)

// Readonly - makes all properties in an object type read-only
interface Username2 {
  firstName: string
  lastName: string
}

let user4: Readonly<Username2> = {
  firstName: 'John',
  lastName: 'Doe',
}

// Error: Cannot assign to 'firstName' because it is a read-only property:
// user4.firstName = 'Jane'

// keyof - creates a union type of the keys of an object type
function printUser(user: User, key: keyof User) {
  console.log(`User ${key}: ${user[key]}`)
}
printUser(user, 'name') // User name: Jack
printUser(user, 'age') // User age: 32

// Optional Chaining - allows to safely access deeply nested properties without having to check for null or undefined at each level
interface Address {
  street?: {
    name: string
    number: number
  }
}

const address: Address = {
  street: {
    name: 'Main St',
    number: 123,
  },
}

const streetName = address.street?.name // 'Main St'

// Nullish Coalescing - allows to provide a default value when a variable is null or undefined
const userAge = user.age ?? 18 // if user.age is null or undefined, use 18

// Null Assertion - tells TypeScript that a variable is not null or undefined, even if it cannot be inferred
const streetNumber = address.street!.number // using ! asserts that street is not null or undefined

// Definitely Typed - A community maintained repository of high-quality TypeScript type definitions for popular libraries and frameworks.
// You can install types for a library using npm:
// npm install --save-dev @types/library-name
