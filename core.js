




var saveData

var decryptContent = () => {
    document.getElementById('window-1').firstChild.textContent = decrypt(document.getElementById('window-1').firstChild.textContent)
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
                document.getElementById('title').textContent = f.path
            }
        })
    }
    
    return false
}
