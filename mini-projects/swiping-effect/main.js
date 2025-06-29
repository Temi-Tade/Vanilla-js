const sections = [...document.querySelectorAll("section")];

sections.forEach(section => {
    const round = document.createElement("span");
    round.setAttribute("class", "position");
    document.querySelector("#progress").appendChild(round);
})

const positions = [...document.querySelectorAll(".position")];
positions[0].classList.add("current")

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (!entry.target.classList.contains("inview")) {
                entry.target.classList.add("inview");
                positions[sections.indexOf(entry.target)].classList.add("current");
            }
        }else{
            entry.target.classList.remove("inview");
            positions[sections.indexOf(entry.target)].classList.remove("current");
        }
    })
}, {
    threshold: 0.5,
})

sections.map(section => {
    observer.observe(section);
})