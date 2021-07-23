// main file

import './App.css';
import './algorithms/bubbleSort';

function helloTest(){
    console.log("Hello, world");
}



// Function to generate the array of blocks
function generatearray() {
    for (var i = 0; i < 20; i++) {


        var container = document.getElementById("array");

        // Return a value from 1 to 100 (both inclusive)
        var value = Math.ceil(Math.random() * 100);

        // Creating element div
        var array_ele = document.createElement("div");

        // Adding class 'block' to div
        array_ele.classList.add("block");

        // Adding style to div
        array_ele.style.height = `${value * 3}px`;
        array_ele.style.transform = `translate(${i * 30}px)`;

        // Creating label element for displaying
        // size of particular block
        var array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        array_ele_label.innerText = value;

        // Appending created elements to index.html
        array_ele.appendChild(array_ele_label);
        container.appendChild(array_ele);
    }
}

function clear(){
    console.log("Clear array");
}


function App() {
  return (
    <div className="App">
        <body>
            <header><b>See-The-Algo</b></header>
            <div id="array">

            </div>
            <div id="button-bar">
                <button id="reset" onClick={generatearray}><b>Reset Array</b></button>
                <button id="bubble-sort"><b>Bubble Sort</b></button>
                <button id="clear-array" onClick={clear}><b>Clear</b></button>
                <button onClick={helloTest}>
                    <b>Click to test</b>
                </button>
            </div>

            <footer>
                <p>Copyright info will go here</p>
                <a href="https://github.com/18mpr1/see-the-algo">Github Repsitory</a>
                <p>2021</p>
            </footer>
        </body>
    </div>
  );

}

export default App;
