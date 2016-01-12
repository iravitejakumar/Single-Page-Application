function fnTriangleShow() {
    location.hash = "Triangle";
}

function fnTriangle() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/triangle/view/triangle.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('elementID').innerHTML = oEv.currentTarget.responseText;
            }
        }
  fnTriangleShow();  

};



    oXhr.send();
}