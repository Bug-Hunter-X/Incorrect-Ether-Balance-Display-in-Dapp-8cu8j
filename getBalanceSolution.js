function getBalance() {
  // Corrected implementation
  const balance = await web3.eth.getBalance(address);
  return parseFloat(web3.utils.fromWei(balance, 'ether'));
}

// Example usage:
async function showBalance(){
  const balance = await getBalance(userAddress);
  console.log(`User balance: ${balance} ETH`);
}