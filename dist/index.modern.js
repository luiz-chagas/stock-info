const e=require("axios"),r=r=>new Promise((o,t)=>r?"string"!=typeof r?t(Error("Invalid argument type. Required: string. Found: "+typeof r)):e.get(`https://query1.finance.yahoo.com/v7/finance/quote?symbols=${r}`).then(e=>{const{data:n}=e;return n&&n.quoteResponse&&n.quoteResponse.result&&0!==n.quoteResponse.result.length?o(n.quoteResponse.result[0]):t(new Error(`Error retrieving info for symbol ${r}`))}).catch(e=>t(e)):t(Error("Stock symbol required")));module.exports={getSingleStockInfo:r,getStocksInfo:e=>new Promise((o,t)=>{if(!e)return t(Error("Stock symbol list required"));if(!Array.isArray(e))return t(Error("Invalid argument type. Array required."));const n=[...e];if(!n.length||n.length<1)return Promise.resolve([]);const s=n.map(r);return o(Promise.all(s))})};
//# sourceMappingURL=index.modern.js.map
