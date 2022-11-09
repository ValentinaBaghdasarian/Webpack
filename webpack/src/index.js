import "@babel/polyfill";
import "./index.html";
import "./index.scss";
import {a, sum} from "./modules/calc";
import code from './img/code.jpg';

const img = new Image();
img.src = code;

console.log(a(2, 4));
console.log(sum(3, 4));

