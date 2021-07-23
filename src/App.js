// main file

import './App.css';
import './algorithms/bubbleSort';


// Function to generate the array of blocks
function generatearray() {

    for (let i = 0; i < 20; i++) {

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
// Promise to swap two blocks
function swap(el1, el2) {
    let container = document.getElementById("array");

    return new Promise((resolve) => {

        // For exchanging styles of two blocks
        let temp = el1.style.transform;
        el1.style.transform = el2.style.transform;
        el2.style.transform = temp;

        window.requestAnimationFrame(function() {

            // For waiting for .25 sec
            setTimeout(() => {
                container.insertBefore(el2, el1);
                resolve();
            }, 250);
        });
    });
}

async function BubbleSort(delay = 100) {
    let blocks = document.querySelectorAll(".block");
    console.log("Bubble Sort");

    // BubbleSort Algorithm
    for (let i = 0; i < blocks.length; i += 1) {
        for (let j = 0; j < blocks.length - i - 1; j += 1) {

            // To change background-color of the
            // blocks to be compared
            blocks[j].style.backgroundColor = "#E74C3C";
            blocks[j + 1].style.backgroundColor = "#E74C3C";

            // To wait for .1 sec
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );

            console.log("run");
            var value1 = Number(blocks[j].childNodes[0].innerHTML);
            var value2 = Number(blocks[j + 1]
                .childNodes[0].innerHTML);

            // To compare value of two blocks
            if (value1 > value2) {
                await swap(blocks[j], blocks[j + 1]);
                blocks = document.querySelectorAll(".block");
            }

            // Changing the color to the previous one
            blocks[j].style.backgroundColor = "#6C3483";
            blocks[j + 1].style.backgroundColor = "#6C3483";
        }

        //changing the color of greatest element
        //found in the above traversal
        blocks[blocks.length - i - 1]
            .style.backgroundColor = "#28B463";
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
