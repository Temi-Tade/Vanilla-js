let req = indexedDB.open("store", 3)

req.onupgradeneeded = (e) => {
    console.log(e.oldVersion)
    switch (e.oldVersion) {
        case 0:
            //init
            break;
        case 1:
            alert()
            //update
        default:
            break;
    }
}

req.onerror = () => {
    console.error("Error", req.error)
}

req.onsuccess = () => {
    let db = req.result
    console.log(db.objectStoreNames)
}