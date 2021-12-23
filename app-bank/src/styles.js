import styled from 'styled-components'
import Background from './img/homeImage.jpg'

import addButton from './icons/person-add.svg'
/****************************************HOME************************************************/

export const Container  = styled.div`
    @media (min-width: 1px) {
        padding: 20px;
    }
    @media (min-width: 669px) {
        padding: 50px;
        padding-top: 30px;
    }
    @media (min-width: 814px) {
        padding: 50px 70px 50px 70px ;
    }
    @media (min-width: 1039px) {
        padding: 50px 100px 50px 100px ;
    } 
` 

export const BgHomeImage = styled.div`
    @media(min-width: 0px ){
        background-position: 65%;
        background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat;
        width: flex;
        background-image: linear-gradient(107.37deg,
        #4A44D9 7.13%, rgba(67,
        255, 156, 0.38) 86.66%), url(${Background});
        min-height: 100vh;
    }
    
    @media (min-width: 768px) {
        background-position: 70%;
        background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat;
        width: flex;
        background-image: linear-gradient(107.37deg,
        #4A44D9 7.13%, rgba(67,
        255, 156, 0.38) 86.66%), url(${Background});
        min-height: 100vh;
    }
    @media (min-width: 1194px){
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat;
        width: flex;
        background-image: linear-gradient(107.37deg,
        #4A44D9 7.13%, rgba(67,
        255, 156, 0.38) 86.66%), url(${Background});
        min-height: 100vh;
    }
`

export const AddButton = styled.button`
  width: 70px;
  height: 40px;
  background: ${props => props.primary ?
  "white":"palevioletered"};
  background-color: lightgoldenrodyellow;
  background-image: url('${addButton}');
  background-size: 100% 100%;
  color: gray;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 30px;
`

export const ButtonWrapper = styled.section`
  padding: 0.5em;
  width: 250px;
  background: lightsteelblue;
  text-align: center;
  border-radius: 10px;
`

export const ButtonWrapperText = styled.a`
  text-align: left;
  vertical-align: middle;
  color: black;
  font-size: 18px;
  padding-right: 10px;
`

export const TitleWrapper = styled.section`
  padding: 2em;
`

export const TitleStyle = styled.div`
  margin: auto;
  text-align: center;
  width: 500px;
  color: #00134d;
  background: lightgoldenrodyellow;
  border-radius: 10px;
  font-size: 50px;
  border: 1px;
`

export const SubtitleStyle = styled.div`
  margin-top: 10px;
  text-align: center;
  width: flex;
  color: lightgoldenrodyellow;
`

/****************************************TRANSACTION ITEM************************************************/

export const ListStyle = styled.div`
  margin-top: 5px;
  padding: 10px;
  background: lightgoldenrodyellow;
  //opacity: 10%;
  border-radius: 10px;
`