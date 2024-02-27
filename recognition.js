var log = document.getElementById('log');
function logEvent(string)
{
  log.innerHTML = "<center>" + string + '<br />' + log.innerHTML + "</center>";
}

window.SpeechRecognition = window.SpeechRecognition ||
  window.webkitSpeechRecognition ||
  null;

var recognizer = new SpeechRecognition();
recognizer.lang = "ru";
recognizer.continuous = false;
recognizer.interimResults = true;
recognizer.maxAlternatives = 1;

recognizer.addEventListener("result", function(event)
{
  console.log(event);
  for (var i = event.resultIndex; i < event.results.length; i++)
  {
    if (event.results[i].isFinal)
    {
      logEvent(event.results[i][0].transcript);
    }
    else
    {
      logEvent(event.results[i][0].transcript);
    }
  }
});

recognizer.addEventListener('error', function(event)
{
  logEvent(event);
});

recognizer.addEventListener('end', function()
{
  logEvent('Recognition ended');
});

function start()
{
  logEvent("Please touch enter for starting recognize");
  logEvent("for clear page touch up");
  document.addEventListener("keydown", function(event)
  {
    var currentCode = event.which || event.code;
    if (currentCode === 13)
    {
      // start recognoize
      logEvent("for canceling touch esc");
      recognizer.start();
    }
    else if (currentCode === 27)
    {
      // stop recognize
      recognizer.stop();
    }
    else if (currentCode === 38)
    {
      window.location.reload();
    }
    else
    {
      logEvent("Please touch enter for starting recognize");
      logEvent("for clear page touch up");
    }
  });
}

window.onload = start();