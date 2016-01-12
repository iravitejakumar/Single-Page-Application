function fnFirstletterShow() {
    location.hash = "Firstletter";
}

function fnFirstletter() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/first letter/view/firstletter.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('elementID').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnFirstletterShow();  };



    oXhr.send();
}