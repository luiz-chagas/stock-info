import { getSingleStockInfo, getStocksInfo } from "./dist/index.cjs";
import assert from "node:assert";

describe("StockInfo", () => {
  describe("#getSingleStockInfo", () => {
    it("should return stock info for AAPL", async () => {
      const info = await getSingleStockInfo("AAPL");
      assert(typeof info === "object");
      assert(info.regularMarketPrice.raw > 0);
    });
  });

  describe("#getStocksInfo", () => {
    it("should return stock info for AMZN and F", async () => {
      const info = await getStocksInfo(["AMZN", "F"]);
      assert(info.length === 2);
      assert(info[0].regularMarketPrice.raw > 0);
      assert(info[1].regularMarketPrice.raw > 0);
    });
  });
});
