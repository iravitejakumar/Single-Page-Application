function fnImageborderShow() {
    location.hash = "Imageborder";
}

function fnImageborder() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/imageborder/view/imageborder.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('elementID').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnImageborderShow();  };



    oXhr.send();
}