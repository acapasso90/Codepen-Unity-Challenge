var counter = 0;
setInterval(change, 1000);
function change() {
var redLight = document.querySelectorAll(".lightbulbRed");
var orangeLight = document.querySelectorAll(".lightbulbOrange");
var blueLight = document.querySelectorAll(".lightbulb");
var darkPurpLight =  document.querySelectorAll(".lightbulbDarkPurp");
var pinkLight = document.querySelectorAll(".lightbulbPink");
var ceruleanLight = document.querySelectorAll(".lightbulbCerulean");
var purpleLight = document.querySelectorAll(".lightbulbPurple");
var mintLight = document.querySelectorAll(".lightbulbMint");
var yellowLight = document.querySelectorAll(".lightbulbYellow");
var greenLight = document.querySelectorAll(".lightbulbGreen");
var redSideLight = document.querySelectorAll(".sidelightbulbRed");
var blueSideLight = document.querySelectorAll(".sidelightbulb");
var purpleSideLight = document.querySelectorAll(".sidelightbulbPurple");
var yellowSideLight = document.querySelectorAll(".sidelightbulbYellow");
var greenSideLight = document.querySelectorAll(".sidelightbulbGreen");
var mintSidelight = document.querySelectorAll(".sidelightbulbMint");
var pinkSidelight = document.querySelectorAll(".sidelightbulbPink");
var darkPurpSidelight = document.querySelectorAll(".sidelightbulbDarkPurple");
var ceruleanSidelight = document.querySelectorAll(".sidelightbulbCerulean");
var orangeSidelight = document.querySelectorAll(".sidelightbulbOrange");
let chanceLight = Math.random();
if(chanceLight > 0 && chanceLight < 0.1){for (let i = 0; i < blueLight.length; i++) {
    const blueLights = blueLight[i];
        blueLights.classList.remove('lightbulb');
        blueLights.classList.add('lightbulbOrange');}
        for (let i = 0; i < orangeLight.length; i++) {
            const orangeLights = orangeLight[i];
               orangeLights.classList.remove('lightbulbOrange');
                orangeLights.classList.add('lightbulb');}}
                else if(chanceLight > 0.1 && chanceLight < 0.2){for (let i = 0; i < redSideLight.length; i++) {
                    const redSideLights = redSideLight[i];
                   redSideLights.classList.remove('sidelightbulbRed');
                  redSideLights.classList.add('sidelightbulbCerulean');}
                  for (let i = 0; i < ceruleanSidelight.length; i++) {
                    const ceruleanSideLights = ceruleanSidelight[i];
                    ceruleanSideLights.classList.remove('sidelightbulbCerulean');
                    ceruleanSideLights.classList.add('sidelightbulbRed');}}
        else if (chanceLight > 0.2 && chanceLight < 0.3){for (let i = 0; i < blueSideLight.length; i++) {
            const blueSideLights = blueSideLight[i];
            blueSideLights.classList.remove('sidelightbulb');
           blueSideLights.classList.add('sidelightbulbPink');}
           for (let i = 0; i < pinkSidelight.length; i++) {
            const pinkSideLights = pinkSidelight[i];
            pinkSideLights.classList.remove('sidelightbulbPink');
            pinkSideLights.classList.add('sidelightbulb');}}
        else if (chanceLight > 0.3 && chanceLight < 0.4){for (let i = 0; i < greenSideLight.length; i++) {
            const greenSideLights = greenSideLight[i];
           greenSideLights.classList.remove('sidelightbulbGreen');
          greenSideLights.classList.add('sidelightbulbDarkPurple');};
          for (let i = 0; i < darkPurpSidelight.length; i++) {
            const darkPurpSideLights = darkPurpSidelight[i];
            darkPurpSideLights.classList.remove('sidelightbulbDarkPurple');
            darkPurpSideLights.classList.add('sidelightbulbGreen');}}
        else if (chanceLight > 0.4 && chanceLight < 0.5)
        {for (let i = 0; i < purpleLight.length; i++) {
    const purpleLights = purpleLight[i];
    purpleLights.classList.remove('lightbulbPurple');
    purpleLights.classList.add('lightbulbMint');}
    for (let i = 0; i < mintLight.length; i++) {
        const mintLights = mintLight[i];
        mintLights.classList.remove('lightbulbMint');
        mintLights.classList.add('lightbulbPurple');}}
    else if (chanceLight > 0.5 && chanceLight < 0.6){for (let i = 0; i < purpleSideLight.length; i++) {
        const purpleSideLights = purpleSideLight[i];
        purpleSideLights.classList.remove('sideLightPurple');
        purpleSideLights.classList.add('sidelightbulbMint');}
        for (let i = 0; i < mintSidelight.length; i++) {
            const mintSidelights = mintSidelight[i];
            mintSidelights.classList.remove('sidelightbulbMint');
            mintSidelights.classList.add('sideLightPurple');}}
            else if (chanceLight > 0.6 && chanceLight < 0.7){for (let i = 0; i < yellowLight.length; i++) {
                const yellowLights = yellowLight[i];
                yellowLights.classList.remove('lightbulbYellow');
                yellowLights.classList.add('lightbulbPink');};
                for (let i = 0; i < pinkLight.length; i++) {
                    const pinkLights = pinkLight[i];
                    pinkLights.classList.remove('lightbulbPink');
                    pinkLights.classList.add('lightbulbYellow');}}
           else if (chanceLight > 0.7 && chanceLight < 0.8){for (let i = 0; i < yellowSideLight.length; i++) {
            const yellowSideLights = yellowSideLight[i];
           yellowSideLights.classList.remove('sidelightbulbYellow');
          yellowSideLights.classList.add('sidelightbulbOrange');}
          for (let i = 0; i < orangeSidelight.length; i++) {
            const orangeSideLights = orangeSidelight[i];
            orangeSideLights.classList.remove('sidelightbulbOrange');
            orangeSideLights.classList.add('sidelightbulbYellow');}}
            else if (chanceLight > 0.8 && chanceLight < 0.9){for (let i = 0; i < greenLight.length; i++) {
                const greenLights = greenLight[i];
                greenLights.classList.remove('lightbulbGreen');
                greenLights.classList.add('lightbulbCerulean');};
                for (let i = 0; i < ceruleanLight.length; i++) {
                    const ceruleanLights = ceruleanLight[i];
                    ceruleanLights.classList.remove('lightbulbCerulean');
                    ceruleanLights.classList.add('lightbulbGreen');}}
            else {for (let i = 0; i < redLight.length; i++) {
                const redLights = redLight[i];
                redLights.classList.remove('lightbulbRed');
                redLights.classList.add('lightbulbDarkPurp');};
                for (let i = 0; i < darkPurpLight.length; i++) {
                    const darkPurpLights = darkPurpLight[i];
                    darkPurpLights.classList.remove('lightbulbDarkPurp');
                    darkPurpLights.classList.add('lightbulbRed');}}
  
let keepItGoing = [counter] + chanceLight;


    counter++;
    if(counter >= keepItGoing) { counter = 0; }}