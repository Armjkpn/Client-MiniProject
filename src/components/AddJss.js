import React, { useEffect }  from 'react';
import "./Login.css"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

const AddJss = (props) => {
    const dispatch = useDispatch();
    const form = useSelector(state => state.form)
    const employees = useSelector(state => state.employee)

    const getEmployees = async () => {
        const result = await axios.get(`https://miniproject5735512156.herokuapp.com/api/employees`)
       
        const action = {type:'GET_EMPLOYEES',employee: result.data}
        dispatch(action)
      }
      useEffect(() => {
        getEmployees()
      }, [])

    const addEmployee = async () => {
        await axios.post(`https://miniproject5735512156.herokuapp.com/api/employees`, form)
        dispatch({
            type: 'ADD_EMPLOYEE', employee: {
                no: employees.length > 0 ? employees[employees.length-1].no+1 : 0,
                ...form
            }
        })
    }


    return (
        <div className='container'>
            
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input className='inpt'
                                type="text"
                                onChange={(e) => dispatch({ type: 'CHANGE_NAME', name: e.target.value })}
                            
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Surname</td>
                        <td>
                        <input className='inpt'
                                type="text"
                                onChange={(e) => dispatch({ type: 'CHANGE_SURNAME', surname: e.target.value })}
                        />  
                        </td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>
                        <input className='inpt'
                                type="text"
                                onChange={(e) => dispatch({ type: 'CHANGE_AGE', age: e.target.value })}
                        />   
                        </td>
                    </tr>
                    <tr>
                        <td>Position</td>
                        <td>
                        <input className='inpt'
                                type="text"
                                onChange={(e) => dispatch({ type: 'CHANGE_POSITION', position: e.target.value })}
                        />   
                        </td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>
                        <input className='inpt'
                                type="text"
                                onChange={(e) => dispatch({ type: 'CHANGE_MAIL', mail: e.target.value })}
                        />   
                        </td>
                    </tr>
                    <tr>
                        <td>Phone number</td>
                        <td>
                        <input className='inpt'
                                type="text"
                                onChange={(e) => dispatch({ type: 'CHANGE_TEL', tel: e.target.value })}
                        />   
                        </td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>
                        <input className='inpt'
                                type="text"
                                onChange={(e) => dispatch({ type: 'CHANGE_STATUS', status: e.target.value })}
                        />   
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button className='btn' onClick ={addEmployee}>Add</button>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AddJss
