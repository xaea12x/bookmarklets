fetch("ticketlink.js").then(response => response.text()).then(response => createTicketLink(response));

function createTicketLink(scriptText)
{
  scriptText = scriptText;
  let bookmarkValue = `javascript:(function(){let _openTicketInNewTab = true;${scriptText}})();`
  let bookmarkValue2 = `javascript:(function(){let _openTicketInNewTab = false;${scriptText}})();`
  document.getElementById("bookmarkLink").setAttribute("href", bookmarkValue);
  document.getElementById("bookmarkLink2").setAttribute("href", bookmarkValue2);

  document.getElementById("script-p").innerText = bookmarkValue;
}
