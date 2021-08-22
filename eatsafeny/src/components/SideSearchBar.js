import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function SideSearchBar(props) {

    const handleSearchInput =(e) => {
        props.onChange({...props.value, [e.target.id]: e.target.value})
    }

    const SubmitButton = () => {
        if (props.value.borough){
            return (        
                <Link to="/results">
                    <Button size="sm" variant="warning" as="input" type="submit" value="Is it safe?" onClick={props.searchRestaurant} />
                </Link>  
            )
        } else {
            return(
                <Button size="sm" variant="warning" as="input" type="submit" value="Is it safe?" />
            )
        }
    }

    return (
        <div className="sideBar">
            <form> 
                <input 
                    type="text" 
                    id="name" 
                    value={props.value.name} 
                    placeholder="Restaurant name" 
                    onChange={handleSearchInput}
                />

                <select 
                    id="borough"
                    value={props.value.borough} 
                    onChange={handleSearchInput}
                    required
                > 
                        <option value="" disabled>Borough</option>
                        <option value="Bronx">Bronx</option> 
                        <option value="Brooklyn">Brooklyn</option>
                        <option value="Manhattan">Manhattan</option>
                        <option value="Queens">Queens</option>
                        <option value="Staten Island">Staten Island</option>
                </select>

                <select 
                    id="letterGrade"
                    value={props.value.letterGrade} 
                    onChange={handleSearchInput}
                > 
                    <option value="" disabled>Letter Grade</option>
                    <option value="A">A</option> 
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
                <SubmitButton />
            </form>
        </div>
    )
}

export default SideSearchBar