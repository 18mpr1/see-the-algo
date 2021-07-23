// main file

import './App.css';
import BubbleSort from './algorithms/bubbleSort';
import MergeSort from "./algorithms/mergeSort";
import QuickSort from "./algorithms/quickSort";
import BogoSort from "./algorithms/bogoSort";
import InsertionSort from "./algorithms/insertionSort";
import CocktailSort from "./algorithms/cocktailSort";
import SelectionSort from "./algorithms/selectionSort";

// Function to generate the array of blocks
function generatearray() {

    for (let i = 0; i < 20; i++) { // 20 blocks

        let container = document.getElementById("array");


        // Return a value from 1 to 100 (both inclusive)
        let value = Math.ceil(Math.random() * 100);

        // Creating element div
        let array_ele = document.createElement("div");

        // Adding class 'block' to div
        array_ele.classList.add("block");

        // Adding style to div
        array_ele.style.height = `${value * 3}px`;
        array_ele.style.transform = `translate(${i * 30}px)`;

        // Creating label element for displaying
        // size of particular block
        let array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        array_ele_label.innerText = value;

        // Appending created elements to index.html
        array_ele.appendChild(array_ele_label);
        container.appendChild(array_ele);
    }

}


// Generates array when window loads
// If the window is reloading, reload
window.onload = function() {
    generatearray();
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        generatearray();
    }
}

function clear() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}



function App() {
  return (
    <div className="App">
        <body>
            <header><b>See-The-Algo</b></header>
            <div id="array">

            </div>
            <div id="button-bar">
                <button id="reset" onClick={clear}><b>Generate Array</b></button>
                <button id="bubble-sort" onClick={BubbleSort}><b>Bubble Sort</b></button>
                <button id="merge-sort" onClick={MergeSort}><b>Merge Sort</b></button>
                <button id="quick-sort" onClick={QuickSort}><b>Quick Sort</b></button>
                <button id="selection-sort" onClick={SelectionSort}><b>Selection Sort</b></button>
                <button id="cocktail-sort" onClick={CocktailSort}><b>Cocktail Sort</b></button>
                <button id="insertion-sort" onClick={InsertionSort}><b>Insertion Sort</b></button>
                <button id="bogo-sort" onClick={BogoSort}><b>Bogo Sort</b></button>
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
