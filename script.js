   // Get the current date and time
   const now = new Date();

   // Extract the current date in YYYY-MM-DD format
   const currentDate = now.toISOString().split('T')[0];

   // Get the day of the week
   const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   const dayOfWeek = daysOfWeek[now.getDay()];

   // Output the results to the HTML elements
   document.getElementById('currentDate').innerText = "Current date: " + currentDate;
   document.getElementById('dayOfWeek').innerText = "Day of the week: " + dayOfWeek;