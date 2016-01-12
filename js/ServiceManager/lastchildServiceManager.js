function fnLastchildShow() {
    location.hash = "Lastchild";
}

function fnLastchild() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/lastchild/view/lastchild.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('elementID').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnLastchildShow();  };



    oXhr.send();
}