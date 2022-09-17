"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const infoMenu = document.querySelector(".info__menu");

const showMenus = () => {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
    infoMenu.classList.toggle("show");
    menuToggle.classList.toggle("show");
  });
};
showMenus();
