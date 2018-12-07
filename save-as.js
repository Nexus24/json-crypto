function saveAs(encryption=false){
    // app.getPath("desktop")       // User's Desktop folder
    // app.getPath("documents")     // User's "My Documents" folder
    // app.getPath("downloads")     // User's Downloads folder

    var userChosenPath = dialog.showSaveDialog({})

    if(userChosenPath){
        if(encryption==true){
            saveContentEncrypted(encryption,userChosenPath)
        }else{
            saveContent(encryption,userChosenPath)
        }
        document.getElementById('title').textContent = userChosenPath
        saveData = userChosenPath
    }


}