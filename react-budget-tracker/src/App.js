import './App.css';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransForm } from './components/AddTransForm'

function App() {
  return (
    <div >
      <Header />
      <div className= 'container'>
        <Balance /> 
        <IncomeExpenses />
        <TransactionList />
        <AddTransForm />
      </div>
    </div>
  );
}

export default App;
