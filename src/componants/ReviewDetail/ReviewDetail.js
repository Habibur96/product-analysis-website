import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';
import './ReviewDetails.css'

const reviewDetail = ({ reviewe }) => {
    const { name, img, review } = reviewe;
    return (

        <div className='App'>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant=" " src={img} />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>Review: {review}
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    </Card.Text>

                </Card.Body>
            </Card>

        </div >


    );

};
export default reviewDetail;

