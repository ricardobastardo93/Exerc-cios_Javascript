function LigarouDesligar() {
    var lâmpada = document.getElementById("lâmpada")

    if(lâmpada.src.match("BulbOff")) {
        lâmpada.src = "BulbOn.jpg";
    } else {
        lâmpada.src = "BulbOff.jpg"
    }

}