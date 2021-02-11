Promise.all([fetch("ticketlink.js").then(response => response.text()), fetch("site.css").then(response => response.text())])
  .then(values => createTicketLink(...values));

function createTicketLink(scriptText, cssText)
{
  let bookmarkValue = `javascript:(function(){let _openTicketInNewTab = true;let _styleTag=\`${cssText}\`;${scriptText}})();`
  let bookmarkValue2 = `javascript:(function(){let _openTicketInNewTab = false;let _styleTag=\`${cssText}\`;${scriptText}})();`
  document.getElementById("bookmarkLink").setAttribute("href", bookmarkValue);
  document.getElementById("bookmarkLink2").setAttribute("href", bookmarkValue2);

  document.getElementById("script-p").innerText = bookmarkValue;
}
