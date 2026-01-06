// const element=React.createElement("h1",{id:"title"},"Hello Coders");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);
//this is a tedious process
//we can use something like this

const element=<h1 id="title">Hello coder Army</h1>;
const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);


//React components
function App(){
    return <h1>Hello Coder Army</h1>
}
root.render(App());
root.render(<App/>);

//we can also use arguments with the react components

function App2(name){
    return <h1>Hello {name}</h1>;
}
root.render(App2("Aditya"));

//it can also handle values and return single values

function App3(){
    return <h1>The value is {10+20}</h1>;
}
root.render(App3());

//it handles null, undefined, arrays, true, false, it can not identify objects even other text  in html  

//how to use arrays

courses=["HTML","CSS","JavaScript","React"];
const details=(
    <ul>
        {courses.map(item=><li>item</li>)};
    </ul>
)