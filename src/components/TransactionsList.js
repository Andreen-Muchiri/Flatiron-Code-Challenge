import React from "react";
 import Transaction from "./Transaction";

function TransactionsList({ transactions, handleDeleteTransaction }) {
  
  // Fetch using Delete method
  const deleteTransaction = async (transacId) => {
		console.log(transacId);
		try {
      //eslint-disable-next-line
			const res = await fetch("http://localhost:8001/transactions/" + transId, {
				method: "DELETE",
			});
			handleDeleteTransaction(transacId);
		} catch (error) {
			console.log(error);
		}
  };

  //JSX
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
   
        {transactions.map((transaction) => (
					<Transaction
						key={transaction.id}
						transaction={transaction}
						deleteTransaction={deleteTransaction}
					/>
				))}
       
      </tbody>
    </table>
  );
}

export default TransactionsList;
