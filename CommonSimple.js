
/******************
 Jquery Required 
 ****************/

function isNumeric(str) {
    return /^\d+$/.test(str);
  }
  
  function isLetter(str) {
    return /^[a-zA-Z]+$/.test(str);
  }
  


// normal date data format year-month-day, display date in dd/mm/yyyy
  function GetTodayDate()
  {
    const today = new Date();

    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = today.getFullYear();

    // Optional: Display the date in DD/MM/YYYY format in the console
    const displayDate = year + '-' + month + '-' + day;


    return displayDate;
  }


  // convert date in anyformat into Australia dd/mm/yyyy
  function DateVerifyReFormat(inputString) {
    const months = {
        "jan": "01", "feb": "02", "mar": "03", "apr": "04", "may": "05", "jun": "06",
        "jul": "07", "aug": "08", "sep": "09", "oct": "10", "nov": "11", "dec": "12"
    };

    const dateFormats = [
        /^\d{4}-\d{2}-\d{2}$/,
        /^\d{2}-[a-zA-Z]{3,9}-\d{4}$/,
        /^\d{2}\/[a-zA-Z]{3,9}\/\d{4}$/,
        /^\d{2}\/\d{2}\/\d{4}$/
    ];

    for (const format of dateFormats) {
        if (format.test(inputString)) {
            const parts = inputString.split(/[-/]/);
            if (parts.length === 3) {
                if (format === dateFormats[1] || format === dateFormats[2]) {
                    const monthKey = parts[1].toLowerCase().substring(0, 3);
                    if (months[monthKey]) {
                        parts[1] = months[monthKey];
                    } else {
                        console.log('Invalid month abbreviation');
                        return inputString;
                    }
                }
                return parts.map(part => part.padStart(2, '0')).reverse().join('/');
            }
        }
    }
    console.log('Invalid date format');
    return inputString;
}

//Date Compare Function-------------------------------------------------------------
function isTwoDateSame(BasedDate, ComparedDate)
{

  if(DateVerifyReFormat(BasedDate) == DateVerifyReFormat(ComparedDate))
  {
      return true;
  }

  return false;
} 


function isTheDateBetween(CurrentDate, StartDate, EndDate) {
  // Convert strings to Date objects
  const currentDateObj = parseDateString(DateVerifyReFormat(CurrentDate));
  const startDateObj = parseDateString(DateVerifyReFormat(StartDate));
  const endDateObj = parseDateString(DateVerifyReFormat(EndDate));

  // Check if CurrentDate is between StartDate and EndDate
  return startDateObj.getTime() <= currentDateObj.getTime() && currentDateObj.getTime() <= endDateObj.getTime();
}

// Helper function to parse date string in format dd/mm/yyyy
function parseDateString(dateString) {
  const [day, month, year] = dateString.split('/');
  return new Date(`${year}-${month}-${day}`);
}
//----------------------------------------------------------------------------------

