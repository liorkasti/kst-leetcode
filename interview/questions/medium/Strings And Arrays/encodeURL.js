/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    const code = Math.random().toString(32).slice(5)
    const tinyUrl = `https://tinyurl.com/${code}` 
    hashMap.set(tinyUrl,longUrl); 
    return tinyUrl
};
/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return hashMap.get(shortUrl)
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

let hashMap = new Map();

console.log(encode("https://leetcode.com/problems/design-tinyurl"));
console.log(decode("ffkvadb"));


class URLShortener {
    constructor() {
      this.hashMap = new Map();
      this.cache = new Map();
    }
  
    encode = (longUrl) => {
      // check if the URL is already in the cache
      if (this.cache.has(longUrl)) {
        // increment hit count and update last accessed timestamp
        let urlData = this.cache.get(longUrl);
        urlData.hitCount++;
        urlData.lastAccessed = Date.now();
        this.cache.set(longUrl, urlData);
        // return the existing shortened URL
        return this.hashMap.get(longUrl);
      }
      // generate a new code for the URL
      const code = Math.random().toString(32).slice(5);
      const tinyUrl = `https://tinyurl.com/${code}`;
      // add the URL and its code to the hash map
      this.hashMap.set(longUrl, tinyUrl);
      // add the URL and its data to the cache
      this.cache.set(longUrl, { tinyUrl, hitCount: 1, lastAccessed: Date.now() });
      // return the new shortened URL
      return tinyUrl;
    }
  
    decode = (shortUrl) => {
      // loop through the hash map to find the original URL
      for (let [longUrl, tinyUrl] of this.hashMap) {
        if (tinyUrl === shortUrl) {
          return longUrl;
        }
      }
      return null;
    }
  
    getHitCount = (longUrl) => {
      if (this.cache.has(longUrl)) {
        return this.cache.get(longUrl).hitCount;
      }
      return null;
    }
  }
  