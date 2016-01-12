function fnImagecircleShow() {
    location.hash = "Imagecircle";
}

function fnImagecircle() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/imagecircle/view/imagecircle.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('elementID').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnImagecircleShow();  };



    oXhr.send();
}