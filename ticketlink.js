if(!document.getElementById("robTicketOpenerModal"))
{
  let htmlString = `
  <style>${_styleTag}</style>
  <div id="robTicketOpenerModal" class="robTicketOpenerModal">
      <div class="robTicketOpenerModalContent">
      <div>
          <div style="margin:5px">
              Prefix:
              <input type="text" id="robTicketOpenerPrefix" value="EDMC" style="width:100%"/>
          </div>
          <div style="margin:5px">
              Ticket Number:
              <input type="text" id="robTicketOpenerNumber" style="width:100%"/>
          </div>

      </div>
      <div style="margin:5px">
          <button id="robTicketOpenerCancelButton" style="background-color: darksalmon;">Cancel</button>
          <button id="robTicketOpenerOpenTicketButton" style="background-color: darkseagreen;">Open Ticket</button>
      </div>
      </div>
  </div>`;

  function openTicket(){
      let prefix = document.getElementById("robTicketOpenerPrefix").value;
      let ticketNumber = document.getElementById("robTicketOpenerNumber").value;
      if(!prefix){alert("please give a prefix");return;}
      if(!ticketNumber){alert("please give a ticket number");return;}
      if(_openTicketInNewTab) window.open(`https://jira.ihsmarkit.com/browse/${prefix}-${ticketNumber}`, "_blank");
      else window.location = `https://jira.ihsmarkit.com/browse/${prefix}-${ticketNumber}`;

  }

  function killModal(){
      let modal = document.getElementById("robTicketOpenerModal");
      modal.parentElement.removeChild(modal);
  }

  let elem = document.createElement("div");
  elem.innerHTML = htmlString;
  document.getElementsByTagName("body")[0].appendChild(elem);
  document.getElementById("robTicketOpenerOpenTicketButton").onclick = openTicket;
  document.getElementById("robTicketOpenerCancelButton").onclick = killModal;
  document.getElementById("robTicketOpenerModal").addEventListener("keydown", function (e) { if (e.keyCode === 13) { openTicket();}});
  document.getElementsByTagName("body")[0].addEventListener("keydown", function (e) { if (e.keyCode === 27) { killModal();}});
  document.getElementById("robTicketOpenerNumber").focus();
}

