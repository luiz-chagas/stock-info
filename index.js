const axios = require('axios');

const getSingleStockInfo = stock =>
  new Promise((resolve, reject) => {
    if (!stock) {
      return reject(Error('Stock symbol required'));
    }
    if (typeof stock !== 'string') {
      return reject(Error(`Invalid argument type. Required: string. Found: ${typeof stock}`));
    }

    const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${stock}`;

    return axios
      .get(url)
      .then((res) => {
        const { data } = res;
        if (
          !data ||
          !data.quoteResponse ||
          !data.quoteResponse.result ||
          data.quoteResponse.result.length === 0
        ) {
          return reject(new Error(`Error retrieving info for symbol ${stock}`));
        }
        return resolve(data.quoteResponse.result[0]);
      })
      .catch(err => reject(err));
  });

const getStocksInfo = stockList => new Promise((resolve, reject) => {
  if (!stockList) {
    return reject(Error('Stock symbol list required'));
  }
  if (!Array.isArray(stockList)) {
    return reject(Error('Invalid argument type. Array required.'));
  }

  const list = [...stockList];
  if (!list.length || list.length < 1) {
    return Promise.resolve([]);
  }

  const promises = list.map(getSingleStockInfo);
  return resolve(Promise.all(promises));
});

module.exports = {
  getSingleStockInfo,
  getStocksInfo,
};
