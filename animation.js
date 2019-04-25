window.onkeydown = function(e) {myFunction(e)};
function myFunction(e) {
    var ball = document.getElementById("ball");
    console.log(ball.offsetLeft);
    var distance = 50;
    switch (e.keyCode) {
        case 38:
            //Up
            //ball.style.top = ball.offsetTop-distance;
            break;
        case 39:
            //Rigth
            ball.style.left = ball.offsetLeft+distance;
            break;
        case 37:
            //Left
            ball.style.left = ball.offsetLeft-distance;
            break;
        case 40:
            //down
            //ball.style.top = ball.offsetTop+distance;
            break;
        default:
            break;
    }
}