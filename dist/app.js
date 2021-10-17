"use strict";
let i = 0;
const compteur = document.querySelector("#compteur");
const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector("span");
const increment = (e) => {
    if (span != null || span != undefined) {
        span.innerText = (i++).toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener("click", increment);
