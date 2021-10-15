let countButton = document.getElementById("count-button");
let input = document.getElementById("input");

function countVowels() {
let vCount = 0;
let arr = input.value.split("")
for(let i = 0; i < arr.length; i++){
    if(arr[i].toLowerCase() === "a" || arr[i].toLowerCase() === "e" || arr[i].toLowerCase() === "i" || arr[i].toLowerCase() === "o" || arr[i].toLowerCase() === "u"){
        vCount += 1
    }
}
alert("This string has " + vCount + " vowels in it.")
}

countButton.addEventListener("click", countVowels);