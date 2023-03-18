// 1.Opening Ceremony callback Function.
// Timeout -> 1000 milliseconds.

function OpeningCeremony(callbackFnc) {
    console.log("Let the games begin");

    const score = { red: 0, blue: 0, green: 0, yellow: 0 };

    setTimeout(() => {
        Race100M(score, callbackFnc);
    }, 1000);
}


// 2.Race 100M Callback Function.
// Timeout -> 3000 milliseconds.

function Race100M(score, callbackFnc) {
    const times = {
        red: Math.floor(Math.random() * 6) + 10,
        blue: Math.floor(Math.random() * 6) + 10,
        green: Math.floor(Math.random() * 6) + 10,
        yellow: Math.floor(Math.random() * 6) + 10,
    };

    console.log("Race100M results:", times);

    const sortedColors = Object.keys(times).sort((a, b) => times[a] - times[b]);
    const firstColor = sortedColors[0];
    const secondColor = sortedColors[1];

    score[firstColor] += 50;
    score[secondColor] += 25;

    console.log("Race100M score:", score);

    setTimeout(() => {
        LongJump(score, callbackFnc);
    }, 3000);
}


// 3.Long Jump Callback Function.
// Timeout -> 2000 milliseconds.

function LongJump(score, callbackFnc) {
    const color = ["red", "yellow", "green", "blue"][Math.floor(Math.random() * 4)];

    score[color] += 150;

    console.log(`LongJump winner: ${color}`);
    console.log("LongJump score:", score);

    setTimeout(() => {
        HighJump(score, callbackFnc);
    }, 2000);
}


// 4.High Jump Callback Function

function HighJump(score, callbackFnc) {
    const color = prompt("What colour secured the highest jump?");

    if (color && score.hasOwnProperty(color)) {
        score[color] += 100;

        console.log(`HighJump winner: ${color}`);
        console.log("HighJump score:", score);

        callbackFnc(score, AwardCeremony);
    } else {
        console.log("Event was cancelled");

        AwardCeremony(score);
    }
}


// 5.Award Ceremony Callback Function

function AwardCeremony(scores) {
    console.log("Award Ceremony begins!");
    const sortedColors = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
    console.log(`${sortedColors[0]} came first with ${scores[sortedColors[0]]} points.`);
    console.log(`${sortedColors[1]} came second with ${scores[sortedColors[1]]} points.`);
    console.log(`${sortedColors[2]} came third with ${scores[sortedColors[2]]} points.`);
    console.log(`${sortedColors[3]} came last with ${scores[sortedColors[3]]} points.`);
}

OpeningCeremony((score, callbackFnc) => {
    console.log("Updated score:", score);

    callbackFnc(score, (score) => {
        console.log("Updated score:", score);

        callbackFnc(score, (score) => {
            console.log("Updated score:", score);

            callbackFnc(score, (score) => {
                console.log("Updated score:", score);
            });
        });
    });
});  