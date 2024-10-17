const text = document.querySelector("#text")
const selectvoice = document.querySelector("#voices")
let voices

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices()
    console.log(voices)
    voices.forEach((val, key) => {
        selectvoice.innerHTML += `<option value=${key}>${val.name} ${val.lang}</option>`
    })
}


document.querySelector("form").onsubmit = (e) => {
    e.preventDefault()
    if("speechSynthesis" in window){ 
        let utterance = new SpeechSynthesisUtterance(text.value)
        utterance.voice = voices[selectvoice.value]
        // utterance.pitch = "1.5"
        window.speechSynthesis.speak(utterance)
    }
}