function doValidation() {

    var els =document.getElementsByTagName("tr")
    for (var i = 1; i < els.length; i += 2) {
        els[i].style = "background-color:black; color: white"
    }

            }
