
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = (props) => {
    const { budget, dispatch, expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
  

 

    const handleChange = (e) => {

        if(e.target.value > 20000)
        {
            alert('Cannot exceed 20000');
        }
        else if(e.target.value < totalExpenses)
        {
            alert('Cannot be less than ' + totalExpenses );
        }
        else
        {
            dispatch(
                {
                    type: 'BUDGET_CHANGE',
                    payload: e.target.value,
                }
            );
        }
        
        
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        step="10"
                        
                        min="10"
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={handleChange}
                    >
                        </input>
        </div>
    );
};
export default Budget;