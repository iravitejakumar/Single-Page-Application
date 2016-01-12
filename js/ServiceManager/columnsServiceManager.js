function fnColumnsShow() {
    location.hash = "Columns";
}

function fnColumns() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/columns/view/columns.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('elementID').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnColumnsShow();  };



    oXhr.send();
}