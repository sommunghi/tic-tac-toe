const player = [
    {
        anchor: document.querySelector("#player-1-anchor"),
        card: document.querySelector("#input-form1"),
        inputField: document.querySelector("#player-name1"),
        nameElement: document.querySelector("#player-1-id"),
        confirmButton: document.querySelector("#input-form1 .confirm-button"),
        cancelButton: document.querySelector("#input-form1 button")
},
    {
        anchor: document.querySelector("#player-2-anchor"),
        card: document.querySelector("#input-form2"),
        inputField: document.querySelector("#player-name2"),
        nameElement: document.querySelector("#player-2-id"),
        confirmButton: document.querySelector("#input-form2 .confirm-button"),
        cancelButton: document.querySelector("#input-form2 button")
}
]

function viewPage (index) {
    player[index].card.classList.remove("visibility");
}

function removePage (index) {
    player[index].card.classList.add("visibility");
}

function changeName (index) {
    const inputField = player[index].inputField;
    if (inputField.value.search(/\W|\s/g) > -1) {
        inputField.style.backgroundColor = "#f081aa";
    }
    else {
        if (index == 0) localStorage.setItem("name1", player[0].inputField.value);
        else localStorage.setItem("name2", player[1].inputField.value);
        player[index].nameElement.textContent = inputField.value;
        inputField.style.backgroundColor = "white";
        removePage(index);
    }
}

for (let i = 0; i < player.length; i++) {
    player[i].anchor.addEventListener("click", () => viewPage(i));
    player[i].confirmButton.addEventListener("click", () => changeName(i));
    player[i].cancelButton.addEventListener("click", () => removePage(i));
}
