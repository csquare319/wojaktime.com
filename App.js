
import React, { useEffect, useState } from "react";

export default function WojakLanding() {
  const [price, setPrice] = useState(null);
  const [marketCap, setMarketCap] = useState(null);
  const [holders, setHolders] = useState(null);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=wojak&vs_currencies=usd&include_market_cap=true")
      .then((res) => res.json())
      .then((data) => {
        if (data.wojak) {
          setPrice(data.wojak.usd);
          setMarketCap(data.wojak.usd_market_cap);
        }
      });

    fetch("https://api.etherscan.io/api?module=token&action=tokenholdercount&contractaddress=0x754eAb2f552C351E8D4f2fCf2E25ccD2933aA913&apikey=91JBE9ZJYRCDK5A7KE1TJ74SF6SQFH5X3R")
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          setHolders(data.result);
        }
      });
  }, []);

  return (
    <div className="min-h-screen bg-yellow-50 text-center p-6">
      <img src="https://github.com/csquare319/wojaktime.com/blob/main/35271fde-5658-4cee-886e-4f2e971b9d82.png" alt="Wojak Coin" className="mx-auto w-40 rounded-full shadow-lg" />
      <h1 className="text-3xl font-bold mt-4">Wojak Time - $WOJAK</h1>
      <p className="text-gray-700 mt-2 max-w-xl mx-auto">
        The decentralized meme movement for the rest of us. Community owned, fair launched, and unstoppable.
      </p>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Live Token Stats</h2>
        <div className="space-y-2">
          <p>Price: {price ? `$${price.toFixed(8)}` : "Loading..."}</p>
          <p>Market Cap: {marketCap ? `$${(marketCap / 1e6).toFixed(2)}M` : "Loading..."}</p>
          <p>Holders: {holders ? Number(holders).toLocaleString() : "Loading..."}</p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Join the Movement</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://discord.gg/jPNeRqK5" className="bg-black text-white px-4 py-2 rounded">Discord</a>
          <a href="https://t.me/wojaktime" className="bg-black text-white px-4 py-2 rounded">Telegram</a>
          <a href="https://x.com/realwojaktime" className="bg-black text-white px-4 py-2 rounded">X (Twitter)</a>
          <a href="https://www.tiktok.com/@realwojaktime" className="bg-black text-white px-4 py-2 rounded">TikTok</a>
          <a href="https://www.instagram.com/realwojaktime" className="bg-black text-white px-4 py-2 rounded">Instagram</a>
          <a href="https://www.reddit.com/r/wojaktime" className="bg-black text-white px-4 py-2 rounded">Reddit</a>
        </div>
      </div>
    </div>
  );
}
