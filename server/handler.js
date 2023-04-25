const express = require("express");
const cors = require("cors");

const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const address = "0x63547a46CB3BbFD24adca2a13D1288F31645D0d6";
const app = express();
const port = 3000;

const url_rama =
  "https://tft-galeria-nft-web3-git-wallets-cristobaljjg.vercel.app";
const url_local = "http://localhost:4200";
const url_main = "https://tft-galeria-nft-web3.vercel.app";

// allow access to Angular app domain
app.use(
  cors({
    origin: url_rama,
    credentials: true,
  })
);

app.get("/api", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "La API está funcionando",
  });
});

app.get("/api/balances", async (req, res) => {
  try {
    const [nativeBalance, tokenBalances] = await Promise.all([
      Moralis.EvmApi.balance.getNativeBalance({
        chain: EvmChain.ETHEREUM,
        address,
      }),
      Moralis.EvmApi.token.getWalletTokenBalances({
        chain: EvmChain.ETHEREUM,
        address,
      }),
    ]);
    res.status(200).json({
      address,
      nativeBalance: nativeBalance.result.balance.ether,
      tokenBalances: tokenBalances.result.map((token) => token.display()),
    });
  } catch (error) {
    console.error(error);
    res.status(500);
    res.json({ error: error.message });
  }
});

const startServer = async () => {
  await Moralis.start({
    apiKey: "ieiEvMMnAQay3lMBQyE9fT05FHXyVcbcZr6H65SLXZaBc9H7iA5gg4US0I6iEiFd",
  });

  app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
  });
};

startServer();