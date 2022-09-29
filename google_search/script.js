const settingsPopup = document.querySelector('.settings_popup');
function displaySettings() {
    settingsPopup.classList.toggle("show_popup")
}
function switchTheme() {
    document.body.classList.toggle("dark");
}
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
} else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    document.body.classList.remove("dark");
} else {
    console.log("I WORK")
}