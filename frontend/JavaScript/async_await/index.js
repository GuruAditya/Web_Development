async function greet(){
    // return "Aditya";
    return new Promise((resolve,reject)=>{
        reject("Aditya");
    });
}
//it returns a promise
const response=greet();
// console.log(response);
response.then((data)=>console.log(data)).catch((error)=>{
    console.log(error);
})

// const output=await fetch("https://api.github.com/users");
// const data=await output.json();
// console.log(data);

// the problem is that js freezes when await keyword is used

async function github(){
    const output=await fetch("https://api.github.com/users");
    const data=await output.json();
    console.log(data);
    console.log("Hello");
}
github();
console.log("Hello");
