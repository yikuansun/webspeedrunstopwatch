scheme = ["#141414", "#002F63", "#003D82", "#0C53A6", "#2B6ABC"];

stopwatch = document.createElement("stopwatch");
stopwatch.style.backgroundColor = "black";
stopwatch.style.color = scheme[0];
stopwatch.style.position = "fixed";
stopwatch.style.width = "250px";
stopwatch.style.height = "400px";
stopwatch.style.zIndex = "420";
stopwatch.style.top = "0";
stopwatch.style.right = "0";
document.body.appendChild(stopwatch);

decobar = document.createElement("div");
decobar.style.width = "100%";
decobar.style.height = "5px";
decobar.style.backgroundColor = scheme[1];
stopwatch.appendChild(decobar);

time = document.createElement("div");
clock = 0;
time.innerHTML = clock / 1000;
time.style.fontFamily = "Arial";
time.style.color = scheme[4];
time.style.marginTop = "5px";
time.style.marginLeft = "10px";
time.style.marginBottom = "5px";
time.style.fontSize = "40px";
stopwatch.appendChild(time);

splits = document.createElement("div");
stopwatch.appendChild(splits);

updateClock = function() {
    clock++;
    time.innerHTML = clock / 1000;
};

document.addEventListener("keydown", function(e) {
    if (e.altKey) {
        if (e.keyCode == 83) {
            splitText = document.createElement("div");
            splitText.innerHTML = clock / 1000;
            splitText.style.color = scheme[3];
            splits.appendChild(splitText);
        }
        else if (e.keyCode == 82) {
            clock = 0;
            splits.innerHTML = "";
            mainLoop = setInterval(updateClock, 1);
        }
        else if (e.keyCode == 81) {
            clearInterval(mainLoop);
        }
        e.preventDefault();
    }
}, false);