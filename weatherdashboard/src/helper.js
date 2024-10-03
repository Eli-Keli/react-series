

export function convertUnixToNormalTime(unixTimestamp) {
    // Create a new Date object from the Unix timestamp
    const date = new Date(unixTimestamp * 1000); // Multiply by 1000 to convert to milliseconds
  
    // Get the hours, minutes, and seconds from the Date object
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    // Format the time as a string
    const formattedTime = `${hours}:${minutes}`;
  
    return formattedTime;
  }