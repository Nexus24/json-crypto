var saveContentEncrypted = (encrypted,path = saveData) => {
    try{
    fs.writeFile(path,encrypt(document.getElementById('window-1').firstChild.textContent),()=>{
        console.log("Saved using AES-256-CTR")
    })
    }catch(e){
        saveAs(true)
    }
}
var saveContent = (encrypted,path = saveData) => {
    try{
    fs.writeFile(path,document.getElementById('window-1').firstChild.textContent,(err)=>{
        alert("File has been saved to " + path)
    })
    }catch(e){
        saveAs(false)
    }
}