import React, { useEffect }  from 'react';
import "./Login.css"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Card } from 'antd';

const EditStaff = (props)=>{
    const dispatch = useDispatch();
    const form = useSelector(state => state.form)

    const getEmployees = async () => {
        const result = await axios.get(`https://miniproject5735512156.herokuapp.com/api/employees`)
       
        const action = {type:'GET_EMPLOYEES',employee: result.data}
        dispatch(action)
      }
      useEffect(() => {
        getEmployees()
      }, [])
    const updateEmployee = async () => {
        await axios.put(`https://miniproject5735512156.herokuapp.com/api/employees/${props.no}`,form)
         dispatch(
             {type:'UPDATE_EMPLOYEE',
             no: props.no,
             employee:{...form, no:  props.no}
         })
         getEmployees()
         
       }
    const deleteEmployee = async ()=>{
        await axios.delete(`https://miniproject5735512156.herokuapp.com/api/employees/${props.no}`)
        dispatch({type:'DELETE_EMPLOYEE',no: props.no })
        getEmployees()
      }
         
    return(
        <div  >
            <div  class =' card' >
              <Card title={props.activity} bordered={true} >
                <Col >
                    <Row>
                        <p >Name - Surname : {props.name} {props.surname}</p>
                        <p >Age : {props.age} years old</p>
                        <p >Position : {props.position}</p>
                        <p >E-Mail : {props.mail}</p>
                        <p >Phone number : {props.tel}</p>
                        <p >Status : {props.status}</p>
                    </Row>
                    <button onClick={updateEmployee}>แก้ไขข้อมูล</button>
                    <button onClick={deleteEmployee}>ลบสมาชิก</button>
                </Col>
              </Card>
          </div>
        </div>
    )

}
export default EditStaff