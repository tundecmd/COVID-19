import React, { useContext } from 'react';
import Columns from 'react-columns';
import { CovidContext } from './contexts/covid-context';
import Card from 'react-bootstrap/Card';
import FAQS from './FAQS/FAQS';


const CountryList = () => {
    
    const { all, countries, searchCountry } = useContext(CovidContext);

  const filteredCountries = countries.filter(country => {
    return searchCountry ? country.country.toLowerCase().includes(searchCountry.toLowerCase()) : ''
  })

  const filteredCountriesArray = filteredCountries.map((data,i) => {
    return (
      <Card
        bg="light"
        key={i}
        text="dark"
        className="text-center"
        style={{margin: "10px"}}
      >
        <Card.Img variant="top" src={data.countryInfo.flag} />
        <Card.Body>
          <Card.Title>{data.country}</Card.Title>
          <Card.Text> Cases {data.cases}</Card.Text>
          <Card.Text> Deaths {data.deaths}</Card.Text>
          <Card.Text> Recovered {data.recovered}</Card.Text>
          <Card.Text> Today's cases {data.todayCases}</Card.Text>
          <Card.Text> Today's death {data.todayDeaths}</Card.Text>
          <Card.Text> Active {data.active}</Card.Text>
          <Card.Text> Critical {data.critical}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small>Last updated lastUpdated</small>
        </Card.Footer>
      </Card>
    )
  })

    const queries = [{
        columns: 2,
        query: 'min-width: 500px'
      }, {
        columns: 3,
        query: 'min-width: 1000px'
      }]
    return (
        <div>
            <Columns queries={queries}>
                { filteredCountriesArray }
            </Columns>
        </div>
    )
}

export default CountryList;