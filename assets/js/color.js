document.getElementById("elek-bt").addEventListener("click", elektro);

/*
const theme = {
  elektro: {
    "--bg1": "#ee00ff",
    "--bg1-active": "#00ffff",
    "--bg2": "#ee00ff",
    "--bg3": "#00ffff",
    "--fg1": "#00ffff",
    "--fg2": "#00ffff",
    "--accent": "#e00fff",
    "--accent-hover": "#ee00ff",
    "--footer-input-bg": "#ee00ff",
    "--shadow": "#00ffff"
  }
};
*/

function elektro() {
  document.documentElement.style.setProperty('--bg1', '#07001d');
  document.documentElement.style.setProperty('--bg1-active', '#00ffff');
  document.documentElement.style.setProperty('--bg2', '#00ffff');
  document.documentElement.style.setProperty('--bg3', '#ee00ff');
  document.documentElement.style.setProperty('--fg1', '#00ffff');
  document.documentElement.style.setProperty('--fg2', '#ee00ff');
  document.documentElement.style.setProperty('--fg3', '#00ffff');
  document.documentElement.style.setProperty('--accent', '#ee00ff');
  document.documentElement.style.setProperty('--accent-hover', '#eb50fc');
  document.documentElement.style.setProperty('--footer-input-bg', '#ee00ff');
  document.documentElement.style.setProperty('--border', '#ee00ff');
  document.documentElement.style.setProperty('--shadow', '#00ffff');

}

/*
function useTheme(themeChoice) {
 document.documentElement.style.setProperty(
  '--bg1', theme\[themeChoice\]['--bg1']
 );
 document.documentElement.style.setProperty(
  '--bg1-active',
  theme\[themeChoice\]['--bg1-active']
 );
 document.documentElement.style.setProperty(
  '--bg2',
  theme\[themeChoice\]['--bg2']
 );
 document.documentElement.style.setProperty(
  '--bg3',
  theme\[themeChoice\]['--bg3']
 );
 document.documentElement.style.setProperty(
  '--fg1',
  theme\[themeChoice\]['--fg1']
 );
 document.documentElement.style.setProperty(
  '--fg2',
  theme\[themeChoice\]['--fg2']
 );
 document.documentElement.style.setProperty(
  '--accent',
  theme\[themeChoice\]['--accent']
 );
 document.documentElement.style.setProperty(
  '--accent-hover',
  theme\[themeChoice\]['--accent-hover']
 );
 document.documentElement.style.setProperty(
  '--accent-hover',
  theme\[themeChoice\]['--accent-hover']
 );
 document.documentElement.style.setProperty(
  '--shadow',
  theme\[themeChoice\]['--shadow']
 );
}
*/
