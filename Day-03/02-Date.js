// Function to demonstrate various date methods
function dateMethods() {
  // Create a new Date object representing the current date and time
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  // Getting various components of the date
  console.log("Date:", currentDate.getDate()); // Get the day of the month (1-31)
  console.log("Month:", currentDate.getMonth() + 1); // Get the month (0-11), add 1 to get 1-12
  console.log("Year:", currentDate.getFullYear()); // Get the full year (e.g. 2022)
  console.log("Hours:", currentDate.getHours()); // Get the hour (0-23)
  console.log("Minutes:", currentDate.getMinutes()); // Get the minutes (0-59)
  console.log("Seconds:", currentDate.getSeconds()); // Get the seconds (0-59)

  // Setting components of the date
  currentDate.setFullYear(2022); // Set the year to 2022
  console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5); // Set the month to June (zero-indexed, so 5 represents June)
  console.log("After setMonth:", currentDate);

  // Getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds since 1970:", currentDate.getTime()); // Get the time in milliseconds since January 1, 1970, 00:00:00 UTC

  // Create a new Date object with a specific date
  const newDate = new Date(2023, 8, 15); // Create a new date object for September 15, 2023
  console.log("New Date:", newDate);
}

// Example Usage for Date Methods
dateMethods();