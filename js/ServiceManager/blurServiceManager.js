function fnBlurShow() {
    location.hash = "blur";
}

function fnBlur() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/blur/view/blur.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('elementID').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnBlurShow();  };



    oXhr.send();
}