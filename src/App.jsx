import React, { useState } from 'react';
import Daily from './Daily';

const App = () => {

	const [routineInput, setRoutineInput] = useState("");

	const [items, setitems] = useState([]);  

	const addItem = () => {

		if (routineInput.trim() !== "") {
			setitems( ( oldlist ) => {
				return [...oldlist, routineInput];
			});
		}

		setRoutineInput("");
	};
 
	const deleteItem = (id) => {
		setitems ((oldlist) =>{
			return oldlist.filter( (arrElem, index) =>{
				return index !== id;
			});
		});
		console.log("deleted");
	};

	 
	return(
		<>
		  	<div className="main_div">
		   		<div className="center_div">
			 		<br />
					<h1> Daily Routine</h1>
					<br />
					<input 
						type="text" 
						placeholder="Add Your Routine" 
						value={routineInput} 
						onChange={(e) => setRoutineInput(e.target.value)}
					/>
					<button onClick={addItem}> + </button>
					<ol>
						{
							items.map( (itemval, index)  => {
								return <Daily 
											key ={index} 
											id={index}
											text={itemval}
											onRemoveButtonClick={deleteItem}
										/>;
							})
						}  
					</ol>
		   		</div>
		 	</div>
		</>
	);
};

export default App;