// Function to update the time
function updateClock() {
    const now = new Date(); // Get the current time
    const timeString = now.toLocaleString('id-ID', { 
        timeZone: 'Asia/Jakarta', // Set timezone to WIB (Western Indonesian Time)
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });

    // Find the table cell where the time is displayed and update its content
    const timeCell = document.querySelector('.olympiad-info table tr:first-child td:last-child'); 
    timeCell.textContent = timeString;
}
