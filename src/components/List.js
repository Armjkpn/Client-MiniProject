import React, { useEffect }  from 'react';
import EditStaff from './EditStaff'
import './Login.css';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'

const List = ()=>{
    const postreduc = useSelector(state => state.postreduc)
    const employees = useSelector(state => state.employee);
    const dispatch = useDispatch();
    const getEmployees = async () => {
        const result = await axios.get(`https://miniproject5735512156.herokuapp.com/api/employees`)
       
        const action = {type:'GET_EMPLOYEES',employee: result.data}
        dispatch(action)
      }
      useEffect(() => {
        getEmployees()
      }, [])
       console.log("data",employees)
      if (!employees || !employees.length)
        return (<h2>No data</h2>)

    return(
            <div className="container">
                    {employees.length != 0 && employees.map((employee, index) => (
                        // postreduc.map((p, index) => (
                        <div key={index} style={{ margin: 20 }} >
                            <EditStaff {...employee} />

                        </div>
                    ))
                }
            </div>
    )


}
export default List