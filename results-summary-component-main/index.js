
let data = fetch("../data.json")
.then(response =>  response.json())
.then((value) =>{
    let arr = [];
    let reaction = document.getElementById("reaction-points");
    let memory = document.getElementById("memory-points");
    let verbal = document.getElementById("verbal-points");
    let visual = document.getElementById("visual-points");
    for(let i = 0; i < value.length; i++){
        arr.push(value[i]);
    }    
    reaction.innerHTML = arr[0].score;
    memory.innerText = arr[1].score;
    verbal.innerText = arr[2].score;
    visual.innerText = arr[3].score
})
