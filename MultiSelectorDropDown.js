/*************
<label class="col-form-label d-block">(Primary,Secondary,Third)</label>
<input type="text" class="form-control MutlipleSelector" id="Admin_Department" required>
<div class="dropdown">
<div id="options" class="dropdown-content">
    <label><input type="checkbox" value="Premier Illawarra"> Premier Illawarra</label>
    <label><input type="checkbox" value="Premier Charter"> Premier Charter</label>
</div>
</div>
 **************/

$(document).on('click', '.MutlipleSelector', function(event) {


  var dropDownContent = $(this).next('.dropdown').find('.dropdown-content');

  if (dropDownContent.hasClass('show')) {
      dropDownContent.removeClass('show');
  } else {
      dropDownContent.addClass('show');
  }
});


$(document).on('change', '.dropdown-content input[type="checkbox"]',function(){


    const text = $(this).val();
    const selectedItems = $(this).closest('.dropdown').prev('.MutlipleSelector').find('span');
    const existingItem = selectedItems.find(`[data-value="${text}"]`);
    var SelectTextArray =[];
    if (selectedItems.text())
    {
      var CurrentSelectText = selectedItems.text();
      SelectTextArray = CurrentSelectText.split(',');
    }


    if (this.checked) {
        if (!existingItem.length) {
          SelectTextArray.push(text);

        }
    } else {
        var indexToRemove = SelectTextArray.indexOf(text);
        if (indexToRemove !== -1) {
            SelectTextArray.splice(indexToRemove, 1);
        }
    }

    var finanlSelectString = "";
    SelectTextArray.forEach(function(element){
      finanlSelectString += element + ",";
    })
    
    if(SelectTextArray.length!=0)
    {
      finanlSelectString = finanlSelectString.slice(0,-1);
    }
    else
    {
      finanlSelectString=""; 
    }

    selectedItems.text(finanlSelectString);
});


$('html').click(function(event) {
  // Check if the clicked element is not an input inside a .dropdown
  if (!$(event.target).closest('.dropdown').find('input').is(event.target)) {
      // Remove the 'show' class from .dropdown-content
      $('.dropdown-content').removeClass('show');
      $('.dropdown-content').find('input[type="text"]').val('').trigger('keyup');
  }
});


$(document).on('keyup', '.dropdown-content input[type="text"]', function(event) {
  // Get the search input value and convert it to uppercase
  var filter = $(this).val().toUpperCase();
  
  // Select all checkboxes within the .CheckboxOption div
  var checkboxes = $(".CheckboxOption input[type='checkbox']");
  
  // Loop through each checkbox
  checkboxes.each(function() {
    // Get the value of the current checkbox
    var value = $(this).val();
    
    // Get the label associated with the checkbox
    var label = $(this).parent();
    
    // Check if the checkbox value contains the filter text
    if (value.toUpperCase().indexOf(filter) > -1) {
      // If it does, show the label
      label.show();
    } else {
      // If it doesn't, hide the label
      label.hide();
    }
  });
});