import React, {Component} from 'react';
import CardExampleCard from './display/ui';
let web3 = require('./utils/initWeb3')
let lotteryInstance=require('./eth/lotteryInstance')

class App extends Component {

    constructor() {
        super()
        this.state={
            manager:'',
            round:'',
            winner:'',
            playerCounts:0,
            balance:0,
            players:[],
            currentAccount:'',
            isClicked:false,
            isShowButton:'',
        }
    }

    //内置钩子，在页面渲染之后自动执行
    componentDidMount() {
    }

    //内置钩子，在页面渲染之前自动执行
    async componentWillMount() {
        let accounts=await web3.eth.getAccounts()
        let manager = await lotteryInstance.methods.manager().call()
        let round = await lotteryInstance.methods.round().call()
        let winner = await lotteryInstance.methods.winner().call()
        let playerCounts = await lotteryInstance.methods.getPlayersCount().call()
        let players = await lotteryInstance.methods.getPlayers().call()
        //单位是wei，需要转换为ether单位
        let balanceWei = await lotteryInstance.methods.getBalance().call()
        let balance=web3.utils.fromWei(balanceWei,'ether')      //从wei转换为ether单位
        let isShowButton = accounts[0] == manager ? 'inline' : 'none'

        this.setState({
            // manager:manager,
            currentAccount:accounts[0],
            manager,
            round,
            winner,
            playerCounts,
            balance,
            players,
            isShowButton,
        })
    }

    //卸载钩子函数

    play=async ()=>{
        console.log('play button click!')
        //处理真正的逻辑业务
        //1.调用play方法
        //2.赚钱1ether

        this.setState({isClicked: true})

        let accounts=await web3.eth.getAccounts()

        try {
            await lotteryInstance.methods.play().send({
                // from: this.state.currentAccount,
                from: accounts[0],
                value: web3.utils.toWei('1', 'ether'),
                gas: '3000000',
            })
            this.setState({isClicked: false})
            alert('投注成功！')
        } catch (e) {
            alert('投注失败！')
            this.setState({isClicked: false})
            console.log(e)
        }
    }

    kaiJiang=async ()=>{
        console.log('kaiJiang button click!')
        this.setState({isClicked: true})

        let accounts=await web3.eth.getAccounts()

        try {
            await lotteryInstance.methods.kaiJiang().send({
                // from: this.state.currentAccount,
                from: accounts[0],
                // value: web3.utils.toWei('1', 'ether'),
                gas: '3000000',
            })
            this.setState({isClicked: false})

            //显示中奖人
            let winner=await lotteryInstance.methods.winner().call()

            window.location.reload(true)
            alert(`开奖成功!\n中奖人：${winner}`)
        } catch (e) {
            alert('开奖失败！')
            this.setState({isClicked: false})
            console.log(e)
        }
    }

    tuiJiang=async ()=>{
        console.log('tuiJiang button click!')
        this.setState({isClicked: true})
        let accounts=await web3.eth.getAccounts()

        try {
            await lotteryInstance.methods.tuiJiang().send({
                // from: this.state.currentAccount,
                from: accounts[0],
                // value: web3.utils.toWei('1', 'ether'),
                gas: '3000000',
            })
            this.setState({isClicked: false})
            alert('退奖成功！')
        } catch (e) {
            alert('退奖失败！')
            this.setState({isClicked: false})
            console.log(e)
        }
    }

    render(){
        let a='HangTou'
        return(
            <div>
                <CardExampleCard
                    manager={this.state.manager}
                    round={this.state.round}
                    winner={this.state.winner}
                    balance={this.state.balance}
                    players={this.state.players}
                    playersCounts={this.state.playerCounts}
                    currentAccount={this.state.currentAccount}
                    play={this.play}
                    isClicked={this.state.isClicked}
                    tuiJiang={this.tuiJiang}
                    kaiJiang={this.kaiJiang}
                    isShowButton={this.state.isShowButton}
                />
            </div>
        )
    }
}
export default App;

{/*
                <p>manager:{this.state.manager}</p>
                <p>round:{this.state.round}</p>
                <p>winner:{this.state.winner}</p>
                <p>balance:{this.state.balance}</p>
                <p>players:{this.state.players}</p>
                <p>playerCounts:{this.state.playerCounts}</p>
*/}
/*
import React, {Component} from 'react';
import CardExampleCard from './display/ui'

let web3 = require('./utils/initWeb3')
let lotteryInstance = require('./eth/lotteryInstance')

class App extends Component {
    constructor() {
        super()
        this.state = {
            manager: '',
            round: '',
            winner: '',
            playerCounts: 0,
            balance: 0,
            players: [],
            currentAccount: '',
        }


    }

    //内置钩子函数，在页面渲染之后自动调用
    componentDidMount() {

    }

    //内置钩子函数，在页面渲染之前调用
    async componentWillMount() {
        //获取当前的所有地址
        let accounts = await web3.eth.getAccounts()
        let manager = await lotteryInstance.methods.manager().call()
        let round = await lotteryInstance.methods.round().call()
        let winner = await lotteryInstance.methods.winner().call()
        let playerCounts = await lotteryInstance.methods.getPlayersCount().call()

        //单位是wei，我们需要转换为ether单位
        let balanceWei = await lotteryInstance.methods.getBalance().call()
        //从wei单位转换为'ether'单位
        let balance = web3.utils.fromWei(balanceWei, 'ether')

        let players = await lotteryInstance.methods.getPlayers().call()

        this.setState({
            // manager: manager,
            manager,
            round,
            winner,
            playerCounts,
            balance,
            players,
            currentAccount: accounts[0],
        })
    }

    //卸载钩子函数
    // componentDidMount


    render() {

        let a = 'HangTou'

        // props {
        //     manager : manager
        //      a : a
        // }

        return (
            <div>
                <CardExampleCard
                    manager={this.state.manager}
                    round={this.state.round}
                    winner={this.state.winner}
                    balance={this.state.balance}
                    players={this.state.players}
                    playersCounts={this.state.playerCounts}
                    currentAccount={this.state.currentAccount}
                />
            </div>
        );
    }
}

export default App;
*/
