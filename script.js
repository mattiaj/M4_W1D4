let queenSection = document.getElementById('queenSection');
let coldplaySection = document.getElementById('coldplaySection');
let metallicaSection = document.getElementById('metallicaSection');
let trackList = document.getElementById('track');


function firstLine(search) {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="+search)
    .then((response) => response.json()) // Abbiamo una promise restituita qui
    .then((json) => firstGroup(json)) // Qui abbiamo un oggetto JS (convertito dal JSON ricevuto dall'endpoint)
    .catch((err) => console.log("Error detected: ", err) );
}


function firstGroup(result) {
    let array = result.data
    console.log(array)
    for (let i = 3; i < 7; i++) {
        const element = array[i];
        let coverImg = element.album.cover_big;
        let img = document.createElement('img');
        img.src = coverImg;
        coldplaySection.appendChild(img);
         // sezione modale
         const albumName = array[i];
         let albumsName = albumName.album.title;
         console.log(albumsName)
         let li = document.createElement('li');
         li.innerText = albumsName;
         trackList.appendChild(li);
        
    }
}


function secondLine(search) {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="+search)
    .then((response) => response.json()) // Abbiamo una promise restituita qui
    .then((json) => secondGroup(json)) // Qui abbiamo un oggetto JS (convertito dal JSON ricevuto dall'endpoint)
    .catch((err) => console.log("Error detected: ", err) );
}

function secondGroup(result) {
    let array = result.data
    console.log(array)
    for (let i = 8; i < 12; i++) {
        const element = array[i];
        let coverImg = element.album.cover_big;
        let img = document.createElement('img');
        img.src = coverImg;
        metallicaSection.appendChild(img);
         // sezione modale
         const albumName = array[i];
         let albumsName = albumName.album.title;
         console.log(albumsName)
         let li = document.createElement('li');
         li.innerText = albumsName;
         trackList.appendChild(li);
        
    }
}


function thirdLine(search) {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="+search)
    .then((response) => response.json()) // Abbiamo una promise restituita qui
    .then((json) => thirdGroup(json)) // Qui abbiamo un oggetto JS (convertito dal JSON ricevuto dall'endpoint)
    .catch((err) => console.log("Error detected: ", err) );
}


function thirdGroup(result) {
    let array = result.data;
    console.log(array)
    for (let i = 0; i < 4; i++) {
        const element = array[i];
        let coverImg = element.album.cover_big;
        let img = document.createElement('img');
        img.src = coverImg;
        queenSection.appendChild(img);
        // sezione modale
        const albumName = array[i];
        let albumsName = albumName.album.title;
        console.log(albumsName)
        let li = document.createElement('li');
        li.innerText = albumsName;
        trackList.appendChild(li);
            
    }
}


firstLine('coldplay');
secondLine('metallica');
thirdLine('queen')



// function modalTrack () {
//     let body = document.getElementsByTagName('body')[0];
//     let modal = document.createElement('div');
//     modal.classList.add('modal');
//     let modalD = document.createElement('div');
//     modalD.classList.add('modal-dialog');
//     let modalC = document.createElement('div');
//     modalC.classList.add('modal-content');
//     // gruppo header
//     let modalH = document.createElement('div');
//     modalH.classList.add('modal-header');
//     let title = document.createElement('h5');
//     let closeButton = document.createElement('button');
//     closeButton.classList.add('close');
//     closeButton.setAttribute('data-dismiss' , 'modal');
//     closeButton.setAttribute('aria-label', 'Close');
//     closeButton.setAttribute('type','button');
//     let span = document.createElement('span');
//     span.setAttribute('aria-hidden','true');
//     span.innerText = 'x';
//     modalH.appendChild(title);
//     modalH.appendChild(closeButton);
//     modalH.appendChild(span);
//     // gruppo body
//     let modalB = document.createElement('div')
//     modalB.classList.add('modal-body');
//     let ul = document.createElement('ul');
//     // for con funzione per creare i li
//     modalB.appendChild(ul);
//     // gruppo footer
//     let modalF = document.createElement('div');
//     modalF.classList.add('modal-footer');
//     let bClose = document.createElement('button')
//     bClose.setAttribute('type','button');
//     bClose.setAttribute('data-dismiss' , 'modal');
//     bClose.classList.add('btn');
//     bClose.classList.add('btn-secondary');
//     bClose.innerText = 'Close';
//     let bSave = document.createElement('div');
//     bSave.setAttribute('type','button');
//     bSave.classList.add('btn');
//     bSave.classList.add('btn-primary');
//     bSave.innerText = 'Save changes';
//     modalF.appendChild(bClose);
//     modalF.appendChild(bSave);
//     // creazione effettiva del modale
//     modal.appendChild(modalD);
//     modalD.appendChild(modalC);
//     modalC.appendChild(modalH);
//     modalC.appendChild(modalB);
//     modalC.appendChild(modalF);
//     body.appendChild(modal);
// }
// modalTrack()