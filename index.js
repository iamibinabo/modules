import {sayMyColor,sayHello} from "./color.js";
import { sayMyName,sayMyPet } from "./name.js";
import sayMyCountry from "./country.js";

let color = sayMyColor()
let name = sayMyName()
let pet = sayMyPet()
let country = sayMyCountry()
let word = sayHello()

console.log(color,name,pet,country)