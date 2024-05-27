/*
<div id="PopUpBox" class="popup">
  <div class="popup-shape w-75">
    <div class="PopUp-header">
      <span class="close" onclick="closeLoginForm()" >&times;</span>
    </div>
    <div class="PopUp-content">
      <div class="card mt-3">
        <div class="card-body" id="EmployeeDetails">
        </div>
      </div>
    </div>
  </div>
</div>
*/


function RenderingPopoutBox( HTMLContent)
{
  var PopUpBox = $('#PopUpBox').find('.card-body');

  PopUpBox.append(HTMLContent);
  
  
}


function closeLoginForm() {
    var popup = document.getElementById("PopUpBox");
    popup.style.display = "none";

  }
  
  
  $('#TriggerPopUpBox').click(function(){
  
  $('#PopUpBox').show();
  
});
  