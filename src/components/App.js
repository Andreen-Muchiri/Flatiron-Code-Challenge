import React , {useState , useEffect} from "react";
import AccountContainer from "./AccountContainer";



function App() {
  const[transactions, setTransactions] = useState ([])
  
 //fetch data on transactions
  useEffect(() =>{
          fetch("http://localhost:8001/transactions")
          .then(resp => resp.json())
          .then(transc => setTransactions(transc));
 },[setTransactions]);



//create a var handleAddTransaction
   const handleAddTransaction = (transaction) => {
	 	setTransactions([...transactions, transaction]);
	 };

//Create a var handleDeleteTransaction
	const handleDeleteTransaction = (transacId) => {
		const filterTransactions = transactions.filter(
			(transac) => transac.id !== transacId
		);

		setTransactions(filterTransactions);
	};
	
  //Jsx
   return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer 
       handleDeleteTranscation={handleDeleteTransaction}
       handleAddTranscation={handleAddTransaction}
       transactions={transactions} 
      />
    </div>
  );
}

export default App;
