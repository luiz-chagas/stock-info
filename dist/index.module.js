var r=require("axios"),e=function(e){return new Promise(function(t,n){return e?"string"!=typeof e?n(Error("Invalid argument type. Required: string. Found: "+typeof e)):r.get("https://query1.finance.yahoo.com/v7/finance/quote?symbols="+e).then(function(r){var o=r.data;return o&&o.quoteResponse&&o.quoteResponse.result&&0!==o.quoteResponse.result.length?t(o.quoteResponse.result[0]):n(new Error("Error retrieving info for symbol "+e))}).catch(function(r){return n(r)}):n(Error("Stock symbol required"))})};module.exports={getSingleStockInfo:e,getStocksInfo:function(r){return new Promise(function(t,n){if(!r)return n(Error("Stock symbol list required"));if(!Array.isArray(r))return n(Error("Invalid argument type. Array required."));var o=[].concat(r);if(!o.length||o.length<1)return Promise.resolve([]);var u=o.map(e);return t(Promise.all(u))})}};
//# sourceMappingURL=index.module.js.map
