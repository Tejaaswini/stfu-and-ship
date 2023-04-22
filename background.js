chrome.webRequest.onBeforeRequest.addListener(
  function(details) { 
    // Calculate remaining days
    var currentDate = new Date();
    var endDate = new Date();
    endDate.setDate(currentDate.getDate() + 27); // Add 27 days

    return {redirectUrl: "data:text/html;charset=UTF-8," + encodeURIComponent(`
    <html>
    <body style='background-image: url(https://pbs.twimg.com/profile_banners/993846655416877057/1681008927/1500x500); background-size: cover; background-position: center center; background-repeat: no-repeat; height: 100vh; display: flex; justify-content: center; align-items: center; flex-direction: column;'>
      <h1 style='color: white; text-align: center; font-size: 60px;'>go fkn ship</h1>
      <p id='timer' style='color: white; text-align: center; font-size: 24px;'>demo day in: </p>
      <a href='https://buildspace.so/home' style='display: inline-block; padding: 12px 24px; background-color: #153520; color: white; text-align: center; text-decoration: none; font-size: 18px; margin-top: 24px; border-radius: 5px; border: none; cursor: pointer; transition: 0.3s ease-in-out; box-shadow: 0px 2px 6px rgba(255, 255, 255, 0.3);'>
        let's shipppp
      </a>
      <div style="position: relative; width: 100%; max-width: 300px; height: 300px;overflow: hidden; margin-top:50px;">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/JMbwn7BluZs?autoplay=1&loop=1&playlist=JMbwn7BluZs" frameborder="0" allow="autoplay; loop" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
      </div>
      <script>
        // Update remaining days in real-time
        var timerElement = document.getElementById('timer'); // Get the timer element
        var endDate = new Date('${endDate.toISOString()}'); // Convert endDate to a string in ISO format

        function updateTimer() {
          var currentDate = new Date();
          var timeDifference = endDate - currentDate;
          var remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
          if (remainingDays > 0) {
            timerElement.textContent = 'demo day in: ' + remainingDays + ' days';
          } else {
            timerElement.textContent = 'demo day today!';
          }
        }

        updateTimer(); // Initial update
        setInterval(updateTimer, 1000 * 60 * 60 * 24); // Update every 24 hours
      </script>
    </body>
  </html>
  
    `)};
  },
  {urls: ["https://*.netflix.com/*","https://*.primevideo.com/*","https://*.hulu.com/*","https://*.disneyplus.com/*","https://*.hbomax.com/*"]},
  ["blocking"]
);
