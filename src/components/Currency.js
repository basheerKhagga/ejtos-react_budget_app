import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Location = () => {
  const {dispatch } = useContext(AppContext);
    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    
  return (
    <div className='alert alert-success'> Currency 
        <select class="form-select-sm alert alert-success" name="Location" id="Location" onChange={event=>changeLocation(event.target.value)}>
          <option  value="£">Uk(£)</option>
          <option  value="₹">India(₹)</option>
          <option value="€">Europe(€)</option>
          <option value="CAD">Canada(CAD)</option>
        </select>	
      
    </div>

    );
};
export default Location;