import Web3 from "web3/dist/web3.min.js";
import { accountAction, GradBVAAction } from "../Api/action";
import GradBVAArtifact from "../build/contracts/GradBVA.json";
export const loadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    window.alert(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
};
export const loadBlockchainData = async (dispatch) => {
  try {
    const web3 = window.web3;
    if (!web3) {
      alert("Web3 is not initialized!");
      return;
    }

    // Load accounts
    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      alert("No accounts found! Please log in to MetaMask.");
      return;
    }
    dispatch(accountAction(accounts[0]));

    // Get Network ID
    const networkId = await web3.eth.net.getId();
    console.log("Network ID:", networkId);

    // Check if contract exists on this network
    const deployedNetwork = GradBVAArtifact.networks[networkId];
    if (!deployedNetwork) {
      alert("Contract not deployed on this network!");
      return;
    }

    const contractAddress = deployedNetwork.address;
    console.log("Contract Address:", contractAddress);

    const contractInstance = new web3.eth.Contract(GradBVAArtifact.abi, contractAddress);
    dispatch(GradBVAAction(contractInstance));
  } catch (error) {
    console.error("Blockchain Data Loading Error:", error);
    alert("Error loading blockchain data: " + error.message);
  }
};

