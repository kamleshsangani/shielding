<!-- ParameterFromURL -->
//JSON Array
var record_array = [];

var reason = GetURLParameter('reason');
document.getElementById("reason").innerHTML = reason;
if (reason == null) { document.getElementById("div-reason").style.display = "none"; }

var manufacturer = GetURLParameter('manufacturer');
document.getElementById("manufacturer").innerHTML = manufacturer;
if (manufacturer == null) { document.getElementById("div-manufacturer").style.display = "none"; }

var model = GetURLParameter('model');
document.getElementById("model").innerHTML = model;
if (model == null) { document.getElementById("div-model").style.display = "none"; }

var android = GetURLParameter('android');
document.getElementById("android").innerHTML = android;
if (android == null) { document.getElementById("div-android").style.display = "none"; }

var version = GetURLParameter('version');
document.getElementById("version").innerHTML = version;
if (version == null) { document.getElementById("div-version").style.display = "none"; }

var root = GetURLParameter('root');
document.getElementById("root").innerHTML = root;
if (root == null) { document.getElementById("div-root").style.display = "none"; }

var keyboard = GetURLParameter('keyboard');
document.getElementById("keyboard").innerHTML = keyboard;
if (keyboard == null) { document.getElementById("div-keyboard").style.display = "none"; }

var keyboardname = GetURLParameter('keyboardname');
document.getElementById("keyboardname").innerHTML = keyboardname;
if (keyboardname == null) { document.getElementById("div-keyboardname").style.display = "none"; }

var keyboardversion = GetURLParameter('keyboardversion');
document.getElementById("keyboardversion").innerHTML = keyboardversion;
if (keyboardversion == null) { document.getElementById("div-keyboardversion").style.display = "none"; }

var keyboardsigner = GetURLParameter('keyboardsigner');
document.getElementById("keyboardsigner").innerHTML = keyboardsigner;
if (keyboardsigner == null) { document.getElementById("div-keyboardsigner").style.display = "none"; }

var screenreader = GetURLParameter('screenreader');
document.getElementById("screenreader").innerHTML = screenreader;
if (screenreader == null) { document.getElementById("div-screenreader").style.display = "none"; }

var screenreadername = GetURLParameter('screenreadername');
document.getElementById("screenreadername").innerHTML = screenreadername;
if (screenreadername == null) { document.getElementById("div-screenreadername").style.display = "none"; }

var screenreaderversion = GetURLParameter('screenreaderversion');
document.getElementById("screenreaderversion").innerHTML = screenreaderversion;
if (screenreaderversion == null) { document.getElementById("div-screenreaderversion").style.display = "none"; }

var screenreadersigner = GetURLParameter('screenreadersigner');
document.getElementById("screenreadersigner").innerHTML = screenreadersigner;
if (screenreadersigner == null) { document.getElementById("div-screenreadersigner").style.display = "none"; }

var hookingframeworks = GetURLParameter('hookingframeworks');
document.getElementById("hookingframeworks").innerHTML = hookingframeworks;
if (hookingframeworks == null) { document.getElementById("div-hookingframeworks").style.display = "none"; }

//JSON events
var event_json = '{"events":[{'+ record_array + '}]}';
document.getElementById("debug").innerHTML = record_array;

//GET param from URL
function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            addArray(record_array, sParameterName[0], sParameterName[1]);
            return sParameterName[1];
        }
    }
}

//Add object to JSON Array
function addArray(array, object, value)
{
    array.push('"'+ object +'": "' + value +'"');
}





