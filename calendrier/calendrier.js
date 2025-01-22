ArrayCitations = new Array();

ArrayCitations = [
            "Il y a 10 types de personnes dans le monde : ceux qui comprennent le binaire et ceux qui ne le comprennent pas.",
            "Je ne fais pas d'erreurs, je crée des fonctionnalités inattendues.",
            "Pourquoi les développeurs détestent-ils Noël ? Parce que c'est une période de débogage.",
            "Le café n'est pas seulement une boisson, c'est un langage de programmation.",
            "Je ne suis pas paresseux, je suis en mode économie d'énergie.",
            "Le code, c'est comme l'humour. Si tu dois l'expliquer, c'est qu'il n'est pas bon.",
            "Je ne suis pas un développeur, je suis un magicien du clavier.",
            "Les développeurs n'ont pas de bugs, seulement des fonctionnalités non documentées.",
            "La vie est trop courte pour enlever les clés USB en toute sécurité.",
            "Je ne suis pas antisocial, je suis juste en mode débogage.",
            "Le seul endroit où le succès vient avant le travail, c'est dans le dictionnaire.",
            "Je ne suis pas accro au codage, je peux arrêter quand je veux... après ce dernier commit.",
            "Les développeurs n'ont pas besoin de sommeil, ils ont besoin de caféine.",
            "Le code parfait n'existe pas, mais ça ne m'empêche pas d'essayer.",
            "Je ne suis pas un geek, je suis un développeur en mode furtif.",
            "Les développeurs ne vieillissent pas, ils se mettent à jour.",
            "Je ne suis pas en retard, je suis en mode asynchrone.",
            "Le débogage, c'est comme être un détective dans un film où tu es aussi le criminel.",
            "Je ne suis pas multitâche, j'ai juste plusieurs onglets ouverts.",
            "Le code, c'est comme une blague. Si tu dois l'expliquer, c'est qu'il n'est pas bon.",
            "Je ne suis pas un développeur, je suis un artiste du code.",
            "Les développeurs ne font pas de pauses, ils rechargent leur créativité.",
            "Je ne suis pas un nerd, je suis juste passionné par le code.",
            "Je ne suis pas un geek, je suis un développeur en mode furtif."
]

myCalendrier = document.getElementById("myCalendrier");

const today = new Date();
changeCitation(today.getDate())



function changeCitation(NbJour) {
    console.log(NbJour);
    var divCitation="";
    var i = 1;    

    ArrayCitations.forEach(citationtxt => {
        if (i<=NbJour) {
            divCitation += '<div class="calendrier_item item'+i+'">'+ citationtxt + '</div>';
        }else{
            divCitation += '<div class="calendrier_item item'+i+'">'+ i + '</div>';
        }
        i++;
        
    });

    myCalendrier.innerHTML = divCitation;
}    

