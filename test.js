const assert = require('assert');
const si = require('./index');

describe('StockInfo', () => {
  describe('#getSingleStockInfo', () => {
    it('should return stock info for AAPL', async () => {
      const info = await si.getSingleStockInfo('AAPL');
      assert(typeof info === 'object');
      assert(info.regularMarketPrice > 0);
    });
  });

  describe('#getStocksInfo', () => {
    it('should return stock info for AMZN and F', async () => {
      const info = await si.getStocksInfo(['AMZN', 'F']);
      assert(info.length === 2);
      assert(info[0].regularMarketPrice > 0);
      assert(info[1].regularMarketPrice > 0);
    });
  });
});
