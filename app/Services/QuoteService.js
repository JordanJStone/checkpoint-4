import { ProxyState } from "../AppState.js";
import Quote from "../models/Quote.js";
import { api } from "./AxiosService.js";

//TODO create methods to retrieve data and update the State
class QuoteService {
  async getQuote() {
    console.log("Calling the Quote in Service");
    let res = await api.get('quotes');
    ProxyState.quote = new Quote(res.data);
  }
}

const quoteService = new QuoteService();
export default quoteService;