import axios from "axios";

export const getSingleStockInfo = (stock: string): Promise<Stock> =>
  new Promise((resolve, reject) => {
    if (!stock) {
      return reject(Error("Stock symbol required"));
    }
    if (typeof stock !== "string") {
      return reject(
        Error(`Invalid argument type. Required: string. Found: ${typeof stock}`)
      );
    }

    const url = `https://query1.finance.yahoo.com/v10/finance/quoteSummary/${stock}?modules=price`;
    const proxy = "https://thingproxy.freeboard.io/fetch/";

    const finalURL = typeof window !== "undefined" ? proxy + url : url;

    return axios
      .get(finalURL, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const { data } = res;
        if (!data?.quoteSummary?.result?.[0]?.price) {
          return reject(Error(`Error retrieving info for symbol ${stock}`));
        }
        const { price } = data.quoteSummary.result[0] as { price: Stock };
        return resolve(price);
      })
      .catch(reject);
  });

export const getStocksInfo = (stockList: string[]): Promise<Stock[]> =>
  new Promise((resolve, reject) => {
    if (!stockList) {
      return reject(Error("Stock symbol list required"));
    }
    if (!Array.isArray(stockList)) {
      return reject(Error("Invalid argument type. Array required."));
    }

    const list = [...stockList];
    if (!list.length || list.length < 1) {
      return Promise.resolve([]);
    }

    const promises = list.map(getSingleStockInfo);
    return resolve(Promise.all(promises));
  });

export interface Stock {
  maxAge: number;
  preMarketChangePercent: NumberWrapper;
  preMarketChange: NumberWrapper;
  preMarketTime: number;
  preMarketPrice: NumberWrapper;
  preMarketSource: string;
  postMarketChange: UnknownEmptyObject;
  postMarketPrice: UnknownEmptyObject;
  regularMarketChangePercent: NumberWrapper;
  regularMarketChange: NumberWrapper;
  regularMarketTime: number;
  priceHint: NumberWrapperLongFormat;
  regularMarketPrice: NumberWrapper;
  regularMarketDayHigh: NumberWrapper;
  regularMarketDayLow: NumberWrapper;
  regularMarketVolume: NumberWrapperLongFormat;
  averageDailyVolume10Day: UnknownEmptyObject;
  averageDailyVolume3Month: UnknownEmptyObject;
  regularMarketPreviousClose: NumberWrapper;
  regularMarketSource: string;
  regularMarketOpen: NumberWrapper;
  strikePrice: UnknownEmptyObject;
  openInterest: UnknownEmptyObject;
  exchange: string;
  exchangeName: string;
  exchangeDataDelayedBy: number;
  marketState: string;
  quoteType: string;
  symbol: string;
  underlyingSymbol: null;
  shortName: string;
  longName: string;
  currency: string;
  quoteSourceName: string;
  currencySymbol: string;
  fromCurrency: null;
  toCurrency: null;
  lastMarket: null;
  volume24Hr: UnknownEmptyObject;
  volumeAllCurrencies: UnknownEmptyObject;
  circulatingSupply: UnknownEmptyObject;
  marketCap: NumberWrapperLongFormat;
}

export interface UnknownEmptyObject {}

export interface NumberWrapperLongFormat {
  raw: number;
  fmt: string;
  longFmt: string;
}

export interface NumberWrapper {
  raw: number;
  fmt: string;
}
