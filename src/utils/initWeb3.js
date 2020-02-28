//1. 引入web3
let Web3 = require('web3') //1.0版本
let web3Provider = window.ethereum;         //使用此方式才可获得当前登录用户的地址
web3Provider.enable();
//2. new 一个web3实例
let web3 = new Web3(web3Provider)
//3. 设置网络

// 使用用户自己的provider来填充web3
// web3.setProvider(window.web3.currentProvider)


/* 新版的方式 */
// var web3Provider;
// if (window.ethereum) {
//     console.log('window.ethereum')
//     web3Provider = window.ethereum;
//     try {
//         // 请求用户授权
//         await window.ethereum.enable();
//     } catch (error) {
//         // 用户不授权时
//         console.error("User denied account access")
//     }
// } else if (window.web3) {   // 老版 MetaMask Legacy dapp browsers...
//     web3Provider = window.web3.currentProvider;
// } else {
//     web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
// }
// var web3js = new Web3(web3Provider);//web3js就是你需要的web3实例
// web3js.eth.getAccounts(function (error, result) {
//     if (!error)
//         console.log(result)//授权成功后result能正常获取到账号了
// });
//export导出，es6语法，default标志默认导出，在使用时，名字可以改变

module.exports = web3
