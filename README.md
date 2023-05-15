# stock-info

The **Stock Info** library retrieves current stock information from Yahoo Finance API.

## Installation

Using npm:

```shell
npm install --save stock-info
```

## Usage

```javascript
import si from "stock-info";
// or
const si = require("stock-info");
```

### getSingleStockInfo

Retrieves information about a single stock symbol

#### Input

A string that represents a stock symbol

#### Output

A Promise that resolves to a stock objects

#### Example

```js
const si = require("stock-info");
si.getSingleStockInfo("GOOG").then(console.log);
//Prints the stock object to console
```

### getStocksInfo

Retrieves information about a list of stock symbols

**Note:** This function will be removed in a future version. Just make your own list of promises using `getSingleStockInfo`.

#### Input

An array of strings where each element is a stock symbol.

#### Output

A Promise that resolves to an array of stock objects

#### Example

```js
const si = require("stock-info");
const stocks = ["AMZN", "NFLIX"];
si.getStocksInfo(stocks).then(console.log);
//Prints an array of stock objects to console
```

## Stock Object

The **stock** object has the following interface:

```ts
interface Stock {
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

interface UnknownEmptyObject {}

interface NumberWrapperLongFormat {
  raw: number;
  fmt: string;
  longFmt: string;
}
```
