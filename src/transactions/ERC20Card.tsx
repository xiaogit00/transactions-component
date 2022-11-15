import styled from 'styled-components';
// import { CategorizedTransaction } from '../types'


const ERC20Card = (): JSX.Element => {
    return(
        <OuterContainer>
            <FlowBox><img src="https://res.cloudinary.com/dl4murstw/image/upload/v1668447660/down-arrow_vbrncu.png" width="40"/></FlowBox>
            <AddressLogo><img src="https://res.cloudinary.com/dl4murstw/image/upload/v1668448095/sendAsset.2d4fa17c_dpyoy3.svg" width="40"/></AddressLogo>
            <ReceiptBox>
                <div> From</div>
                <div> 0x8906</div>
            </ReceiptBox>
        </OuterContainer>
    )
}

export default ERC20Card

const OuterContainer = styled.div`
    display: flex;
    border: 1px solid green;
    width: 80%;
    margin: auto;
    margin-top: 3em;
    height: 70px;
`
const FlowBox = styled.div`
    border: 1px solid red;
`
const AddressLogo = styled.div`
    border: 1px solid red;
`
const ReceiptBox = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
`



const FromBox = styled.div``

const TokenBox = styled.div``

const TokenLogo = styled.div``

const TokenTextBox = styled.div``

const GasBox = styled.div``