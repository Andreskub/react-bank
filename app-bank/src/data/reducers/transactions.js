/* eslint-disable import/no-anonymous-default-export */
import { ADD_TRANSACTION, DELETE_TRANSACTION } from '../actions/types'

const initalState = {
  loadedData: false,
  isError: false,
  data: []
}

export default function (state = initalState, { type, payload }) {
  switch (type) {
    case ADD_TRANSACTION: {
      const newTransactionId = state.data.reduce((currentMaxId, { id }) => Math.max(currentMaxId, id), 0) + 1;
      return {
        ...state,
        data: [...state.data, { ...payload, id: newTransactionId }]
      }
    } case DELETE_TRANSACTION: {
      return {
        ...state,
        data: state.data.filter(({ id }) => id !== payload.transactionId)
      };
    }
    default:
      return state;
  }
}