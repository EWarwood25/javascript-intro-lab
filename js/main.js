(function(){
    document.getElementById("myHeading").innerHTML = "Ethan's Website";
    document.querySelector("li").setAttribute("class", "currentPage");
    const myBtn = document.getElementById("myTestBtn");
    myBtn.addEventListener('click', () => {
        console.info("I was clicked!")
    })
    // let redBtn = document.querySelector(".red");
    // redBtn.addEventListener("click", () => {
    //     document.body.setAttribute("class", "redBack")
    // })
    // let greenBtn = document.querySelector(".green");
    // greenBtn.addEventListener("click", () => {
    //     document.body.setAttribute("class", "greenBack")
    // })
    // let blueBtn = document.querySelector(".blue");
    // blueBtn.addEventListener("click", () => {
    //     document.body.setAttribute("class", "blueBack")
    // })
    // let backBtn = document.querySelector(".reset");
    // backBtn.addEventListener("click", () => {
    //     document.body.removeAttribute("class")
    // })
    colBtns.forEach(colBtn => {
    colBtn.addEventListener('click', function(ev) {
            console.info('Button clicked: $(ev.target.textContent)');
            let backCol = ev.target.innerText;
            backCol = backCol.toLowerCase();
            backCol = backCol + "Back";
            document.body.setAttribute('class', backCol)
        })
    });
})();