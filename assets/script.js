//  High Level Overview
//  1.  Use Moment.js to show the current time.

//  2.  Use Day.js to get the current hour (in military time)

//  3.  Create the timeblocks
        // -Each timeblock should be colored past, present, or future as appropriate

        // -Each timeblock should be filled in with any saved text from local storage

        // -Each timeblock should also have a button that allows you to save any entered text

//  Lower Level Overview
//  1.  Use Day.js to show the current time
        // -Use the appropriate function to get the current data

        // -Put that into the corresponding div #currentDay

//  2.  Use Day.js to get the current hour   (in military time)

        // -Use the appropriate function to get the current hour
        
        // -Convert the returned hour (which is a string) into an integer and store in a variable

//  3.  Create the timeblocks

        // -Store an array of hours you need to create timeblocks for hours 9 - 17.

        // -For every hour, create a div

            // -Determine if that hour is >, <, === the current hour; add the corresponding CSS

            // -Convert the timeblock's hour into 12 hour format and append a div containing the formatted hour

            // -Append a text input, putting any existing schedule data for this hour into the text input

            // -Append a button that when clicked, saves this specific timeblock's input value into local storage

            // -Add the timeblock into the timeblock container
// ============================================

// save user input in local storage

document.getElementbyId("click-me").addEventListener("click", function(e) {
        e.preventDefault();
        var text= document.getElementById("text").value; localStorage.setItem("text", text);
        console.log("text")
});




// Day.js code- Gary's example

  //  ISO format
    // '2018-04-04T16:00:00.000Z'
    // If no date is supplied to days(), it assumes NOW
    var defFormat = dayjs().format();
    // You can make a variable for any date object you need
    var garyBirthday = dayjs("1965-12-07T16:00:00.000Z")
    var anyOldDay = dayjs("1995-06-07T16:00:00.000Z");
    // You can format any date
    var format1 = garyBirthday.format("YYYY, MM, DD");
    // Determine if one date is after another
    var isAfter = garyBirthday.isAfter(anyOldDay, 'hour');
    console.log(isAfter);



       