function fnImagehoverShow() {
    location.hash = "Imagehover";
}

function fnImagehover() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/imagehover/view/imagehover.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('elementID').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnImagehoverShow();  };



    oXhr.send();
}