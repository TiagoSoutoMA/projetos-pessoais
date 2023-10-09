let log = new Log(document.querySelector(".log"));

let charH = new TeamHarry("Harry Potter");
let charV = new TeamVoldemort("Voldemort");

const stage = new Stage(
    charH, charV, document.querySelector("#char"), document.querySelector("#monster"), log
)

stage.start();
