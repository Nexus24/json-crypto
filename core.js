




var saveData

var decryptContent = () => {
    document.getElementById('window-1-view').textContent = decrypt(document.getElementById('window-1-view').textContent)
}
var encryptContent = () => {
    document.getElementById('window-1-view').textContent = encrypt(document.getElementById('window-1-view').textContent)
}
var hashContent = () => {
    document.getElementById('window-1-view').textContent = hash(document.getElementById('window-1-view').textContent+document.getElementById("option-hash").value)
}

document.ondragover = () => {
    return false
}

document.ondragleave = () => {
    return false
}
document.ondragend = () => {
    return false
}
document.ondrop = (e) => {
    e.preventDefault();

    for (let f of e.dataTransfer.files) {
        fs.readFile(f.path,(err,data)=>{
            if(e.target.classList.contains("drag-drop")==true){
                e.target.textContent = ""
                e.target.appendChild(document.createTextNode(data.toString('utf-8')))
                saveData = f.path
            }
        })
    }
    
    return false
}
