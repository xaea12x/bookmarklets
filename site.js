fetch("ticketlink.js").then(response => response.text()).then(response => createTicketLink(response));

function createTicketLink(scriptText)
{
  scriptText = scriptText;
  let bookmarkValue = `javascript:(function(){${scriptText}})();`
  document.getElementById("bookmarkLink").setAttribute("href", bookmarkValue);

  document.getElementById("script-p").innerText = bookmarkValue;
}
