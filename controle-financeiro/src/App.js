import React,{useState, useEffect}from "react";
import GlobalStyle from "./styles/global"
import Header from "./styles/components/Header/Header";
import Resume from "./styles/components/Resume/Resume";
import Form from "./styles/components/Form/Form";

function App() {
const data = localStorage.getItem("transactions")
const [transactiosnLinst, setTransactionList] = useState(data?JSON.parse(data):[])
const [income, setIncome] = useState(0)
const [expense, setExpense] =useState(0)
const [total, setTotal] =useState(0)

useEffect(()=>{
const amountExpense = transactiosnLinst
.filter((item)=>item.expense)
.map((transaction)=> Number(transaction.mount))

const amountIncome = transactiosnLinst
.filter((item)=> !item.expense)
.map((transaction)=>Number(transaction.amount))

const expense = amountExpense.reduce((acc,cur)=> acc + cur, 0).toFixed(2)
const income = amountExpense.reduce((acc,cur)=> acc + cur, 0).toFixed(2)
const total = Math.abs(income - expense).toFixed(2)

setIncome(`R$ ${income}`)
setExpense(`R$ ${expense}`)
setTotal(`${Number(income) < Number(expense)? "-" : ""}R$ ${total}`)
},[transactiosnLinst]);

const handleAdd =(transaction)=>{
  const newArrayTrasactions =[...transactiosnLinst, transaction]
  setTransactionList(newArrayTrasactions)
  localStorage.setItem("transactions", JSON.stringify(newArrayTrasactions))
}


  return (
    <div className="App">
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form handleAdd={handleAdd}/>
      <GlobalStyle />
      
    </div>
  );
}

export default App;
