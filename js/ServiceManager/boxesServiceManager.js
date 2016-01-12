function fnBoxesShow() {
    location.hash = "Boxes";
}

function fnBoxes() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/boxes/view/boxes.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('elementID').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnBoxesShow();  };
    oXhr.send();
}