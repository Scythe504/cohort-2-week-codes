//JS is interpreted language - It can execute till an error comes in
console.log("Hello World");
//It is a loosely typed language
//Typescript - It adds datatype making it static.
// *Truster Module - Multithreaded js
//Subroutines - go through this
/*
for(let i = 1;i<=1000;i++){
    console.log(i);
}*/
/*let a = 1;
console.log(a);
let details = {
    name:"Priyanshu",
    age: 17,
    isAdult: false
}
console.log(`Hello ${details.name} Welcome`);
if(details.isAdult){
    console.log('You are adult')
}
else {
    console.log("You are a minor")
}*/
/*
const personArray = ['Harkirat','raman','priyanshu'];

let noArray = [20,23,24,34,22,12,15];

for (let index = 0; index < noArray.length; index++) {
    if(noArray[index]%2===0){
        console.log(noArray[index]);
    };
}
*/

/*function sum(x,y){
    return x+y;
}*/
/*let sum = 0;
for(let i = 0;i<10000000;i++){
    sum+=i;
}
console.log(sum);
setTimeout()
*/

//st.length , str.IndexOf , stlastIndexOf

//slice string str.slice[begin,end)

/*function getSlice(str , start , end){
    console.log("Original String",str);
    console.log("After Slice", str.slice(start,end));
}
getSlice("Hello World", 0, 5);*/

//substring(begin,length) .substr

//replace string - str.replace("replaced","replacer")

//splitString - str.split(element);

//trim - value.trim(),removes spaces from beggining and end

//toUpperCase,toLowerCase

//Parse int

/*console.log(parseInt("42djmdfunf"));
console.log(parseInt("xcv42px"));
console.log("3.14");*/

//array pop push shift - pop_front unshift-push_front

//concat merges two arrays x+y = x.concat(y) and vice versa

//forEach = normal forloop
/*
const initArr =[1,2,3,4,5]
function logThing (str){
    console.log(str);
}
initArr.forEach(logThing);
*/

//Classes 

class Animal {
    constructor(name , legCount, speech){
        this.name = name;
        this.legCount = legCount;
        this.speech = speech;
    }
    speaks(){
        console.log(`HI THERE ${this.speech}`);
    }
}

let dog = new Animal("dog",4,"bhow bhow");//creation of object
let cat = new Animal("cat",4,"Meow");
cat.speaks();//call fn on obj

const currentDate = new Date();
//var.getDate
//var.getFullYear
//var.getTime

//JSON - Javascript object notation

const users = {names: "Priyanshu",age: 24,gender: "male"}
const user1 = '{"name": "Priyanshu","age": 24,"gender": "male"}'
//JSON parse - it wont work without it if accessing the elements
const user = JSON.parse(user1);
console.log(user["name"]);

const finalString = JSON.stringify(users);
console.log(finalString.names);

//Maths fn

//Math.random returns floating point number between 0-9

//rounds to lower value - floor

//Objects

function objectMethods(obj){
    console.log("Original object",obj);

    let keys = Object.keys(obj);
    console.log("After Object.keys():", keys);

    let values = Object.values(obj);
    console.log("After Object.values()", values);

    let entries = Object.entries(obj);
    console.log("After Object.entries()", entries);
    
    //returns a boolean value
    let hasProp = obj.hasOwnProperty("property");
    console.log("After hasOwnProperty()", hasProp);

    let newObj = Object.assign({},obj,{ newProperty: "newValue"});
    console.log("After Object.assign()", newObj);

}

const sampleObj = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
};


let newObj = Object.assign({},sampleObj,{newProperty: "Value4"});

console.log("after Object.assign():",newObj);

objectMethods(sampleObj);

//Week 1.4

//Loops, Function Callbacks in JavaScript

//Call back functions

function powerOf(n){
    const ans = n*n;
    return ans;
}



function toThePower(a,b, fn){
   const val1 = fn(a);
   const val2 = fn(b);
   return val1+val2;
}

console.log(toThePower(2,2,powerOf));
//function can be defined inside of a variable as an anonymus function.
function findSumTill(n){
    let sum = 0;
    for(let i = 0;i<n;i++){
        sum+=i;
    }
    return sum;
}
function sums(){
    console.log(findSumTill(10000));
}
//setTimeout(sums,3*1000);
sums();
console.log("It is printed after 3 something seconds");


//busy waiting
function syncSleep(){
    let a = 1;
    for(let i  = 0;i<100000;i++){
        a++;
    }
}
syncSleep();
sums();
console.log("Hello xyz");



const fs = require("fs");
/*filesys from node - library - An Asynchronus fn
function kiratsReadFile(cb){
    return new Promise(function(){
        fs.readFile("a.txt","utf-8",(err,data)=>{
            resolve (data);
        });
    })
}
function onDone(data){
    console.log(data);
}
kiratsReadFile(onDone);
*/
//Promises
function kiratsReadFile(){
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",(err,data)=>{
            resolve (data);
        });
    })
}
function onDone(data){
    console.log(data);
}
kiratsReadFile().then(onDone);

let d = new Date();
console.log(d.getDate());
//pending,resolved,rejected
function kiratsAsyncFunction(){
    console.log("Inside kiratsFn");
    let p  = new Promise((resolve)=>{
        console.log("Inside promise fn");
        setTimeout(()=>{
            resolve("ketchup");
            console.log("Inside setTimeout");
        },1*1000)
        
    });
    return p;
}
const value = kiratsAsyncFunction();
console.log(value);
value.then(function(data){
    console.log(data);
})
//Await method
function kiratAsyncFunction(){
    let p = new Promise(function(resolve){
        setTimeout(() => {
            resolve("hi there")
        },2000);
    })
    return p;
}
async function main(){
    let value = await kiratAsyncFunction()
    //same as console.log("Hi there scythe");
    /*kiratAsyncFunction().then(function(value){
        console.log(value);
    })*/
    console.log(value);
    
}
main(); 






