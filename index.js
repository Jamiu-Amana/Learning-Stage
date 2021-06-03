function play() {
    let generatedNumber = Math.floor(Math.random() * 11)
    let selectedNumber = Number(document.getElementById("selectedNumber").value)
    console.log(generatedNumber)
    let money = document.getElementById("money").value
    

    if (!selectedNumber || !money) {
        alert("enter required fields")
    }
    else if (selectedNumber > 10 && selectedNumber < 0){
        alert("please enter a number less than 10")
        document.getElementById("selectedNumber").value =0
        document.getElementById("money").value =0
    }
    else{
        if(generatedNumber === selectedNumber){
            let reward = money * 2
            document.getElementById("reward").innerHTML = "Congratulation" + generatedNumber
        } else {
            reward = money * 0
            document.getElementById("reward").innerHTML = "Try again later" + generatedNumber
        }

    }
    
}


