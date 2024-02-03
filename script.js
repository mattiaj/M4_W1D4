function firstLine(search) {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="+search)
    .then((response) => response.json()) // Abbiamo una promise restituita qui
    .then((json) => firstGroup(json)) // Qui abbiamo un oggetto JS (convertito dal JSON ricevuto dall'endpoint)
    .catch((err) => console.log("Error detected: ", err) );
}


function firstGroup(result) {
    let coldplaySection = document.getElementById('coldplaySection');
    let array = result.data
    console.log(array)
    for (let i = 3; i < 7; i++) {
        const element = array[i];
        let coverImg = element.album.cover_big;
        let img = document.createElement('img');
        img.src = coverImg;
        coldplaySection.appendChild(img);
        
    }
}


function secondLine(search) {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="+search)
    .then((response) => response.json()) // Abbiamo una promise restituita qui
    .then((json) => secondGroup(json)) // Qui abbiamo un oggetto JS (convertito dal JSON ricevuto dall'endpoint)
    .catch((err) => console.log("Error detected: ", err) );
}

function secondGroup(result) {
    let metallicaSection = document.getElementById('metallicaSection');
    let array = result.data
    console.log(array)
    for (let i = 8; i < 12; i++) {
        const element = array[i];
        let coverImg = element.album.cover_big;
        let img = document.createElement('img');
        img.src = coverImg;
        metallicaSection.appendChild(img);
        
    }
}


function thirdLine(search) {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="+search)
    .then((response) => response.json()) // Abbiamo una promise restituita qui
    .then((json) => thirdGroup(json)) // Qui abbiamo un oggetto JS (convertito dal JSON ricevuto dall'endpoint)
    .catch((err) => console.log("Error detected: ", err) );
}

function thirdGroup(result) {
    let queenSection = document.getElementById('queenSection');
    let array = result.data
    console.log(array)
    for (let i = 0; i < 4; i++) {
        const element = array[i];
        let coverImg = element.album.cover_big;
        let img = document.createElement('img');
        img.src = coverImg;
        queenSection.appendChild(img);
    }
}


firstLine('coldplay');
secondLine('metallica');
thirdLine('queen')

