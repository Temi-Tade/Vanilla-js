let BASE_URL = "http://127.0.0.1:8000/";
let CURRENT_PATH = "";
let PATHS = [];
let OUTLIERS = ["http:", "", "127.0.0.1:8000"];
let showHidden = false;
let viewType = "grid";

const getFileSystem = async (url) => {
    try {
        const request = await fetch(url);
        
        if (!request.ok) {
            throw Error("An error occured.");
        }
    
        request.text()
        .then(res => {
            document.querySelector("#fe-files").innerHTML = res;
            document.querySelector("#fe-path").innerHTML = `<em>${BASE_URL.slice(21)}</em>`;
            
            if ([...document.querySelectorAll("li")].length === 0) document.querySelector("ul").innerHTML = "<h2>Nothing to see here...</h2>";
            
            [...document.querySelectorAll("li")].map((link, ind) => {
                link.innerHTML += `<p>${link.textContent}</p>`;

                if (link.textContent.startsWith(".") && !showHidden) link.style.display = 'none'

                if (link.textContent.endsWith("/")) {
                    [...document.querySelectorAll("li a")][ind].textContent = "";
                    [...document.querySelectorAll("li a")][ind].className = "fa-regular fa-folder-open folder";
                } else {
                    [...document.querySelectorAll("li a")][ind].textContent = "";
                    [...document.querySelectorAll("li a")][ind].className = "fa-regular fa-file file";
                }

                if (viewType === 'list'){
                    link.style.display = 'flex';
                    link.style.width = "90%";
                    link.style.textAlign = "left";
                    link.style.flexDirection = "row";
                    link.querySelector("a").style.marginRight = "1rem";
                    link.querySelector("a").style.width = "fit-content";
                    if (link.textContent.startsWith(".") && !showHidden) link.style.display = 'none'
                }
                else{
                    link.style.display = 'inline-flex';
                    if (link.textContent.startsWith(".") && !showHidden) link.style.display = 'none'
                }

                link.onclick = (e) => {
                    e.preventDefault();
                    CURRENT_PATH = link.textContent;
                    PATHS.push(CURRENT_PATH);
                    BASE_URL += PATHS[PATHS.length - 1];
                    console.log(BASE_URL)
                    getFileSystem(`${BASE_URL}`);
                    window.scrollTo({top: 0});
                }
            })
        })
    } catch (error) {
        console.error(error);
        return;
    }
}

const GOTO_PREVIOUS_PATH = () => {
    PATHS.pop();
    console.log(PATHS);
    CURRENT_PATH = PATHS.length === 0 ? "" : PATHS.join("");
    console.log(CURRENT_PATH);
    BASE_URL = "http://127.0.0.1:8000/" + CURRENT_PATH;
    console.log(BASE_URL);
    getFileSystem(BASE_URL);
}

const SHOW_HIDDEN_FILES = (val) => {
    showHidden = val.checked;
    getFileSystem(BASE_URL);
}

const SET_VIEW = (val) => {
    viewType = val.value;
    getFileSystem(BASE_URL);
}

getFileSystem(BASE_URL);