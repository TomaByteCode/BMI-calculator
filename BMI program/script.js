let height
let weight
let result
document.getElementById("mySubmit").onclick = function(){
    height = document.getElementById("myText").value
    height = Number(height) / 100
    weight = document.getElementById("myText2").value
    weight = Number(weight)
    result = weight / (height ** 2).toFixed(2)
    result = Math.round(result);
    document.getElementById("result").textContent = "Vaše BMI je " + result 

}