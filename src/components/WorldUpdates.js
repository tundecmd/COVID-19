import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { CovidContext } from './contexts/covid-context';

const WorldUpdates = () => {
  const { all, countries, lastUpdated } = useContext(CovidContext);

  
    return (
        <div>
        <CardDeck>
        <Card bg="secondary" text="white" className="text-center" style={{margin: "10px",height: "240px"}}>
          <Card.Body>
            <Card.Title>Cases</Card.Title>
            <Card.Text>Cases - { all.cases}</Card.Text>
            <Card.Text>Active Cases - { all.active}</Card.Text>
            <Card.Text>Today's Cases - { all.todayCases}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated { lastUpdated }</small>
          </Card.Footer>
        </Card>
        <Card bg="danger" text="white" className="text-center" style={{margin: "10px", height: "240px"}}>
          <Card.Body>
            <Card.Title>Deaths</Card.Title>
            <Card.Text>Deaths - { all.deaths}</Card.Text>
            <Card.Text>Today's Deaths - { all.todayDeaths }</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated { lastUpdated }</small>
          </Card.Footer>
        </Card>
        <Card bg="success" text="white" className="text-center" style={{margin: "10px", height: "240px"}}>
          <Card.Body>
            <Card.Title>Recovered</Card.Title>
            <Card.Text>Recovered - {all.recovered}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {lastUpdated}</small>
          </Card.Footer>
        </Card>
      </CardDeck>
        </div>
    )
}

export default WorldUpdates
