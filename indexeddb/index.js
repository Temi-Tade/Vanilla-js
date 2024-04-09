var req = window.indexedDB.open("app_data", 2)

req.onupgradeneeded = (e) => {
    let db = req.result
    // db.onversionchange = () => {
    //     db.close()
    //     history.go(0)
    // }
    if (!db.objectStoreNames.contains("data")) {
        alert()
        db.createObjectStore("data", {keyPath: "id"})
        console.log(db.objectStoreNames)
    } else {
        // console.log(db.objectStoreNames)
    }
}

req.onerror = () => {
    alert("server error")
}

req.onsuccess = () => {
    let db = req.result
    console.log(db.objectStoreNames)
}