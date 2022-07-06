var turn
let target = 30
var min = 1
var max = 6
var sum1 = 0
var sum2 = 0
var i = 1

function play() {
    var x = Math.floor(Math.random() * (max - min + 1) + min)
    if (sum1 >= 30 || sum2 >= 30) {
        window.location.reload(true);
        return;
    }
    document.getElementById('v').value = x
    if (i % 2 != 0 && sum1 < 30) {
        sum1 += x;
        console.log(sum1);
        document.getElementById('s1').value = sum1
        i++
    } else if (i % 2 === 0 && sum2 < 30) {
        sum2 += x;
        console.log(sum2);
        document.getElementById('s2').value = sum2
        i++
    }
    if (sum1 >= 30) {
        document.getElementById('r').innerHTML = 'Player 1 wins!!'
    } else if (sum2 >= 30) {
        document.getElementById('r').innerHTML = 'Player 2 wins!!'
    }
}