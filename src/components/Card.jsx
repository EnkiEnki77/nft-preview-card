import React from 'react'
import {MainCard, NftTitle, NftDescript, ImageContainer, CryptoWorth, CreatorWrap, TimeLeft, CryptoWrap, EthereumIcon, ClockIcon, Overlay, ViewIcon} from './Card.styles'
import NftImage from '../images/image-equilibrium.jpg'
import CreateorImage from '../images/image-avatar.png'
import Ethereum from '../images/icon-ethereum.svg'
import Clock from '../images/icon-clock.svg'
import views from '../images/icon-view.svg'
import { useState } from 'react'

const Card = () => {
    const [display, setDisplay] = useState('none')

    console.log(display)

    
    return (
        <MainCard>
            <ImageContainer onMouseEnter={() => {setDisplay('flex') }} onMouseLeave={() => {setDisplay('none')}}>
                <img src={NftImage} alt='nft'/>
                <Overlay display = {display}><ViewIcon src={views} alt='views'/></Overlay>
                
            </ImageContainer>
            <NftTitle>Equilibrium #3429 </NftTitle>
            <NftDescript>Our Equilibrium collection promotes balance and calm.</NftDescript>
            <CryptoWrap>
                <CryptoWorth> <EthereumIcon src={Ethereum}/> 0.041 ETH </CryptoWorth>
                <TimeLeft> <ClockIcon src={Clock}/> 3 days left</TimeLeft>
            </CryptoWrap>
            <CreatorWrap>
                <div>
                    <img src={CreateorImage} alt='creator'/>
                </div>
                <p>Creation of <span>Jules Wyvern</span></p>
            </CreatorWrap>
        </MainCard>
    )
}

export default Card
