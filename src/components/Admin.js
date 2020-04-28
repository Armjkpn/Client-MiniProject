import  React from 'react';
import '../App.css';
import EmployeeList from './EmployeeList'
import InputForm from './InputForm'

function Admin(){
    return(
        <div>
        <h1>JSS Network Family</h1>
        <InputForm/>
        <EmployeeList/>  
        </div>
    );
}
export default Admin;