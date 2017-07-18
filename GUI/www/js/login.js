$("document").ready(function(){
//$('#Load').load("http://telecommit.altervista.org/Telecommit/php/get_smartphone_phone.php");	
$.ajax({
    type: 'POST',
    // make sure you respect the same origin policy with this url:
    
    url: 'index.html',
    data: { 
        'userid': 'bar', 
        'ca$libri': 'no$libri' // <-- the $ sign in the parameter name seems unusual, I would avoid it
    },
    success: function(msg){
        alert('wow' + msg);
    }
});
});

$.ajax({
    type: 'POST',
    // make sure you respect the same origin policy with this url:
    // http://en.wikipedia.org/wiki/Same_origin_policy
    url: 'http://nakolesah.ru/',
    data: { 
        'foo': 'bar', 
        'ca$libri': 'no$libri' // <-- the $ sign in the parameter name seems unusual, I would avoid it
    },
    success: function(msg){
        alert('wow' + msg);
    }
});
function get_url_param(param) {
    var url = window.location.href; 
    var urlparts = url.split("?");
    
    if (urlparts.length == 1){
        return "";
    }
    var parameters = urlparts[1].split("&"); 
    var requestedParam = "";
    
    for (i=0; i<parameters.length; i++) {
        var parts = parameters[i].split("=");
        if (parts[0] == param){
            requestedParam = parts[1];
            break;
        }
    }

    return requestedParam;
} 











