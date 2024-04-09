async function getRepoData(name) {
    fetch(`https://api.github.com/repos/Temi-Tade/${name}/languages`)
    .then((res) => res.json())
    .then((data) => console.log(Object.keys(data)))
}

getRepoData("beautynes")