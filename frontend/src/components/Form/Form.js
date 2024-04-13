import React, {useState} from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';

function Form() {
    const {addIncome} = useGlobalContext()
    const [inputState, setInputState] = useState({
        title:'',
        amount:'',
        date:'',
        category:'',
        description:'',

    })
    const {title, amount, date, category, description} = inputState;
    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        addIncome(inputState)
    }
    return (
        <FormStyled onSubmit={handleSubmit}>
            <div className="input-control">
                <input type="text"
                value={title}
                name={'title'}
                placeholder="Salary Title"
                onChange={handleInput('title')}/>
            </div>
            <div className="input-control">
                <input value={amount}
                type="text"
                name={'amount'}
                placeholder="Salary Amount"
                onChange={handleInput('amount')}/>
            </div>
            <div className="input-control">
                <DatePicker
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date)=>{
                        setInputState({...inputState, date: date})
                    }}
                />
            </div>
            <div className="input-control">
            </div>
            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                   <option value="" disable>Select Option</option>
                   <option value="salary" disable>Salary</option> 
                   <option value="freelancing" disable>Freelancing</option> 
                   <option value="investiments" disable>Investiments</option> 
                   <option value="stocks" disable>Stocks</option> 
                   <option value="bitcoin" disable>Bitcoin</option> 
                   <option value="bank" disable>Bank Transfer</option> 
                   <option value="youtube" disable>Youtube</option> 
                   <option value="other" disable>Other</option> 

                </select>
            </div>
            <div className="input-control">
                <textarea name="description" value={description} placeholder='Ass a Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <div className="submit-btn">
                <button>ADD Income</button>
            </div>
        </FormStyled>
)
}

const FormStyled = styled.form`


`;
export default Form