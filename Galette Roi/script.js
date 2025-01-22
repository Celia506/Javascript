let prenom = document.getElementById("name");
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let list = document.getElementById('list');
const tableauNoms = [];

button1.addEventListener("click", function() {
    if (prenom.value === "") 
        alert("Veuillez remplir le champ");
    list.appendChild(document.createElement("li")).textContent = prenom.value;
    tableauNoms.push(prenom.value);   
});


button2.addEventListener("click", (event) => {
    console.log(tableauNoms);
    console.log(tableauNoms.length);

    let random = Math.floor(Math.random() * tableauNoms.length);
    console.log(random);

    let text = document.getElementById("next-person");

    text.innerHTML = tableauNoms[random];   
    tableauNoms.splice(random, 1); 
}); 

