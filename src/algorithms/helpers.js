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

export default swap;