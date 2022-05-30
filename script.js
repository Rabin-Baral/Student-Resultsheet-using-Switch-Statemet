function addStudents(){

    //Getting Marks from user
    let sName = window.prompt("Enter the Students Name")
    let engMark = window.prompt("Enter the Mark in English: ")
    engMark = Number(engMark)
    let compMark = window.prompt("Enter the Mark in Computer: ")
    compMark = Number(compMark)
    let mathMark = window.prompt("Enter the Mark in Maths: ")
    mathMark = Number(mathMark)
    let scMark = window.prompt("Enter the Mark in Science: ")
    scMark = Number(scMark)

    let TOM = engMark + compMark + mathMark + scMark

    //Creating Elements

    let newStd = document.createElement("tr")
    let student = document.createElement("td")
    student.innerHTML = sName

    let sEngMark = document.createElement("td")
    sEngMark.innerHTML = engMark
    let sCompMark = document.createElement("td")
    sCompMark.innerHTML = compMark
    let sMathMark = document.createElement("td")
    sMathMark.innerHTML = mathMark
    let sScMark = document.createElement("td")
    sScMark.innerHTML = scMark

    let totalMark = document.createElement("td")
    totalMark.innerHTML = TOM
    let sPer = document.createElement("td")
    let pCalc = TOM/4
    sPer.innerHTML = pCalc

    let sGrade = document.createElement("td")
    switch(true){
        case pCalc >= 90:
            sGrade.innerHTML = "A+"
            break;
        case pCalc >= 80:
            sGrade.innerHTML = "A"
            break;
        case pCalc >= 70:
            sGrade.innerHTML = "B+"
            break;
        case pCalc >= 60:
            sGrade.innerHTML = "B"
            break;
        case pCalc >= 50:
            sGrade.innerHTML = "C+"
            break;
        case pCalc >= 40:
            sGrade.innerHTML = "C"
            break;
        default:
            sGrade.innerHTML = "F"
    }

    let sResult = document.createElement("td")
    if(engMark >= 40 && compMark >= 40 && mathMark >= 40 && scMark >= 40){
        sResult.innerHTML = "Pass";
    }
    else{
        sResult.innerHTML = "Try Again"
    }

    let btnTd = document.createElement("td")
    let remBtn = document.createElement("Button")
    remBtn.innerHTML = "Remove"
    remBtn.classList.add("btn", "btn-warning")
    btnTd.appendChild(remBtn)
    remBtn.addEventListener("click", function(){
        if(confirm("Are you sure you want to remove this?") == true){
           this.parentElement.parentElement.remove()
        }
    })

    //appending them into HTML
    
    newStd.appendChild(student)
    newStd.appendChild(sEngMark)
    newStd.appendChild(sCompMark)
    newStd.appendChild(sMathMark)
    newStd.appendChild(sScMark)
    newStd.appendChild(totalMark)
    newStd.appendChild(sPer)
    newStd.appendChild(sGrade)
    newStd.appendChild(sResult)
    newStd.appendChild(btnTd)

    //Fetching data to the table
    document.getElementById("tbody").appendChild(newStd)

}

//cancel button

function cancel(){
    if(confirm("You're going to delete all the students' database, are you sure?")==true){
        javascript:location.reload(true) //this line will refresh the page again

    }
}
