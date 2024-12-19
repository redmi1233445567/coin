import React, {useContext} from 'react'
import { GlobalContext } from '../contaxt/GlopalState'
import  Tran  from "./tran"

export default function Inzaction() {
  const {transactions} = useContext(GlobalContext)
  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map(transactions => (<Tran transactions = {transactions} key = {transactions.id}/>))}
        
      </ul>
    </>
  )
}
