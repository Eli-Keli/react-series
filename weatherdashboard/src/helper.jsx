
import WeatherIcon from 'react-icons-weather';



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


// Helpers function to get weather emoji
export const getWeatherIcon = (weatherId, isNight = false) => {
  return <WeatherIcon name="owm" iconId={weatherId} flip="horizontal" rotate="90" night={isNight} className="text-blue-800" />
};

// Determine if it's night time
export const isNightTime = (dt) => {
  const hour = new Date(dt * 1000).getHours();
  return hour >= 18 || hour < 6;
};