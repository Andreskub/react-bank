import React from 'react';
import { Link } from 'react-router-dom';
import TransactionItem from './TransactionItem';

import { connect } from 'react-redux';
import { deleteTransaction } from './data/actions/transaction';

import { BgHomeImage, AddButton, ButtonWrapperText, ButtonWrapper, SubtitleStyle, TitleStyle, TitleWrapper, Container, ListStyle } from './styles';

const Home = ({ transactions, reduxDeleteTransaction }) => {
  const removeTransaction = (transaction) => {
    reduxDeleteTransaction(transaction.id);
  };

  return (
    <BgHomeImage>
      <Container>
        <TitleWrapper>
          <TitleStyle>Transaction System</TitleStyle>
          <SubtitleStyle>Welcome to the new Transaction System of the National Bank of Alberta</SubtitleStyle>
        </TitleWrapper>
        <p></p> 
        <ButtonWrapper primary>
          <ButtonWrapperText>New Transaction</ButtonWrapperText>
          <Link to='/add'><AddButton></AddButton></Link>
        </ButtonWrapper>
        <ListStyle>
          <ol className='transaction-list' style={{ padding: '0px' }}>
            {transactions.map(transaction => (
              <TransactionItem key={transaction.id} onDeleteTransaction={removeTransaction} transaction={transaction} />
            ))}
          </ol>
        </ListStyle>
      </Container>
    </BgHomeImage >
  );
};

const mapStateToProps = (reduxState) => {
  return {
    transactions: reduxState.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    reduxDeleteTransaction: (id) => dispatch(deleteTransaction(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)