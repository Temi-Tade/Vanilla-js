const dynamicText = document.querySelector("h1")
const words = ["HAPPY NEW YEAR!", "MORE BUGS TO FIX!", "MORE REPOS TO YOUR PROFILE!", "MORE COMMITS TO MAKE!", "MAY YOUR PULL REQUESTS BE ACCEPTED", "MORE BRANCHES TO MERGE!", "WELCOME TO YOUR BEST YEAR YET!", "WISHING YOU THE BEST THIS YEAR!"]

let charIndex = 0
let wordIndex = 0
let isDeleting = false

const TYPE_EFFECT = () => {
    let currentWord = words[wordIndex]
    let currentChar = currentWord.substring(0, charIndex)
    dynamicText.textContent = currentChar

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++
        setTimeout(TYPE_EFFECT, 200)
    } else if (isDeleting && charIndex > 0) {
        charIndex--
        setTimeout(TYPE_EFFECT, 100)
    } else {
        isDeleting = !isDeleting
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex
        setTimeout(TYPE_EFFECT, 1200)
    }
}

TYPE_EFFECT()