function getBalance() {
  // Previous implementation with potential error
  const balance = await web3.eth.getBalance(address);
  return balance;
}

// Corrected implementation
async function getBalance() {
  const balance = await web3.eth.getBalance(address);
  return parseFloat(web3.utils.fromWei(balance, 'ether'));
}