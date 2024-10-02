import axios from 'axios';

export const api = {
    key: "a2416b0043b0bfe92d2a33393aba41ab",
    base: "https://api.openweathermap.org/data/2.5/"
}


export const fetchCurrentWeather = async (city) => {
  try {
    const response = await axios.get(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    throw error;
  }
};

export const fetchForecast = async (city) => {
  try {
    const response = await axios.get(`${api.base}forecast?q=${city}&appid=${api.key}&units=metric`);
    return response.data;
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw error;
  }
};