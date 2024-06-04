document.addEventListener("DOMContentLoaded", function () {
    // Initialize Shepherd.js tour
    const tour = new Shepherd.Tour({
      useModalOverlay: true,
      defaultStepOptions: {
        classes: "shepherd-theme-arrows",
        scrollTo: true,
      },
    });
  
  // Define steps
  tour.addStep({
    id: "step-1",
    text: "Welcome! Click this button to roll the dice.",
    attachTo: {
      element: "#rollButton",
      on: "bottom",
    },
    buttons: [
      {
        text: "Next",
        action: tour.next,
        
      },
    ],
  });
  
  tour.addStep({
    id: "step-2",
    text: "The result of the roll will be displayed above the dice.",
    attachTo: {
      element: "h1",
      on: "top",
    },
    buttons: [
      {
        text: "Close",
        action: tour.complete,
      },
    ],
  });
  
  tour.start();
  
  
    // Add event listener to the roll button
    document.getElementById("rollButton").addEventListener("click", refreshPage);
  });
  
  // Dice rolling functionality
  function rollDice() {
    var randomvariable1 = Math.floor(Math.random() * 6)+1;
    var randomvariable2 = Math.floor(Math.random() * 6)+1;
    var randomimage1 = "images/dice"+randomvariable1+".png"
    var randomimage2 = "images/dice"+randomvariable2+".png"
  
    document.querySelector(".img1").setAttribute("src", randomimage1);
    document.querySelector(".img2").setAttribute("src", randomimage2);
  
    if(randomvariable1 < randomvariable2){
        document.querySelector("h1").innerHTML="Player 2 wins";
        }else if(randomvariable1 === randomvariable2){
        document.querySelector("h1").innerHTML="Draw"
        }else {
            document.querySelector("h1").innerHTML="Player 1 wins"
        } 
  }
  
  function refreshPage() {
    const img1 = document.querySelector(".img1");
    const img2 = document.querySelector(".img2");
  
    // Remove the class if it exists to reset the animation
    img1.classList.remove("image360");
    img2.classList.remove("image360");
  
    // Trigger a reflow to restart the animation
    void img1.offsetWidth;
    void img2.offsetWidth;
  
    // Add the rotation class to trigger the animation
    img1.classList.add("image360");
    img2.classList.add("image360");
  
    // Roll the dice after the animation completes
    setTimeout(rollDice, 1000); // The duration of the animation
  }
  