import { createStore } from 'redux';

import transactions from './reducers/transactions';

export default createStore(transactions);