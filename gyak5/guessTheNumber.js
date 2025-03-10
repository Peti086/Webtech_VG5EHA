function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

let number = getRndInteger(0, 1000001)
let tip;
let guess = 1;

alert("Találd ki a számot, ami 0 és 1 000 000 között van");

while (guess <= 20) {
    let ok = false;

    while (!ok) {
        tip = prompt("Mi a tipped?");
        let check = parseInt(tip);
        if (isNaN(check)) {
            alert("Nem szám, próbáld újra!");
        }
        else{
            ok = true;
        }
    }
    
    if (tip < number) {
        alert(`${guess}. tip nem talált: A megoldás nagyobb.`);
    } else if(tip > number) {
        alert(`${guess}. tip nem talált: A megoldás kisebb.`);
    } else if(tip == number){
        alert(`Gratulálok!, ${guess} lépésből sikerült!`);
        break;
    }
        
    guess++;

}

if (guess === 21) {
    alert(`Sajnos ez most nem sikerült! A megoldás: ${number}`);
}
