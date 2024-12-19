import React, {useContext} from 'react'
import { GlobalContext } from '../contaxt/GlopalState'

export default function Balance() {
const {transactions} = useContext(GlobalContext);
const amounts = transactions.map(transactions => transactions.amount);
const total = amounts.reduce((acc, aitm) => (acc += aitm), 0).toFixed(2)

  return (
    <>
      <h4>Balance</h4>
      <h1>${total}</h1>
    </>
  )
}
