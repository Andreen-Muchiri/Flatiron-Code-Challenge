import React , {useState} from "react";


function AddTransactionForm({handleAddTranscation}) {
  const [data, setData] = useState ({
    date: "",
		description: "",
		category: "",
		amount: null,
  });

  const handlePostTransaction = async (event) => {
    event.preventDefault();
    console.log(data);
    try {
      const res = await fetch("http://localhost:8001/transactions",{ 
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: data.date,
        description: data.description,
        category: data.category,
        amount: data.amount,})
      
    });
			const jsonRes = await res.json();
			'handleAddTransaction'(jsonRes);
			setData({
				date: "",
				description: "",
				category: "",
				amount: null,
			});
		} catch (error) {
			console.log(error);
		}
	 };
  const handleChange = (event)=> {
    setData ({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handlePostTransaction}>
        <div className="inline fields">
          <input type="date" name="date" value={data.date} onChange={handleChange}/>
          <input type="text" name="description" placeholder="Description" onChange={handleChange} value={data.description}/>
          <input type="text" name="category" placeholder="Category" onChange={handleChange}  value ={data.category} />
          <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={handleChange} value={data.amount}/>
        </div>
        <button className="ui button" type="submit">
        
          Add Transaction
        </button>
      </form>
    </div>
  );
  }

export default AddTransactionForm;
