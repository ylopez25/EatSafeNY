import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function SideSearchBar(props) {

    const handleSearchInput =(e) => {
        props.onChange({...props.value, [e.target.id]: e.target.value})
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
                        <option value="" disabled selected>Borough</option>
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
                    <option value="" disabled selected hidden>Letter Grade</option>
                    <option value="A">A</option> 
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
                <Link to="/results">
                    <Button size="sm" variant="warning" as="input" type="submit" value="Is it safe?" onClick={props.searchRestaurant}/>
                </Link>
            </form>
        </div>
    )
}

export default SideSearchBar