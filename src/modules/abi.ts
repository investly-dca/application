export const ABI = [
  {
    "type": "constructor",
    "inputs": [
      { "name": "_swapRouter", "type": "address", "internalType": "address" },
      { "name": "_executorsRegistry", "type": "address", "internalType": "address" }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "addSubscription",
    "inputs": [
      { "name": "sellToken", "type": "address", "internalType": "address" },
      { "name": "buyToken", "type": "address", "internalType": "address" },
      { "name": "sellAmount", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "uint32", "internalType": "uint32" }],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "depositToken",
    "inputs": [
      { "name": "token", "type": "address", "internalType": "address" },
      { "name": "amount", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "executeSwap",
    "inputs": [
      { "name": "", "type": "string", "internalType": "string" },
      { "name": "_subId", "type": "uint256", "internalType": "uint256" },
      { "name": "", "type": "uint256", "internalType": "uint256" },
      { "name": "", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "isExecutor",
    "inputs": [{ "name": "_addr", "type": "address", "internalType": "address" }],
    "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "poolFee",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint24", "internalType": "uint24" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "removeSubscription",
    "inputs": [{ "name": "subId", "type": "uint32", "internalType": "uint32" }],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "subscriptionId",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint32", "internalType": "uint32" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "subscriptions",
    "inputs": [{ "name": "", "type": "uint32", "internalType": "uint32" }],
    "outputs": [
      { "name": "user", "type": "address", "internalType": "address" },
      { "name": "sellToken", "type": "address", "internalType": "address" },
      { "name": "buyToken", "type": "address", "internalType": "address" },
      { "name": "sellAmount", "type": "uint256", "internalType": "uint256" }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "swapRouter",
    "inputs": [],
    "outputs": [{ "name": "", "type": "address", "internalType": "contract ISwapRouter" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "tokenBalances",
    "inputs": [
      { "name": "", "type": "address", "internalType": "address" },
      { "name": "", "type": "address", "internalType": "address" }
    ],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "withdrawToken",
    "inputs": [
      { "name": "token", "type": "address", "internalType": "address" },
      { "name": "amount", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "BoughtTokens",
    "inputs": [
      { "name": "subId", "type": "uint32", "indexed": true, "internalType": "uint32" },
      { "name": "sellToken", "type": "address", "indexed": true, "internalType": "address" },
      { "name": "buyToken", "type": "address", "indexed": true, "internalType": "address" },
      { "name": "boughtAmount", "type": "uint256", "indexed": false, "internalType": "uint256" }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Deposit",
    "inputs": [
      { "name": "token", "type": "address", "indexed": true, "internalType": "address" },
      { "name": "user", "type": "address", "indexed": true, "internalType": "address" },
      { "name": "amount", "type": "uint256", "indexed": false, "internalType": "uint256" }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SubscriptionAdded",
    "inputs": [
      { "name": "subId", "type": "uint32", "indexed": false, "internalType": "uint32" },
      { "name": "user", "type": "address", "indexed": true, "internalType": "address" },
      { "name": "sellToken", "type": "address", "indexed": false, "internalType": "address" },
      { "name": "buyToken", "type": "address", "indexed": true, "internalType": "address" },
      { "name": "sellAmount", "type": "uint256", "indexed": false, "internalType": "uint256" }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SubscriptionRemoved",
    "inputs": [{ "name": "subId", "type": "uint32", "indexed": true, "internalType": "uint32" }],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Withdraw",
    "inputs": [
      { "name": "token", "type": "address", "indexed": true, "internalType": "address" },
      { "name": "user", "type": "address", "indexed": true, "internalType": "address" },
      { "name": "amount", "type": "uint256", "indexed": false, "internalType": "uint256" }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "CallerUnauthorized",
    "inputs": [{ "name": "caller", "type": "address", "internalType": "address" }]
  }
]