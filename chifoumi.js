
var pierre = document.getElementById('pierre');
var feuille = document.getElementById('feuille');
var ciseaux = document.getElementById('ciseaux');

var ChoixUtilisateur = 0;

var Ordinateur = 0;

var a = 0;
var b = 0;
var c = 0;

function calc_ordi () {
     Ordinateur = Math.floor((Math.random()*3)+1);
    return Ordinateur;

}

pierre.addEventListener('click',function () {

    ChoixUtilisateur = 1;
    Ordinateur = calc_ordi();

    if ( Ordinateur === 1 ) {
        document.getElementById('resultat').innerHTML = "égalité";
        c += 1;
        document.getElementById('histo_ega').innerHTML = c;
    }
    if ( Ordinateur === 2 ) {
        document.getElementById('resultat').innerHTML = "you lose";
        b += 1;
        document.getElementById('histo_lose').innerHTML = b;
    } else {
        document.getElementById('resultat').innerHTML = "you win";
        a += 1;
        document.getElementById('histo_win').innerHTML = a;

    }

});


feuille.addEventListener('click', function () {

    ChoixUtilisateur = 2;
    Ordinateur = calc_ordi();

    if ( Ordinateur === 1 ) {
        document.getElementById('resultat').innerHTML = "you win";
        a += 1;
        document.getElementById('histo_win').innerHTML = a;
    }
    if ( Ordinateur === 2 ) {
        document.getElementById('resultat').innerHTML = "égalité";
        c += 1;
        document.getElementById('histo_ega').innerHTML = c;
    } else {
        document.getElementById('resultat').innerHTML = "you lose";
        b += 1;
        document.getElementById('histo_lose').innerHTML = b;
    }

});

ciseaux.addEventListener('click', function () {

    ChoixUtilisateur = 3;
    Ordinateur = calc_ordi();

    if ( Ordinateur === 1 ) {
        document.getElementById('resultat').innerHTML = "you lose";
        b += 1;
        document.getElementById('histo_lose').innerHTML = b;
    }
    if ( Ordinateur === 2 ) {
        document.getElementById('resultat').innerHTML = "you win";
        a += 1;
        document.getElementById('histo_win').innerHTML = a;
    } else {
        document.getElementById('resultat').innerHTML = "égalité";
        c += 1;
        document.getElementById('histo_ega').innerHTML = c;
    }

});




