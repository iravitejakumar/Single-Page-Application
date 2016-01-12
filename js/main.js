window.onhashchange = fnHasChange;
function fnDoLoad() {
    
    fnMenu();
    fnFooter();
    fnHasChange();
}

function fnHasChange(oEv) {
    var sNewToken = location.hash;

    switch (sNewToken) {
        case '#blur':
            fnBlur();
            break;
        case '#Button':
            fnButton();
            break;
         case '#Columns':
            fnColumns();
            break; 
       case '#Empty':
            fnEmpty();
            break;
        case '#Firstletter':
           fnFirstletter();
            break;
            case '#Humanface':
            fnHumanface();
            break;
        case '#Imageborder':
            fnImageborder();
            break;
         case '#Imagecircle':
            fnImagecircle();
            break; 
       case '#Imagehover':
            fnImagehover();
            break;
        case '#Lastchild':
            fnLastchild();
            break;
         case '#List':
            fnList();
            break;  
            case '#Menu':
            fnMenu();
            break;
        case '#Ribbon':
            fnRibbon();
            break;
         case '#Triangle':
            fnTriangle();
            break;
            case '#Boxes':
            fnBoxes();
            break;                
        
        default:

            break;
    }

}



var myCenter=new google.maps.LatLng(17.4201931,78.3416033);

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:5,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

