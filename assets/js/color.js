var img_tag = document.getElementById("showcase");
var lush_bt = document.getElementById("lush-bt");
var kofu_bt = document.getElementById("kofu-bt");
var ceru_bt = document.getElementById("ceru-bt");
var elek_bt = document.getElementById("elek-bt");

var images = ["images/lush-gif.webm","images/kofuku-gif.webm","images/cerulean-gif.webm","images/elektropunk-gif.webm"];

lush_bt.addEventListener("click", lush);
kofu_bt.addEventListener("click", kofuku);
ceru_bt.addEventListener("click", cerulean);
elek_bt.addEventListener("click", elektro);

function lush(){
  img_tag.src = images[0];
  document.documentElement.style.setProperty("--bg1", "#262932");
  document.documentElement.style.setProperty("--bg1-active", "#3e424a");
  document.documentElement.style.setProperty("--bg2", "#f6f6f6");
  document.documentElement.style.setProperty("--bg3", "#f3f3f3");
  document.documentElement.style.setProperty("--fg1", "#f3f3f3");
  document.documentElement.style.setProperty("--fg2", "#30333a");
  document.documentElement.style.setProperty("--fg3", "#262932");
  document.documentElement.style.setProperty("--accent", "#262932");
  document.documentElement.style.setProperty("--accent-hover", "#50545b");
  document.documentElement.style.setProperty("--footer-input-bg", "#ccc");
  document.documentElement.style.setProperty("--border", "#fff");
  document.documentElement.style.setProperty("--shadow", "#1a000000");

}

function kofuku(){
  img_tag.src = images[1];
  document.documentElement.style.setProperty("--bg1", "#0F1B1F");
  document.documentElement.style.setProperty("--bg1-active", "#3e424a");
  document.documentElement.style.setProperty("--bg2", "#DCDDB6");
  document.documentElement.style.setProperty("--bg3", "#DCDDB6");
  document.documentElement.style.setProperty("--fg1", "#DCDDB6");
  document.documentElement.style.setProperty("--fg2", "#192a30");
  document.documentElement.style.setProperty("--fg3", "#0F1B1F");
  document.documentElement.style.setProperty("--accent", "#0F1B1F");
  document.documentElement.style.setProperty("--accent-hover", "#50545b");
  document.documentElement.style.setProperty("--footer-input-bg", "#DCDDB6");
  document.documentElement.style.setProperty("--border", "#DCDDB6");
  document.documentElement.style.setProperty("--shadow", "#1a000000");
}


function cerulean(){
  img_tag.src = images[2];
  document.documentElement.style.setProperty("--bg1", "#3a4756");
  document.documentElement.style.setProperty("--bg1-active", "#A7D4FA");
  document.documentElement.style.setProperty("--bg2", "#A7D4FA");
  document.documentElement.style.setProperty("--bg3", "#dddddd");
  document.documentElement.style.setProperty("--fg1", "#A7D4FA");
  document.documentElement.style.setProperty("--fg2", "#41546b");
  document.documentElement.style.setProperty("--fg3", "#439de8");
  document.documentElement.style.setProperty("--accent", "#435061");
  document.documentElement.style.setProperty("--accent-hover", "#549fdd");
  document.documentElement.style.setProperty("--footer-input-bg", "#4a5b6d");
  document.documentElement.style.setProperty("--border", "#A7D4FA");
  document.documentElement.style.setProperty("--shadow", "#A7d4a");
}

function elektro() {
  img_tag.src = images[3];
  document.documentElement.style.setProperty("--bg1", "#07001d");
  document.documentElement.style.setProperty("--bg1-active", "#00cece");
  document.documentElement.style.setProperty("--bg2", "#00cece");
  document.documentElement.style.setProperty("--bg3", "#9900aa");
  document.documentElement.style.setProperty("--fg1", "#00cece");
  document.documentElement.style.setProperty("--fg2", "#9900aa");
  document.documentElement.style.setProperty("--fg3", "#00cece");
  document.documentElement.style.setProperty("--accent", "#9900aa");
  document.documentElement.style.setProperty("--accent-hover", "#c000d6");
  document.documentElement.style.setProperty("--footer-input-bg", "#9900aa");
  document.documentElement.style.setProperty("--border", "#9900aa");
  document.documentElement.style.setProperty("--shadow", "#00cece");
}
