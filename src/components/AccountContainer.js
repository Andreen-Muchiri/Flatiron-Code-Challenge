import React, {useState} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
// import Transaction from "./Transaction";

function AccountContainer({handleDeleteTranscation,handleAddTranscation, transactions}) {
 const[search , setSearch]=useState("")
  

  //render Jsx(Search,AddTransactionForm,transactionlist)
return (
    <div>
      <Search search={search} setSearch={setSearch}/>
      <AddTransactionForm 
          handleAddTranscation={handleAddTranscation}
          transactions={transactions} 
          />
       <TransactionsList transaction={transactions}
       handleDeleteTranscation ={handleDeleteTranscation} /> 
    </div>
  );
}

export default AccountContainer;
