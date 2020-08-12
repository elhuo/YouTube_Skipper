function submitData() {
    var startMin, startSec = 0;
    startMin = document.getElementById('startMin').value;
    startSec = document.getElementById('startSec').value;

    var start = parseFloat(startMin) * 60 + parseFloat(startSec);

    var url = document.getElementById('url').value;
    var newUrl = url + "&feature=youtu.be&t=" + start;
   
    window.location.assign(newUrl);   
}

function submitDataEmbed() {
    var startMin, startSec, endMin, endSec = 0;
    startMin = document.getElementById('startMinEm').value;
    startSec = document.getElementById('startSecEm').value;
    endMin = document.getElementById('endMinEm').value;
    endSec = document.getElementById('endSecEm').value;

    var start = parseFloat(startMin) * 60 + parseFloat(startSec);
    var end = parseFloat(endMin) * 60 + parseFloat(endSec);
    var url = document.getElementById('urlEmbed').value;
    alert(url);
    newUrl = url.replace("watch?v=", "embed/")
    var newUrl = url + "?start=" + start;
    if(end !== 0){
        newUrl += "&end=" + end + "version=3";
    }
    alert(newUrl);
    window.location.assign(newUrl);    
}

