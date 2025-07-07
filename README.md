# 🗳️ Blockchain Voting Application

A decentralized voting platform leveraging the **Ethereum blockchain** and **smart contracts**, designed for secure, transparent, and tamper-proof elections. Built with Solidity for smart contract logic and a modern web frontend to allow anyone to participate in or administer blockchain-based elections.

---

## 📌 Features

✅ Voter registration and on-chain verification  
✅ Create elections with multiple candidates  
✅ Secure, immutable vote casting  
✅ Real-time results directly from the blockchain  
✅ Publicly accessible, tamper-proof election records  
✅ User-friendly React web interface  
✅ Role-based permissions: Admin (election creation) & Voter (casting votes)  
✅ Deployable on local blockchain (Ganache) or public testnets (e.g., Goerli)

---

## 🚀 Technologies Used

| Layer          | Technology                 |
| -------------- | -------------------------- |
| Smart Contract | Solidity                   |
| Blockchain     | Ethereum / Ganache / Goerli|
| Frontend       | React, Web3.js or Ethers.js|
| Tools          | Hardhat or Truffle         |
| Wallet         | MetaMask                   |

---

## 📁 Project Structure

```

blockchain-voting-application/
├── contracts/          # Solidity smart contracts
├── scripts/            # Deployment scripts (for Hardhat)
├── src/                # React frontend
│   ├── components/     # React components
│   ├── utils/          # Blockchain interaction utilities
│   └── App.js          # Main React app
├── test/               # Smart contract tests
├── package.json        # Frontend dependencies
├── hardhat.config.js   # Hardhat configuration
└── .env                # Environment variables (Infura, private key)

````

---

## ⚙️ Installation & Setup

> **Prerequisites**  
> - Node.js and npm  
> - MetaMask browser extension  
> - Ganache for local development, or Goerli ETH for testnet deployment  
> - Hardhat globally installed

1️⃣ Clone the repository:

```bash
git clone https://github.com/rajatbalda/blockchain-voting-application.git
cd blockchain-voting-application
````

2️⃣ Install dependencies:

```bash
npm install
```

3️⃣ Compile smart contracts:

```bash
npx hardhat compile
```

---

## 🧪 Running Locally

1️⃣ Start your local Ethereum blockchain with [Ganache](https://trufflesuite.com/ganache/).

2️⃣ Deploy contracts to your local network:

```bash
npx hardhat run scripts/deploy.js --network localhost
```

3️⃣ Update your frontend configuration (e.g., `src/utils/contractConfig.js`) with the deployed contract address.

4️⃣ Start the React development server:

```bash
npm start
```

5️⃣ Connect MetaMask to your local network (Ganache).

6️⃣ Open your browser at [http://localhost:3000](http://localhost:3000).

---

## 🚢 Deployment to Goerli Testnet

You can deploy contracts to Goerli using Hardhat.

---

### ✅ Setup Environment Variables

1. Create a `.env` file in the root directory with:

```env
GOERLI_INFURA_URL=https://goerli.infura.io/v3/YOUR_INFURA_PROJECT_ID
PRIVATE_KEY=your_goerli_account_private_key
```

> ⚠️ **Important**: Keep your `.env` file private; never commit it to your repository.

---

### ✅ Hardhat Configuration for Goerli

Your `hardhat.config.js` should include:

```js
require("@nomiclabs/hardhat-ethers");
require('dotenv').config();

module.exports = {
  networks: {
    goerli: {
      url: process.env.GOERLI_INFURA_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  solidity: "0.8.19",
};
```

---

### ✅ Deploy to Goerli

Compile your contracts:

```bash
npx hardhat compile
```

Deploy to Goerli:

```bash
npx hardhat run scripts/deploy.js --network goerli
```

---

### ✅ Update Frontend with Deployed Address

Update your frontend config (e.g., `src/utils/contractConfig.js`) with your new contract address deployed on Goerli.

---

### ✅ View on Goerli Etherscan

After deploying, you can view your contract and transactions on [Goerli Etherscan](https://goerli.etherscan.io/) by searching your deployed contract address.

---

## 🖥️ Usage Guide

* **Admin**:

  * Create new elections with title and candidate list.
  * Manage elections from the admin interface.

* **Voters**:

  * Register your address to participate.
  * Browse available elections and cast votes.
  * View live results as votes are recorded.

* **Public**:

  * Access election history and results directly from the blockchain.

---

## 🧰 Development Commands

* `npm start` — Start the React app
* `npx hardhat compile` — Compile smart contracts
* `npx hardhat run scripts/deploy.js --network localhost` — Deploy locally
* `npx hardhat run scripts/deploy.js --network goerli` — Deploy to Goerli
* `npx hardhat test` — Run contract tests

---

## 👤 Author

**Rajat Balda**

* [GitHub](https://github.com/rajatbalda)
* [Website](https://rajatbalda.in)
* [LinkedIn](https://linkedin.com/in/rajatbalda)

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## ⭐️ Show Your Support

If you like this project, please ⭐️ it on [GitHub](https://github.com/rajatbalda/blockchain-voting-application) — it helps others find it!

---

## 📧 Contact

For questions or feedback, reach out to [contact@rajatbalda.in](mailto:contact@rajatbalda.in).

---

## ✅ Future Enhancements

* Integrate zero-knowledge proofs for anonymous voting
* Multi-election support with simultaneous voting rounds
* Mobile-friendly UI or native mobile app
* Deploy on Ethereum mainnet for production elections
* Decentralized identity integration for advanced voter verification
* Multi-language support for wider adoption
