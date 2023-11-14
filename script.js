"use strict";
console.log("script.js file was loaded");

// paselektinti HTML elementa
const paragraph = document.querySelector("p");
paragraph.textContent = "Labas rytas";
paragraph.innerHTML =
  "Labas <span class='test' style = 'color: red;'>rytas</span>";

//  Sukurti HTML elementa

const spanElement = document.createElement("span");
spanElement.textContent = "!";

// Append - prideda su JS sukurtą HTML elementą (node) į kito elemento pabaigą
paragraph.append(spanElement);

// Prepend - prideda su JS sukurtą HTML elementą (node) į kito elemento pradžią
paragraph.prepend(spanElement);

// After - prideda su JS sukurtą HTML elemntą (node) po kitu elementu (šalia kito elemento)
paragraph.after(spanElement);

// Before - prideda su JS sukurtą HTML elementą (node) prieš kitą elementą (šalia kito elemento)
paragraph.before(spanElement);

// Remove - pasalina is html
spanElement.remove();

const newParagraph = document.createElement("p");
newParagraph.textContent =
  " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut voluptate delectus quia error rerum, cupiditate tempore doloremque aperiam maiores incidunt maxime temporibus quo dolorum corrupti aspernatur repellendus in dolor eos!";

paragraph.after(newParagraph);

// Budas pakeisti HTML elemento klases
newParagraph.className = "pirma-klase";

// Prideda klase prie HTML elemento
newParagraph.classList.add("ketvirta-klase");

// pasalint klase
newParagraph.classList.remove("antra-klase");

// pakeisti klase HTML elemente
newParagraph.classList.replace("pirma-klase", "antra-klase");
// Toggle - prideda jei neturi, pasalina, jeigu turi
newParagraph.classList.toggle("toggle-klase");

// Patikrina ar HTML elementas turi nurodyta klase( grazina true arba false)
console.log(newParagraph.classList.contains("antra-klase"));
console.log(newParagraph.classList.contains("pirma-klase"));
console.log(newParagraph.classList.contains("antra"));

// Keicia arba prideda ID
newParagraph.id = "paragrafo-id";
console.log("newParagraph.id ===", newParagraph.id);

const link = document.createElement("a");
link.textContent = "nuoroda";
newParagraph.after(link);
// link.href = "https://www.google.com";
// link.target = "blank";
link.setAttribute("href", "https://www.google.com");
link.setAttribute("target", "_blank");

console.log(link.getAttribute("id"));

// stilius
console.dir(link.style);

link.style.border = "2px solid black";
link.style.padding = "5px 10px";
link.style.display = "inline-block";
link.style.fontSize = "25px";
