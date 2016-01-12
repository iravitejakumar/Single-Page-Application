function fnRibbonShow() {
    location.hash = "Ribbon";
}

function fnRibbon() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/ribbon/view/ribbon.html');

    oXhr.onreadystatechange = function(oEv) {
        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('elementID').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnRibbonShow();  
};
    oXhr.send();
}