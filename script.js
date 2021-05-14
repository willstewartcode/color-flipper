function changeBgColor() {
    // Gets the rgb values
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    // Debug
    // console.log("Red: "+red+"\nGreen: "+green+"\nBlue: "+blue);

    // Sets body background color to generated RGB values & displays those values to the user
    document.body.style.backgroundColor = "rgb("+red+", "+green+", "+blue+")";
    document.getElementById("color-values").innerHTML= "rgb("+red+", "+green+", "+blue+")";
}