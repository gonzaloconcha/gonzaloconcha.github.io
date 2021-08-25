function changeText() {
    document.getElementById("Message").innerHTML = document.getElementById("inputMensaje").value;
}

document.getElementById("submitMessage").addEventListener("clicked", function() {changeText()});