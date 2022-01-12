import styled from "styled-components";



export const MainCard  = styled.div`
    max-width: 350px;
    max-height: 600px;
    display: flex;
    flex-flow: column nowrap;
    background-color: #15263F;
    padding: 24px 24px 24px 24px;
    border-radius: 15px;
`;

export const ImageContainer = styled.div`
  max-width: 302px;
  max-height: 302px;
  border-radius: 8px;
  overflow: hidden;

  img{
      width: 100%;
      height: 100%;
  }
`;

export const NftTitle = styled.h2`
  /*  */
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 28px;
color: white;
`;

export const NftDescript = styled.p`
  
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 26px;


color: #8BACD9;

`;

export const CryptoWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #2E405A;
  margin-bottom: 10px;
`;

export const CryptoWorth = styled.p`
  
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;

/* Cyan */

color: #00FFF8;
`;

export const TimeLeft = styled.p`
  
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;

/* Soft Blue */

color: #8BACD9;
`;

export const CreatorWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  img{
      max-width: 33px;
      max-height: 33px;
      border: 1px solid white;
      border-radius: 50%;
  }

  p{
        padding-left: 10px;
        
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;

        /* Soft Blue */

        color: #8BACD9;

        span{
        color: #FFFFFF;
        padding-left: 2px;
    }
  }
`;

export const EthereumIcon = styled.img`
  width: 11px;
  height: 18px;
  margin-right: 5px;
`;

export const ClockIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;