// Bubble Sort
// https://www.geeksforgeeks.org/bubble-sort-visualization-using-javascript/

import swap from './helpers';

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

export default BubbleSort;