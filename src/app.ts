let i = 0
const compteur = document.querySelector("#compteur")
const span = compteur?.querySelector("span");

const increment = (e: Event) => {        
    if (span != null || span != undefined) {
        span.innerText = (i++).toString()
    }
}
compteur?.addEventListener("click", increment)