# stock-info

The **Stock Info** library is exported as a CommonJS module.
It retrieves current stock information from Yahoo Finance API.

## Installation

Using npm:
```shell
$ npm install --save stock-info
```

## Usage

### getSingleStockInfo
Retrieves information about a single stock symbol
#### Input
A string that represents a stock symbol
#### Output
A Promise that resolves to a stock objects
#### Example
```js
const si = require('stock-info');
si.getSingleStockInfo('GOOG').then(console.log);
//Outputs the result
```
  
### getStocksInfo
Retrieves information about a list of stock symbols
#### Input
An array of strings where each element is a stock symbol.
#### Output
A Promise that resolves to an array of stock objects
#### Example
```js
const si = require('stock-info');
const stocks = ['AMZN', 'NFLIX'];
si.getStocksInfo(stocks).then(console.log);
//Outputs the result
```

## Stock Object

The **stock** object has the following shape:

```
language: string;
region: string;
quoteType: string;
quoteSourceName: string;
triggerable: boolean;
currency: string;
sourceInterval: number;
exchangeDataDelayedBy: number;
postMarketChangePercent: number;
postMarketTime: number;
postMarketPrice: number;
postMarketChange: number;
regularMarketChange: number;
regularMarketChangePercent: number;
regularMarketTime: number;
sharesOutstanding: number;
bookValue: number;
fiftyDayAverage: number;
fiftyDayAverageChange: number;
fiftyDayAverageChangePercent: number;
twoHundredDayAverage: number;
twoHundredDayAverageChange: number;
twoHundredDayAverageChangePercent: number;
marketCap: number;
forwardPE: number;
priceToBook: number;
tradeable: boolean;
priceHint: number;
firstTradeDateMilliseconds: number;
regularMarketPrice: number;
regularMarketDayHigh: number;
regularMarketDayRange: string;
regularMarketDayLow: number;
regularMarketVolume: number;
regularMarketPreviousClose: number;
bid: number;
ask: number;
bidSize: number;
askSize: number;
fullExchangeName: string;
financialCurrency: string;
regularMarketOpen: number;
averageDailyVolume3Month: number;
averageDailyVolume10Day: number;
fiftyTwoWeekLowChange: number;
fiftyTwoWeekLowChangePercent: number;
fiftyTwoWeekRange: string;
fiftyTwoWeekHighChange: number;
fiftyTwoWeekHighChangePercent: number;
fiftyTwoWeekLow: number;
fiftyTwoWeekHigh: number;
trailingPE: number;
epsTrailingTwelveMonths: number;
epsForward: number;
exchange: string;
shortName: string;
longName: string;
messageBoardId: string;
exchangeTimezoneName: string;
exchangeTimezoneShortName: string;
gmtOffSetMilliseconds: number;
market: string;
esgPopulated: boolean;
marketState: string;
displayName: string;
symbol: string;
```

Example:

```
regularMarketPrice: 1065.545,  
symbol: 'GOOG'  
longName: 'Alphabet Inc.',  
language: 'en-US',  
quoteType: 'EQUITY',  
quoteSourceName: 'Nasdaq Real Time Price',  
currency: 'USD',  
regularMarketTime: 1527603620,  
regularMarketChange: -10.11499,  
regularMarketOpen: 1064.89,  
regularMarketDayHigh: 1072.99,  
regularMarketDayLow: 1065,  
regularMarketVolume: 322473,  
trailingPE: 59.210102,  
epsTrailingTwelveMonths: 17.996,  
epsForward: 47.32,  
market: 'us_market',  
bidSize: 8,  
askSize: 13,  
messageBoardId: 'finmb_29096',  
fullExchangeName: 'NasdaqGS',  
financialCurrency: 'USD',  
sharesOutstanding: 348952000,  
bookValue: 219.496,  
fiftyDayAverage: 1056.5917,  
fiftyDayAverageChange: 8.953369,  
fiftyDayAverageChangePercent: 0.008473821,  
twoHundredDayAverage: 1071.8778,  
twoHundredDayAverageChange: -6.3327637,  
twoHundredDayAverageChangePercent: -0.0059081023,  
marketCap: 741920931840,  
forwardPE: 22.517859,  
priceToBook: 4.854508,  
sourceInterval: 15,  
exchangeTimezoneName: 'America/New_York',  
exchangeTimezoneShortName: 'EDT',  
gmtOffSetMilliseconds: -14400000,  
exchangeDataDelayedBy: 0,  
marketState: 'REGULAR',  
exchange: 'NMS',  
priceHint: 2,  
**shortName**: 'Alphabet Inc.',  
regularMarketChangePercent: -0.94035196,  
regularMarketDayRange: '1065.0 - 1072.99',  
regularMarketPreviousClose: 1075.66,  
bid: 1068.35,  
ask: 1069,  
averageDailyVolume3Month: 1849285,  
averageDailyVolume10Day: 957300,  
fiftyTwoWeekLowChange: 170.75507,  
fiftyTwoWeekLowChangePercent: 0.19083257,  
fiftyTwoWeekRange: '894.79 - 1186.89',  
fiftyTwoWeekHighChange: -121.34497,  
fiftyTwoWeekHighChangePercent: -0.10223775,  
fiftyTwoWeekLow: 894.79,  
fiftyTwoWeekHigh: 1186.89,  
esgPopulated: false,  
tradeable: true,  
```