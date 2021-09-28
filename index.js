// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "pink";


function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });



  function moveDodgerRight() {
    console.log("hi")
    const rightNumbers = dodger.style.left.replace("px", "");
    console.log(rightNumbers)
    const right = parseInt(rightNumbers, 10);
    console.log(right)
    if (right < 360) {
        dodger.style.left = `${right + 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        console.log(e.key)
      moveDodgerRight();
    }
  });



  