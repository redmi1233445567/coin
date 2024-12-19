import Header from './compon/Header'
import Balance from './compon/Balance'
import IncomeExpenses from './compon/IncomeExpenses'
import Inzaction from './compon/Inzaction'
import {Add} from './compon/Add'

import { GlobalProvider } from './contaxt/GlopalState'

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
          <Balance />
          <IncomeExpenses />
          <Inzaction />
          <Add />
      </div>
    </GlobalProvider>
  );
}

export default App;
