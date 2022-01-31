function temperature() {
    let temperatur = Math.floor(Math.random() * 41 - 5);


    if (temperatur <= 10 && temperatur >= -5) {
        document.getElementById("cold").innerText = `Outside is ${temperatur}C. It is cold.`
        document.getElementById("cols").style.visibility = "visible"
    } else if (temperatur >= 10 && temperatur <= 25) {
        document.getElementById("moderate").innerText = `Outside is ${temperatur}C. It is moderate.`
    } else if (temperatur >= 26) {
        document.getElementById("hot").innerText = `Outside is ${temperatur}C. It is hot.`
    }
}

document.getElementById("btn").onclick = temperature;

// mozes oznacit getClass ale bude to automaticky array preto musis napisat ("cold")[1]
// pozor na elementS a element