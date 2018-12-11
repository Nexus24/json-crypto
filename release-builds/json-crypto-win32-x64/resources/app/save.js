var saveContentEncrypted = (encrypted,path = saveData) => {
    try{
    fs.writeFile(path,encrypt(document.getElementById('window-1').firstChild.textContent),()=>{
        nativeToast({
            message: "Saved using AES-256-CTR",
            position: 'south-east',
            // Self destroy in 5 seconds
            timeout: 5000,
            type: 'info'
        })
        document.getElementById('title').textContent = path
        saveData = path
    })
    }catch(e){
        saveAs(true)
    }
}
var saveContent = (encrypted,path = saveData) => {
    try{
        fs.writeFile(path,document.getElementById('window-1').firstChild.textContent,(err)=>{
            document.getElementById('title').textContent = path
            saveData = path
            nativeToast({
                message:"File saved",
                position: 'south-east',
                // Self destroy in 5 seconds
                timeout: 5000,
                type: 'info'
            })
        })
    }catch(e){
        saveAs(false)
    }
}