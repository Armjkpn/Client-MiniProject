import {createStore, combineReducers} from 'redux'
const initialForm = {
    no: '' ,
    name: '',
    surname: '',
    age: '',
    position: '',
    mail: ' ',
    tel: ' '
}
const formReducer = (state=initialForm,action)=>{
    switch(action.type){
        case 'CHANGE_NO': return {...state,no: action.no}
        case 'CHANGE_NAME': return {...state,name: action.name}
        case 'CHANGE_SURNAME': return {...state,surname: action.surname}
        case 'CHANGE_AGE': return {...state,age: action.age}
        case 'CHANGE_POSITION': return {...state,position: action.position}
        case 'CHANGE_MAIL': return {...state,mail: action.mail}
        case 'CHANGE_TEL': return {...state,tel: action.tel}
        default:return state;
    }
}

const employeeReducer=(state=[],action)=>{
    switch(action.type){
        case 'GET_EMPLOYEES':
            return action.employee
        case 'ADD_EMPLOYEE': 
            return [...state,action.employee]
        case 'DELETE_EMPLOYEE':
             return state.filter(employee => employee.no !== +action.no)
        case 'UPDATE_EMPLOYEE': 
            return state.map(employee => {
             if(+employee.no === +action.no)
             return action.employee;
             else return employee;
            })
        default:
            return state;
    }
}
const reducer = combineReducers({
    employee: employeeReducer,
    form: formReducer
})

export const store = createStore(reducer)