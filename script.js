var nummern = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];
var innenRotation = 0;
var ballRotation = 0;

// nummern.push(numbers.shift());

function onClick() {
    radDrehen();
    ballDrehen();
}

function radDrehen() {
    var innenFelderWeiter = Math.round(Math.random() * 37);
    var rotationInnen = (innenRotation + innenFelderWeiter) * 9.7297;
    innenRotation += innenFelderWeiter;
    while (innenRotation >= 37) {
        innenRotation -= 37;
    }
    for (var i = 0; i < innenFelderWeiter; i++) {
        nummern.push(nummern.shift());
    }
    innen.style.rotate = "-" + rotationInnen + "deg";
    // alert(nummern[0])
}

function ballDrehen() {
    var ballFelderWeiter = Math.round(Math.random() * 37);
    var rotationBall = (ballRotation + ballFelderWeiter) * 9.7297;
    ballRotation += ballFelderWeiter;
    while (ballRotation >= 37) {
        ballRotation -= 37;
    }
    ball.style.rotate = rotationBall + "deg";
    // alert(ballFelderWeiter);
    alert(nummern[ballRotation]);
}