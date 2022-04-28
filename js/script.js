// Viene fornito un array di oggetti che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
// MILESTONE 1:
// stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// organizzare i singoli membri in card/schede
// BONUS 3:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.

const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];

// Aggiungo un eventlistener al bottone, se viene cliccato genera la card con le informazioni all'interno del form

const addButton = document.querySelector('#addMemberButton').addEventListener('click', addMemberFromInput);

// Stampare i nomi di tutti gli elementi del team
for (let i = 0; i < team.length; i++) {

    const peopleInfo = team[i];

    // Prelevo informazioni di ogni singolo elemento
    const peopleName = peopleInfo.name;
    const peopleRole= peopleInfo.role;
    const peopleImg= peopleInfo.image;
    console.log(peopleInfo);
    generateCard(peopleInfo, peopleName, peopleRole, peopleImg)
    
}


// Funzione che genera le card inserendo le informazioni e le immagini all'interno
function generateCard(peopleInfo, peopleName, peopleRole, peopleImg) {

    // Creo il div dentro l'HTML che conterrà le informazioni con l'immagine
    const thisCard = document.createElement("div");
    thisCard.classList.add("team-card");

    const thisImg = document.createElement("div");
    thisImg.classList.add("card-image");
    // Inserisco l'immagine all'interno del div ms-card
    if (key = "image") {
        thisImg.innerHTML += (` <img src="img/${peopleImg}" alt="${peopleName}"></img>`);   
        (thisCard).appendChild(thisImg);
    }

    // Genero gli elementi in cui verranno inserite le informazioni e li inserisco nella card
    const thisName = document.createElement("h3");
    thisName.innerText = peopleName;
    const thisRole = document.createElement("p");
    thisRole.innerText = peopleRole;
    const thisText = document.createElement("div");
    thisText.classList.add("card-text");

    (thisText).appendChild(thisName);
    (thisText).appendChild(thisRole);
    (thisCard).appendChild(thisText);

    document.getElementById("mycontainer").appendChild(thisCard);

}

// funzione che risponde al clic del bottone Add generando la nuova card
function addMemberFromInput() {

    // creo delle variabili per inserire i valori
    let thisName = document.querySelector('#name');
    let thisRole = document.querySelector('#role');
    let thisImg = document.querySelector('#image');
  
    // le inserisco in un oggetto
    const newMember = {
      name: thisName.value,
      role: thisRole.value,
      image: thisImg.value
    }
  
    // pusho l'oggetto dentro l'array team
    team.push(newMember);

    // Genero card richiamando la funzione e inserendo come valori quelli ottenuti dagli input

    peopleInfo = newMember;
    generateCard(peopleInfo, thisName.value, thisRole.value, thisImg.value);
  
    // ripulisco i campi del form
    thisName.value = '';
    thisRole.value = '';
    thisImg.value = '';
};
