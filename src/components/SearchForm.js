import React, { useContext } from 'react';
import Form from "react-bootstrap/Form";
import { CovidContext } from './contexts/covid-context';

function SearchForm () {
    const { handleSearch } = useContext(CovidContext);
    return (
        <div>
            <Form>
                <Form.Group controlId="formGroupSearch">
                    <Form.Control 
                        type="search" 
                        placeholder="Type here to Search For Your Country"
                        onChange={handleSearch}
                    />
                </Form.Group>
            </Form>
        </div>
    )
}

export default SearchForm;