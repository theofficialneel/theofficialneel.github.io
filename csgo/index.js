// var style = document.getElementById("style");
// var size = document.getElementById("size");
// var gap = document.getElementById("gap");
// var thick = document.getElementById("thick");
// var dot = document.getElementById("dot");

var commands = document.getElementById("commands");
var copy = document.getElementById("copy");

var commands_string = 
`cl_crosshairstyle 4;
cl_crosshairsize 2.3;
cl_crosshairgap -1.1;
cl_crosshairthickness 1;
cl_crosshairdot 0;
cl_forcepreload 1;
net_graph 1;
net_graphproportionalfont 0;
bind MOUSE4 slot3;
bind MOUSE5 +lookatweapon;
bind f slot4;
bind z +voicerecord;
sensitivity 2.000000;`;
commands.value = commands_string;

copy.addEventListener("click", () => {
    commands.select();
    document.execCommand("copy");
});