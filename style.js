const side = document.getElementsByClassName("sidebar_panier");
const sideClose = document.querySelector("#clos");
const totalPrix = document.querySelector(".TT");
const totalPrix1 = document.querySelector(".TT1");
let prixPr = document.querySelector(".prix_pr");
let numberTotal = 1900;
let numberTotal2 = 1900;
let numberTotal3 = 1900;
let prixTOTAL = 0;
function show() {
  side[0].style.display = "block";
  sideClose.style.display = "block";
  console.log(sideClose);
  sideClose.addEventListener("click", () => (side[0].style.display = "none"));
  sideClose.addEventListener("click", () => (sideClose.style.display = "none"));
}

// incrément Marchandise
//product 1

const plusCont = document.querySelector(".BUT");
let number = plusCont.innerHTML;
function plusContiter() {
  number++;
  numberTotal = 1900 * number;
  prixTotal();
  plusCont.innerHTML = number;
}
function minusContiter() {
  if (number > 0) {
    number--;
    numberTotal = 1900 * number;
    prixTotal();

    plusCont.innerHTML = number;
  }
}

// product 2

const plusContd = document.querySelector(".BUT2");
var number2 = plusContd.innerHTML;

function plusContiter2() {
  number2++;
  numberTotal2 = 1900 * number2;
  prixTotal();

  plusContd.innerHTML = number2;
}
function minusContiter2() {
  if (number2 > 0) {
    number2--;
    numberTotal2 = 1900 * number2;
    prixTotal();

    plusContd.innerHTML = number2;
  }
}
// product 3
const plusContT = document.querySelector(".BUT3");
var number3 = plusContT.innerHTML;

function plusContiter3() {
  number3++;
  numberTotal3 = 1900 * number3;
  prixTotal();

  plusContT.innerHTML = number3;
}
function minusContiter3() {
  if (number3 > 0) {
    number3--;
    numberTotal3 = 1900 * number3;
    prixTotal();

    plusContT.innerHTML = number3;
  }
}

//prix total

function prixTotal() {
  prixTOTAL = numberTotal + numberTotal2 + numberTotal3;
  totalPrix.innerHTML = prixTOTAL + " $";
}
function prixTotal1() {
  prixTOTAL1 = numberTotal + numberTotal2 + numberTotal3;
  totalPrix.innerHTML = prixTOTAL1 + " $";
}

// delet product
// delet produit dans panier
const elementToHide1 = document.getElementById("panier1");
const elementToHide2 = document.getElementById("panier2");
const elementToHide3 = document.getElementById("panier3");
const hideButton1 = document.getElementById("hideButton1");
const hideButton2 = document.getElementById("hideButton2");
const hideButton3 = document.getElementById("hideButton3");

hideButton1.addEventListener("click", function () {
  elementToHide1.style.display = "none";
  numberTotal *= 0;
  prixTotal();
});

hideButton2.addEventListener("click", function () {
  elementToHide2.style.display = "none";
  numberTotal2 *= 0;
  prixTotal();
});

hideButton3.addEventListener("click", function () {
  elementToHide3.style.display = "none";
  numberTotal3 *= 0;
  prixTotal();
});

// deler produit dans la page paymment
const produit_delet1 = document.getElementById("delet_produit");
const produit_delet2 = document.getElementById("delet_produit2");
const produit_delet3 = document.getElementById("delet_produit3");
const button_delet = document.getElementsByClassName("hideProduite");

button_delet[0].addEventListener("click", function () {
  produit_delet1.style.display = "none";
  numberTotal *= 0;
  prixTotal();
});
button_delet[1].addEventListener("click", function () {
  produit_delet2.style.display = "none";
  numberTotal2 *= 0;
  prixTotal();
});
button_delet[2].addEventListener("click", function () {
  produit_delet3.style.display = "none";
  numberTotal3 *= 0;
  prixTotal();
});

//premier product

const plusCont_B = document.getElementsByClassName("BUT_B");
let number_B = 0;
function plusContiter_two() {
  number_B = parseInt(plusCont_B[0].innerHTML);
  number_B++;
  plusCont_B[0].innerHTML = number_B;
  plusContiter();
  prixTotal1();
}
function minusContiter_two() {
  number_B = parseInt(plusCont_B[0].innerHTML);
  if (number_B > 1) {
    number_B--;
    plusCont_B[0].innerHTML = number_B;
    minusContiter();
    prixTotal1();
  }
}

// deuxemme product

let number_B2 = 0;
function plusContiter_two2() {
  number_B2 = parseInt(plusCont_B[1].innerHTML);
  number_B2++;
  plusCont_B[1].innerHTML = number_B2;
  plusContiter2();
  prixTotal1();
}
function minusContiter_two2() {
  number_B2 = parseInt(plusCont_B[1].innerHTML);
  if (number_B2 > 1) {
    number_B2--;
    plusCont_B[1].innerHTML = number_B2;
    minusContiter2();
    prixTotal1();
  }
}
let number_B3 = 0;
function plusContiter_two3() {
  number_B3 = parseInt(plusCont_B[2].innerHTML);
  number_B3++;
  plusCont_B[2].innerHTML = number_B3;
  plusContiter3();
  prixTotal1();
}
function minusContiter_two3() {
  number_B3 = parseInt(plusCont_B[2].innerHTML);
  if (number_B3 > 1) {
    number_B3--;
    plusCont_B[2].innerHTML = number_B3;
    minusContiter3();
    prixTotal1();
  }
}
