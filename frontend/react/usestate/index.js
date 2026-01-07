// let count=0;
// const para=document.createElement('p');
// para.textContent=`counter : ${count}`;
// para.style.fontSize=`30px`;
// const button=document.createElement('button');
// button.textContent='Increment';
// const parent=document.getElementById('root');
// parent.append(para,button);

// button.addEventListener('click',()=>{
//     count++;
//     para.textContent=`counter : ${count}`;
// })

//this is a tedious task to do. react has hooks for the same


// 1. Destructure from the global React object (standard for CDN usage)
const { useState } = React;

function App() {
    // 2. Use 'const' for state variables. 
    // We don't want to reassign 'count' directly.
    const [count, setcount] = useState(0);

    function increaseNumber() {
        // 3. DO NOT use count++. 
        // Pass the new value (count + 1) to the setter function.
        setcount(count + 1);
    }

    return (
        // React.Fragment short syntax (<> </>)
        <> 
            <p>counter: {count}</p>
            <button onClick={increaseNumber}>increment: {count}</button>
        </>
    );
}

// 4. Correct Rendering Logic for React 18
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);