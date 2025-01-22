const root = document.getElementById("root");

const div0 = document.createElement("div");
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");
const div4 = document.createElement("div");
const div5 = document.createElement("div");
const div6 = document.createElement("div");
const div7 = document.createElement("div");
const div8 = document.createElement("div");

div0.classList.add("case");
div1.classList.add("case");
div2.classList.add("case");
div3.classList.add("case");
div4.classList.add("case");
div5.classList.add("case");
div6.classList.add("case");
div7.classList.add("case");
div8.classList.add("case");


root.appendChild(div0);
root.appendChild(div1);
root.appendChild(div2);
root.appendChild(div3);
root.appendChild(div4);
root.appendChild(div5);
root.appendChild(div6);
root.appendChild(div7);
root.appendChild(div8);

const tableauCases = [div0, div1, div2, div3, div4, div5, div6, div7, div8]

const possibilityWin = 
[ ["div0 ","div1", "div2"] ,
["div3 ","div4", "div5"] ,
["div6 ","div7", "div8"] ,
["div0 ","div3", "div6"] ,
["div1 ","div4", "div7"] ,
["div2 ","div5", "div8"] ,
["div0 ","div4", "div8"] ,
["div2 ","div4", "div6"] ]


let jeuActif = true
let joueurActif = "X"
const statut = document.querySelector("h2")
let etatJeu = ["","","" ,"","","", "","",""]


// message
const gagne = () => `Le joueur ${joueurActif} a gangné` ;
const egalite = () => " Egalité" ;
const tourJoueur = () => `C'est au tour du joueur ${joueurActif}`

statut.innerHTML = tourJoueur()


// div1.addEventListener('click', ()=>{
//     console.log("click")
//     if (tour) {
//         div1.innerText = " X " ;
//         tour = false;
//     }else{
//         div1.innerText = " O ";
//         tour = true;
//     }
// } )


// la meme chose differement*******************************

// div1.addEventListener("click",() =>{
//     // div1.innerText = "";
//     if (div1.innerText === "X") {
//         div1.innerText = "O";

//     }else{
//         div1.innerText = "X";
//         // div1.innerText === "X";
//     }
// })
// avec un tableau *******************************
document.querySelector("#recommencer").addEventListener("click", recommencer)

tableauCases.forEach(cellule => cellule.addEventListener("click", () => {
    if (cellule.innerText === "") {
        if (jeuActif === true) {
            cellule.innerText = "O";
            jeuActif = false;
        } else {
            cellule.innerText = "X";
            jeuActif = true;
        }
    }
}))

