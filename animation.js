window.onkeydown = function(e) {myFunction(e)};
function myFunction(e) {
    var ball = document.getElementById("ball");
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
$(document).ready(function(){
    myApp();
});

function myApp() {
    const _this = myApp;
    const dificult = 0;
    const time = 2000;

    _this.init = () => {
        _this.putBulets(0);
        _this.downBullets();
        _this.collision();
    }

    _this.putBulets = (i) => {
        setTimeout(function () {
            $("body").append("<div style=\"left: "+_this.getRandonLeft()+"px;\" data-bulet=\""+i+"\" class=\"bullet\"></div>");
            i++;
            _this.putBulets(i);
        }, time)
    }

    _this.downBullets = () => {
        setTimeout(function () {
            var heigth = $(window).height();
            $("[data-bulet]").each(function (params) {
                var top = $(this).position().top;
                $(this).offset({top:(top+50)});
                if( (top+50) > (heigth-30) )
                    $(this).remove();
            });

            _this.downBullets();
        }, 500);
    }

    _this.collision = () => {
        console.log($("#ball").position());
    }

    _this.getRandonLeft = () => {
        return Math.floor(Math.random() * ( $( window ).width() - 50) );
    }

    _this.init();
}