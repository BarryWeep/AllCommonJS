//filter function
function TableColFilter(col_index, tableIDName, inputValue)
{
    var input, filter, table, tr, td, i, txtValue;
    input = inputValue;
    filter = input.toUpperCase();
    table = document.getElementById(tableIDName);
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[col_index];
        if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
        }       
    }
}
    

/*
   $('#RoadRescureOTR').on('click', 'tbody tr', function() {
        var cellText = $(this).text();
        console.log(cellText); // Log the text of the clicked cell to the console
    });
*/