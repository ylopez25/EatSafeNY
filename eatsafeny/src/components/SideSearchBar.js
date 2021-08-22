import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'

function SideSearchBar() {
    const [searchQueries, setSearchQueries] = useState({
        name: "",
        borough: "",
        letterGrade: ""
    })

    const handleSearchInput = (e) => {
        setSearchQueries({...searchQueries, [e.target.id]: e.target.value})
    }




    return (
        <div className="sideBar">
            <input 
                type="text" 
                id="name" 
                value={searchQueries.name} 
                placeholder="Restaurant name" 
                onChange={handleSearchInput}
            />

            <select 
                id="borough"
                value={searchQueries.borough} 
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
                value={searchQueries.letterGrade}
                onChange={handleSearchInput}
            > 
                <option value="" disabled selected hidden>Letter Grade</option>
                <option value="A">A</option> 
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>
            <Button size="sm" variant="warning" as="input" type="submit" value="Is it safe?"/>


        </div>
    )
}

export default SideSearchBar