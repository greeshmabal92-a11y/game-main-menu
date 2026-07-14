const exitBtn = document.getElementById("exitBtn");
const popup = document.getElementById("popup");
const cancelBtn = document.getElementById("cancelBtn");
const yesBtn = document.getElementById("yesBtn");

exitBtn.addEventListener("click", () => {
    popup.style.display = "flex";
});

cancelBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

yesBtn.addEventListener("click", () => {
    alert("Thanks for playing!");
    popup.style.display = "none";
});