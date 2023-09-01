import {Web3} from 'web3'
import store from "@/commen/vuex/store";

// // Connect to the Ethereum network using the HTTP provider
// const ganacheUrl = 'http://localhost:7545';
// const httpProvider = new Web3.providers.HttpProvider(ganacheUrl);
// const web3 = new Web3(httpProvider);
export let web3: Web3;

// MetaMask 登录
export const author = async () => {
  var web3Provider;
  // 检查是否 web3 实例已存在
  if (window.ethereum) {
    web3Provider = window.ethereum;
    try {
      // MetaMask 请求用户授权
      await window.ethereum.enable().then(res => {
        store.commit("insertAddress", res)
      });
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


/**
 * 返回指定地址账户的余额
 *
 * 以太坊中的数字是使用尽可能小的单位来处理的，因为它们是定点精度，在 ETH 中它是 wei。要读取 ETH 值，必须做计算 wei/10^18
 * @param address
 */
export const getBalance = async (address: string) => {
  try {
    let ether;
    await web3.eth.getBalance(address).then(res => {
      ether = web3.utils.fromWei(res, 'ether')
    });
    return ether;
  } catch (e) {
    console.error(e.message)
  }
}
