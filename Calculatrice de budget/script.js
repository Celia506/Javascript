function ajouterLigne() {
    const libelle = document.querySelector('input[name="text1"]').value;
    const revenu = parseFloat(document.querySelector('input[name="text2"]').value) || 0;
    const depense = parseFloat(document.querySelector('input[name="text3"]').value) || 0;

    if (libelle === '' || isNaN(revenu) || isNaN(depense)) {
        alert('Veuillez remplir les champs.');
        return;
    }

    const bodyTableau = document.querySelector('table tbody');
    const nouvelleLigne = document.createElement('tr');

    const celluleLibelle = document.createElement('td');
    const celluleRevenu = document.createElement('td');
    const celluleDepense = document.createElement('td');
    const celluleSuppression = document.createElement('td');

    celluleLibelle.textContent = libelle;
    celluleRevenu.textContent = revenu.toFixed(2);
    celluleDepense.textContent = depense.toFixed(2);

    const boutonSupprimer = document.createElement('button');
    boutonSupprimer.textContent = 'Supprimer';
    boutonSupprimer.classList.add('btn-supprimer');
    boutonSupprimer.onclick = function () {
        bodyTableau.removeChild(nouvelleLigne);
        mettreAJourTotaux();
    };

    celluleSuppression.appendChild(boutonSupprimer);

    nouvelleLigne.appendChild(celluleLibelle);
    nouvelleLigne.appendChild(celluleRevenu);
    nouvelleLigne.appendChild(celluleDepense);
    nouvelleLigne.appendChild(celluleSuppression);

    bodyTableau.appendChild(nouvelleLigne);

    document.querySelector('input[name="text1"]').value = '';
    document.querySelector('input[name="text2"]').value = '';
    document.querySelector('input[name="text3"]').value = '';

    mettreAJourTotaux();
}

function mettreAJourTotaux() {
    const lignes = document.querySelectorAll('table tbody tr');
    let totalRevenu = 0;
    let totalDepense = 0;

    lignes.forEach(ligne => {
        totalRevenu += parseFloat(ligne.cells[1].textContent) || 0;
        totalDepense += parseFloat(ligne.cells[2].textContent) || 0;
    });

    const ligneTotal = document.querySelector('table tfoot tr');
    ligneTotal.cells[1].textContent = totalRevenu.toFixed(2);
    ligneTotal.cells[2].textContent = totalDepense.toFixed(2);

    const solde = totalRevenu - totalDepense;
    document.querySelector('#solde').textContent = `Solde: ${solde.toFixed(2)} €`;

    const soldeElement = document.querySelector('#solde');
    if (solde < 0) {
        soldeElement.style.color = 'red';
    } else {
        soldeElement.style.color = 'green';
    }
}