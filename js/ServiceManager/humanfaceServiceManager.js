function fnHumanfaceShow() {
    location.hash = "Humanface";
}

function fnHumanface() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/human face/view/humanface.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('elementID').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnHumanfaceShow();  };



    oXhr.send();
}