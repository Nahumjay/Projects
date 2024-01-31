



function theDate(stringInput) {
   let Year = parseInt(stringInput.substring(0,4),10); // This is extracting the year starting from (0 - 4) --> 4 is  not included
   let Month = parseInt(stringInput.substring(4,6),10) - 1; // This is extracting the Month starting (4 - 6)  ---> 6 is not included
   let Day = parseInt(stringInput.substring(6,8),10); // This is extracting the Day starting from (6-8)  ----> 8 is not included
   let Hour = parseInt(stringInput.substring(9,11),10); // Extracting the hour starting from (9-11)   --> 11 is not included 
   let Minute = parseInt(stringInput.substring(11,13),10); //Extracting the Minute starting from (11-13)   --> 13 is not included 
   let Second = parseInt(stringInput.substring(13,15),10);  //Extracting the hour starting from (13-15)   --> 15 is not included 

   let dateObj = new Date(Year, Month, Day, Hour, Minute, Second); // I am creating the date Object here
   if (isGood(Year, Month, Day, Hour, Minute, Second)) {
        let theGoodMessage = transformDate(dateObj);
        return theGoodMessage;    // this what is being returned from the function

   } else {
    throw new Error ("Invalid date");
   }
   

    

}

function isGood(Year, Month, Day, Hour, Minute, Second) {
    const lastDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (YearLeap(Year)) {
        lastDay[1] = 29;
        console.log("YOUR CODE IS WORKING LEAP YEAR")
    }
    if ((Month > 11) || (Month < 0)) {
        return false;
       
    }
    if (lastDay[Month] < Day ||  Day < 1) {
        return false;
    }
    

    return true;


}
   
function transformDate(dateObj) { // all this function is doing transforming the date into the correct format
    const specficMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November',
    'December'] // setting each month
    
  
    let specficMonth = specficMonths[dateObj.getMonth()]; // getting the month of what is inputted in the functon
   
    let Year = dateObj.getFullYear(); // gets the year that inputed from the object
    let Hour = dateObj.getHours(); // gets the object that is inputted
    let Day = dateObj.getDate(); // gets the day that is inputted from the object
    let Minute = dateObj.getMinutes(); // gets the specfic amount of mintues that is inputted
    
    Hour = Hour % 12 || 12; // converting 24 hours to 12 hours to get the correct output


    let amOrPm;  // a check to see whether it is am or Pm
    if (Hour >= 12 ) {
        amOrPm = 'pm'
    } else {
        amOrPm = 'am'
    }

    

    if (Minute < 10 ) { // checking the mintues and making sure the output is what it is needed to be 
        Minute  = '0' + Minute;
    } else {
        Minute = Minute.toString();
    }

    return specficMonth + " " + Day + "," + Year + ", " + "at"  + " " + Hour  +  " " + amOrPm; // returning the correct output
}


function YearLeap(Year) {
    return ((Year % 4  === 0 && Year % 100 !== 0) || (Year % 400  === 0 ));
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question("Enter the date in this way ==> (YYYYMMDDTHHMMS): ", (userInput) => {
    try {
        let str = theDate(userInput);
        console.log(str);
    } catch (error) {
        console.log(error.message);
    }
    rl.close();
  });





module.exports = {theDate, transformDate, YearLeap}; // exporting both files for testing 



