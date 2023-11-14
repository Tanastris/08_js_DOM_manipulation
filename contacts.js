"use strict";
console.log("contacts.js file was loaded");

const content = document.querySelector("#content");

const shopsWrapper = document.createElement("div");
shopsWrapper.classList.add("shops-wrapper");

content.append(shopsWrapper);

const pageTitle = document.createElement("h1");
pageTitle.textContent = "Find us";

const shopsList = document.createElement("div");
shopsList.classList.add("shops-list");

shopsWrapper.append(pageTitle, shopsList);

const shopItem1 = document.createElement("div");
shopItem1.classList.add("shop-item");

const shopItem2 = document.createElement("div");
shopItem2.classList.add("shop-item");

const shopItem3 = document.createElement("div");
shopItem3.classList.add("shop-item");

const shopItem4 = document.createElement("div");
shopItem4.classList.add("shop-item");

shopsList.append(shopItem1, shopItem2, shopItem3, shopItem4);

const shopTitle1 = document.createElement("h2");
shopTitle1.textContent = "Parduotuve 1";
shopTitle1.classList.add("shop-title");
const shopAddressList1 = document.createElement("ul");
shopAddressList1.classList.add("shop-address-list");
shopItem1.append(shopTitle1, shopAddressList1);

const shopTitle2 = document.createElement("h2");
shopTitle2.textContent = "Parduotuve 2";
shopTitle2.classList.add("shop-title");
const shopAddressList2 = document.createElement("ul");
shopAddressList2.classList.add("shop-address-list");
shopItem2.append(shopTitle2, shopAddressList2);

const shopTitle3 = document.createElement("h2");
shopTitle3.textContent = "Parduotuve 3";
shopTitle3.classList.add("shop-title");
const shopAddressList3 = document.createElement("ul");
shopAddressList3.classList.add("shop-address-list");
shopItem3.append(shopTitle3, shopAddressList3);

const shopTitle4 = document.createElement("h2");
shopTitle4.textContent = "Parduotuve 4";
shopTitle4.classList.add("shop-title");
const shopAddressList4 = document.createElement("ul");
shopAddressList4.classList.add("shop-address-list");
shopItem4.append(shopTitle4, shopAddressList4);

const liPhone1 = document.createElement("li");
liPhone1.textContent = "Phone:";
const liPhone2 = document.createElement("li");
liPhone2.textContent = "Phone:";
const liPhone3 = document.createElement("li");
liPhone3.textContent = "Phone:";
const liPhone4 = document.createElement("li");
liPhone4.textContent = "Phone:";

const liEmail1 = document.createElement("li");
liEmail1.textContent = "Email:";
const liEmail2 = document.createElement("li");
liEmail2.textContent = "Email:";
const liEmail3 = document.createElement("li");
liEmail3.textContent = "Email:";
const liEmail4 = document.createElement("li");
liEmail4.textContent = "Email:";

const liAddress1 = document.createElement("li");
liAddress1.textContent = "Address:";
const liAddress2 = document.createElement("li");
liAddress2.textContent = "Address:";
const liAddress3 = document.createElement("li");
liAddress3.textContent = "Address:";
const liAddress4 = document.createElement("li");
liAddress4.textContent = "Address:";

shopAddressList1.append(liPhone1, liEmail1, liAddress1);
shopAddressList2.append(liPhone2, liEmail2, liAddress2);
shopAddressList3.append(liPhone3, liEmail3, liAddress3);
shopAddressList4.append(liPhone4, liEmail4, liAddress4);

const aPhone1 = document.createElement("a");
aPhone1.href = "tel:+37045431321";
aPhone1.textContent = "+37045431321";
const aPhone2 = document.createElement("a");
aPhone2.href = "tel:+37045431321";
aPhone2.textContent = "+37045431321";
const aPhone3 = document.createElement("a");
aPhone3.href = "tel:+37045431321";
aPhone3.textContent = "+37045431321";
const aPhone4 = document.createElement("a");
aPhone4.href = "tel:+37045431321";
aPhone4.textContent = "+37045431321";

const aEmail1 = document.createElement("a");
aEmail1.href = "mailto:info@parduotuve.lt";
aEmail1.textContent = "info@parduotuve.lt";
const aEmail2 = document.createElement("a");
aEmail2.href = "mailto:info@parduotuve.lt";
aEmail2.textContent = "info@parduotuve.lt";
const aEmail3 = document.createElement("a");
aEmail3.href = "mailto:info@parduotuve.lt";
aEmail3.textContent = "info@parduotuve.lt";
const aEmail4 = document.createElement("a");
aEmail4.href = "mailto:info@parduotuve.lt";
aEmail4.textContent = "info@parduotuve.lt";

const aAddress1 = document.createElement("a");
aAddress1.href = "#";
aAddress1.target = "_blank";
aAddress1.textContent = "Vilniaus g. 20, Vilnius";
const aAddress2 = document.createElement("a");
aAddress2.href = "#";
aAddress2.target = "_blank";
aAddress2.textContent = "Vilniaus g. 20, Vilnius";
const aAddress3 = document.createElement("a");
aAddress3.href = "#";
aAddress3.target = "_blank";
aAddress3.textContent = "Vilniaus g. 20, Vilnius";
const aAddress4 = document.createElement("a");
aAddress4.href = "#";
aAddress4.target = "_blank";
aAddress4.textContent = "Vilniaus g. 20, Vilnius";

liPhone1.append(aPhone1);
liPhone2.append(aPhone2);
liPhone3.append(aPhone3);
liPhone4.append(aPhone4);

liEmail1.append(aEmail1);
liEmail2.append(aEmail2);
liEmail3.append(aEmail3);
liEmail4.append(aEmail4);

liAddress1.append(aAddress1);
liAddress2.append(aAddress2);
liAddress3.append(aAddress3);
liAddress4.append(aAddress4);

const mapWrapper = document.createElement("div");
mapWrapper.classList.add("map-wrapper");
content.append(mapWrapper);
mapWrapper.innerHTML =
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18343.57087900314!2d23.95217678894304!3d54.921413391696255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e718f6251ea27b%3A0x30ae10233e1119a3!2sDainavos%20sen.%2C%20Kaunas%2C%20Kaunas%20City%20Municipality!5e0!3m2!1sen!2slt!4v1680257621120!5m2!1sen!2slt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
