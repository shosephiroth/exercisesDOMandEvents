function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.

    // add button event listener
    // anonymous function
    // take button variable/element as parameter
    // update paragraph element/varible .innerHTML
  
    button.addEventListener("click", (button) => {
        paragraph.innerHTML = "Houston, we have liftoff!";
    });



   

    
}

window.addEventListener("load", init);