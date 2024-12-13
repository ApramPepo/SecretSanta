function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function gen() {
    const names = document.getElementById("input").value.split("\n").map(name => name.trim()).filter(name => name);
    if (names.length < 2) {
        alert("Enter at least two names");
        return;
    }
    if (names.length % 2 !== 0) {
        alert("Make sure to enter an even number of names");
        return;
    }
    
    let shuffledNames;
    do {
        shuffledNames = shuffle([...names]);
    } while (shuffledNames.some((name, index) => name === names[index]));

    const assigned = [];
    for (let i = 0; i < names.length; i++) {
        assigned.push(`${names[i]} will gift 🎅🎄 ${shuffledNames[i]}`);
    }
    document.getElementById("assigned").innerHTML = assigned.join("<br>");
}
