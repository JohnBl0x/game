

function move (){
    let instructions = document.getElementById("instructions").value
    let yAxis = 0
    let xAxis = 0
    instructions.toUpperCase().split("").map(function (x){
        if (x==="D") yAxis += 10
        if (x==="U") yAxis -= 10
        if (x==="R") xAxis += 10
        if (x==="L") xAxis -= 10
        
        return x
    })

    let block = document.getElementById("block").style

    block.top = yAxis + "%"
    block.left = xAxis + "%"
}




