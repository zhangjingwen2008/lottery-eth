import React from 'react'
import { Card, Icon, Image,Segment, Statistic,Button } from 'semantic-ui-react'

const CardExampleCard = (props) => (
    <Card>
        <Image src='/images/logo.png' wrapped ui={false} />
        <Card.Content>
            <Card.Header>靓仔福彩</Card.Header>
            <Card.Meta>
                <p>管理员地址：{props.manager}</p>
                <p>当前地址：{props.currentAccount}</p>
                <p>上期中奖地址：{props.winner}</p>
            </Card.Meta>
            <Card.Description>
                靓仔文的区块链福彩
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user' />
                {props.playersCounts}人参与
            </a>
        </Card.Content>
        <Card.Content extra>
            <Statistic color='red' >
                <Statistic.Value>{props.balance} ETH</Statistic.Value>
                <Statistic.Label>奖金池</Statistic.Label>
            </Statistic>
        </Card.Content>

        <Card.Content extra>
            <Statistic color='pink' >
                <Statistic.Value>第{props.round}期</Statistic.Value>
                <a href='https://ropsten.etherscan.io/tx/0xd9a2b3d648dbe6bff0600b158ebc736778a41e2259467715a5716f68d7672847'>查看交易历史</a>
            </Statistic>
        </Card.Content>

        <Button animated='fade' color='orange' onClick={props.play} disabled={props.isClicked}>
            <Button.Content visible>投注1ETH</Button.Content>
            <Button.Content hidden>哇塞贼靓仔</Button.Content>
        </Button>
        <Button inverted color='red' style={{display:props.isShowButton}} onClick={props.kaiJiang} disabled={props.isClicked}>
            开奖
        </Button>
        <Button inverted color='orange' style={{display:props.isShowButton}} onClick={props.tuiJiang} disabled={props.isClicked}>
            退奖
        </Button>
    </Card>
)

export default CardExampleCard












/*
import React from 'react'
import {Card, Icon, Image, Statistic} from 'semantic-ui-react'

const CardExampleCard = (props) => (
    <Card>
        <Image src='/images/logo.jpg'/>
        <Card.Content>
            <Card.Header>黑马福利彩票（航头站）</Card.Header>
            <Card.Meta>
                <p>管理员地址: {props.manager}</p>
                <p>当前地址: {props.currentAccount}</p>
            </Card.Meta>
            <Card.Description>每晚八点准时开奖, 不见不散!</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user'/>
                {props.playersCounts} 人参与
            </a>
        </Card.Content>

        <Card.Content extra>
            <Statistic color='red'>
                <Statistic.Value>{props.balance}ETH</Statistic.Value>
                <Statistic.Label>奖金池</Statistic.Label>
            </Statistic>
        </Card.Content>

        <Card.Content extra>
            <Statistic color='blue'>
                <Statistic.Value>第{props.round}期</Statistic.Value>
                <a href='#'>点击我查看交易历史</a>
            </Statistic>
        </Card.Content>

    </Card>
)

export default CardExampleCard
//import  es6
*/
