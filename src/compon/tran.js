import React, {useContext} from 'react'
import { GlobalContext } from '../contaxt/GlopalState';

export default function Tran({transactions}) {
  const {deleteTransactions} = useContext(GlobalContext);
  const { test2 } = useContext(GlobalContext)
    const sighn = transactions.amount < 0 ? "-" : "+";
  return (
    <li className= {transactions.amount < 0 ? "minus" : "plus"}>
            {transactions.text} <span>{sighn}${Math.abs(transactions.amount)}</span><button className='delete-btn' onClick={() => {
              deleteTransactions(transactions.id);
              test2(transactions.id)
            }}>x</button>
    </li>
  )
}
