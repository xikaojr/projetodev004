import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Resume from "./components/Resume";
import GlobalStyle from "./styles/global";
import useApi from './hooks/useApi';

const App = () => {
  const { data, loading, error } = useApi('transacoes');
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Formulario handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList} />
      <GlobalStyle />
    </>
  );
}

export default App;