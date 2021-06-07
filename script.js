const logo = document.getElementsByTagName(".logo path");
for (let i = 0; i < logo.length; i++) {
    console.log(`${logo[i].getTotalLength()}`)

}