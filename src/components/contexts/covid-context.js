import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const CovidContext = createContext();

const CovidContextProvider = props => {
    // state declaration
    const [all, setAll] = useState([]);
    const [countries, setCountries] = useState([]);
    const [continents, setContinents] = useState([]);
    const [searchCountry, setSearchCountry] = useState('');

    // search country 
    const handleSearch = e => {
        setSearchCountry(e.target.value)
    }

    // date conversion
    const date = new Date(parseInt(all.updated))
    const lastUpdated = date.toString();

    // side effects
        // summary effect
        useEffect(() => {
            async function fetchData() {
                try {
                        const res = await axios.get('https://disease.sh/v2/all');
                        const { data } = res;
                        setAll(data)
                } catch (e) {
                    throw new Error()
                }
            }
            fetchData()
        }, [])

        // countries effect 
        useEffect(() => {
            async function fetchData2() {
                try {
                        const res = await axios.get('https://disease.sh/v2/countries');
                        const { data } = res;
                        setCountries(data)
                } catch (e) {
                    throw new Error()
                }
            }
            fetchData2()
        }, [])

         // continents effect 
         useEffect(() => {
            async function fetchData3() {
                try {
                        const res = await axios.get('https://disease.sh/v2/continents');
                        const { data } = res;
                        console.log(data);
                } catch (e) {
                    throw new Error()
                }
            }
            fetchData3()
        }, [])

    return (
        <CovidContext.Provider value={{ all, countries, handleSearch, searchCountry, lastUpdated }}>
            { props.children }
        </CovidContext.Provider>
    )
}

export default CovidContextProvider;