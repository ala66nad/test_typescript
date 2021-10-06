"use strict";
let i = 0;
const compteur = document.querySelector("#compteur");
const increment = (e) => {
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector("span");
    if (span != null) {
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener("click", increment);
