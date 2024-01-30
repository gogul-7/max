import CryptoJS from "crypto-js";

var data = `<?xml version=""1.0"" encoding=""UTF-8""?><billerInfoRequest><billerId>OTME00005XXZ43</billerId></billerInfoRequest>`;
var key = "1F7EE91264F479B5033F2EBA14111B94";

data = CryptoJS.enc.Utf8.parse(data);

key = CryptoJS.enc.Utf8.parse(key);

var encrypted = CryptoJS.AES.encrypt(data, key, {
  mode: CryptoJS.mode.ECB,
  padding: CryptoJS.pad.ZeroPadding,
});
encrypted = encrypted.ciphertext.toString(CryptoJS.enc.Hex);
console.log("encrypted", encrypted);
