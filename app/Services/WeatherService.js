import { ProxyState } from "../AppState.js";
import Weather from "../models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {
  toggleShowFahrenheit() {
    ProxyState.weather.showFahrenheit = !ProxyState.weather.showFahrenheit
  }


  async getWeather() {
    console.log("Calling the Weatherman");
    let res = await api.get('weather');
    ProxyState.weather = new Weather(res.data);
  }

}

const weatherService = new WeatherService();
export default weatherService;