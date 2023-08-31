let web3;
// MetaMask 登录
export const author = async () => {
  var web3Provider;
  // 检查是否 web3 实例已存在
  if (window.ethereum) {
    web3Provider = window.ethereum;
    try {
      // MetaMask 请求用户授权
      await window.ethereum.enable();
    } catch (error) {
      // 用户不授权时
      console.error("User denied account access")
    }
  } else if (window.web3) {   // 老版 MetaMask Legacy dapp browsers...
    web3Provider = window.web3.currentProvider;
  } else {
    web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
  }
  web3 = new Web3(web3Provider);
}