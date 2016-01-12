function fnButtonShow() {
    location.hash = "Button";
}

function fnButton() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/button/view/button.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('elementID').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnButtonShow();  };



    oXhr.send();
}