const btc = document.getElementById("bitcoin");
const eth = document.getElementById("ethereum");
const doge = document.getElementById("dogecoin");

const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd";

fetch(url).then(response => response.json())
.then(data => {
    btc.innerHTML = data.bitcoin.usd;
    eth.innerHTML = data.ethereum.usd;
    doge.innerHTML = data.dogecoin.usd.toFixed(4);
})
.catch(error => {
    console.log("Error: ", error);
});
