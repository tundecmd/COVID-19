import React, { useContext } from 'react';
import FAQS_DATA from './FAQS_DATA';
import Card from 'react-bootstrap/Card';
import { CovidContext } from '../contexts/covid-context';


const faqs = FAQS_DATA

const FAQS = ({id}) => {
        const { lastUpdated } = useContext(CovidContext);
            const faqList = faqs.map(faq => {
                return(
                    <div>
                        <Card
                            bg="light"
                            key={faq.id}
                            text="dark"
                            className="text-center"
                            style={{margin: "10px"}}
                        >
                            <Card.Body>
                                <Card.Title>{faq.question}</Card.Title>
                                <Card.Text> {faq.answer}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small>Last updated {lastUpdated}</small>
                            </Card.Footer>
                        </Card>
                    </div>
                )
            })

            const randIndex = Math.floor(Math.random() * faqs.length)
            
        return (
            <div>
               {faqList[randIndex]}
            </div>
        )
    }

    
export default FAQS;