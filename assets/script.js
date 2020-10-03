//  High Level Overview
//  1.  Use Moment.js to show the current time.

//  2.  Use Moment to get the current hour (in military time)

//  3.  Create the timeblocks
        // -Each timeblock should be colored past, present, or future as appropriate

        // -Each timeblock should be filled in with any saved text from local storage

        // -Each timeblock should also have a button that allows you to save any entered text

//  Lower Level Overview
//  1.  Use Moment to show the current time
        // -Use the appropriate function to get the current data

        // -Put that into the corresponding div #currentDay

//  2.  Use Moment.js to get the current hour   (in military time)

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

var clickMeButton = document.getElementById("click-me")           