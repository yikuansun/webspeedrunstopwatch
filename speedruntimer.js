scheme = ["#141414", "#002F63", "#003D82", "#0C53A6", "#2B6ABC"];

AltToStartClock = true;

stopwatch = document.createElement("stopwatch");
stopwatch.style.backgroundImage = "url('https://webspeedrunstopwatch.netlify.app/bg_translucent.png')";
stopwatch.style.color = scheme[0];
stopwatch.style.position = "fixed";
stopwatch.style.width = "250px";
stopwatch.style.height = "400px";
stopwatch.style.zIndex = "6969";
stopwatch.style.top = "0";
stopwatch.style.right = "0";
stopwatch.style.filter = "hue-rotate(0deg)";
document.body.appendChild(stopwatch);

decobar = document.createElement("div");
decobar.style.width = "100%";
decobar.style.height = "5px";
decobar.style.backgroundColor = scheme[1];
stopwatch.appendChild(decobar);

time = document.createElement("div");
clock = 0;
time.innerHTML = "0:00";
time.style.fontFamily = "Trebuchet MS";
time.style.color = scheme[4];
time.style.marginTop = "5px";
time.style.marginLeft = "10px";
time.style.marginBottom = "5px";
time.style.fontSize = "40px";
stopwatch.appendChild(time);

splits = document.createElement("div");
stopwatch.appendChild(splits);

updateClock = function() {
    clock += 10;
    clockDisp();
};

clockDisp = function() {
    s = (clock % 60000) / 1000;
    m = Math.floor(clock / 60000);
    s_display = (s < 10)?("0"+s.toString()):(s.toString());
    time.innerHTML = m.toString() + ":" + s_display;
};

document.addEventListener("keydown", function(e) {
    if (!e.repeat) {
        if (e.altKey) {
            if (AltToStartClock) {
                clock = 0;
                splits.innerHTML = "";
                mainLoop = setInterval(updateClock, 10);
                AltToStartClock = false;
            }
            else {
                clearInterval(mainLoop);
                e.preventDefault();
                AltToStartClock = true;
            }
            e.preventDefault();
        }
        else if (e.shiftKey) {
            splitText = document.createElement("div");
            splitText.innerHTML = time.innerText;
            splitText.style.color = scheme[3];
            splitText.style.fontSize = "24px";
            splitText.style.fontFamily = "Trebuchet MS";
            splitText.style.marginLeft = "12px";
            splitText.style.marginTop = "2px";
            splitText.style.marginBottom = "2px";
            splits.appendChild(splitText);
            e.preventDefault();
        }
    }
}, false);