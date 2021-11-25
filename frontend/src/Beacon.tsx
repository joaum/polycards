import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";

/*

https://tezostaquito.io/docs/wallet_api/
https://docs.walletbeacon.io/getting-started/first-dapp

*/

// mainnet
// const Tezos = new TezosToolkit("https://mainnet-tezos.giganode.io");
// testnet
const Tezos = new TezosToolkit("https://testnet-tezos.giganode.io");
const wallet = new BeaconWallet({ name: "Beacon Docs Taquito" });

Tezos.setWalletProvider(wallet);

export const requestWalletPermissions = async () => {
  try {
    console.log("Requesting permissions...");
    const permissions = await wallet.client.requestPermissions();
    console.log("Got permissions:", permissions.address);
  } catch (error) {
    console.log("Got error:", error);
  }
}

export const communicateWithServer = (): void => {
  const backendURL: string = "http://localhost:3000/hello";

  window.fetch(backendURL)
        .then(res => res.json())
        .then(data => {
          window.alert(data.message);
        })
        .catch(err => {
          window.alert("Could not communicate with server!");
          console.log(err);
        });
}