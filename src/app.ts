let i = 0
const compteur = document.querySelector("#compteur")

const increment = (e: Event) => {
    i++;
    const span = compteur?.querySelector("span");
    if (span != null) {
        span.innerText = i.toString()
    }
}
compteur?.addEventListener("click", increment)