  

function fnMenu() {
    var oXhr = new XMLHttpRequest();

    oXhr.open('GET', 'modules/menu/view/menu1.html');

    oXhr.onreadystatechange = function(oEv) {

        if (oEv.currentTarget.readyState == 4) {
            if (oEv.currentTarget.status != 200) {
                alert('file not found');
            } else {
                document.getElementById('menu').innerHTML = oEv.currentTarget.responseText;
                alert('menu loaded');
            }
        }
   };



    oXhr.send();
}

function fnGetMenu(){
    document.getElementById('mobilenav').style.display='block';
}