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

console.log("spanElement ===", spanElement);
