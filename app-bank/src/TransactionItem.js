import React from 'react'
import styled from 'styled-components'
import removeButton from './icons/cancel.svg'

const RemoveButton = styled.button`
    padding-left: 100px;
    align-self: center;
    width: 32px;
    height: 32px;
    background-color: transparent;
    background-image: url('${removeButton}');
    background-size: 100% 100%;
    border: 0;
    color: black;
    font-size: 0;
    vertical-align: middle;
    cursor: pointer;
    outline: none;
`

const size = {
    desktopL: '600px'
}

const device = {
    desktopL: `(min-width: ${size.desktopL})`
}

const StyledLi = ({ className, children }) => (
    <li className={className}> {children} </li>
)

const CustomStyledLi = styled(StyledLi)`
    padding: 20px;
    background: lightblue;
    display:flex;
    @media ${device.desktopL} {
        margin: 20px;
        border: 2px solid #ACA4A3;
        border-radius: 8px;
    }
`

const TransactionItem = ({ transaction, onDeleteTransaction }) =>
(
    <CustomStyledLi>
        <div className='transaction-details'>
            <p>Amount: ${transaction.amount}</p>
            <p>Date: {transaction.date}</p>
            <p>To: {transaction.namereceiver}</p>
            <p>From: {transaction.namesender}</p>
            <p>Salary: {transaction.salary}</p>
        </div>
        <RemoveButton onClick={() => onDeleteTransaction(transaction)} />
    </CustomStyledLi>
)

export default TransactionItem