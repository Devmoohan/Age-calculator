
let myInput = document.getElementById('myInput')
let RElm = document.querySelector('.result')
let btn = document.getElementById('btn')
// console.log(result)
// console.log(btn)
// console.log(myInput)

let presentTime = new Date();
    
btn.addEventListener('click' ,showAge)

function showAge(){
    let ageInput = myInput.value;
    
    
    if(ageInput === ''){
        alert('Please enter date')
    } else{
        let birthYear = new Date(ageInput)
        let currentYear = presentTime.getFullYear();
        let onlyYear = birthYear.getFullYear()
        let result = currentYear - onlyYear;
        
        RElm.textContent = result;
        
    }
    
}

// console.log("2000" - new Date())