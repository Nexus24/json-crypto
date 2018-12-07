let saveContent = (path = saveData) => {
    fs.writeFile(path,document.getElementById('window-1').firstChild.textContent,()=>{
        console.log("Saved!")
    })
}