
import React from 'react';
import { Card } from 'react-bootstrap';
import './ReviewDetails.css'


const reviewDetail = ({ reviewe }) => {


    const { name, img, review, ratting } = reviewe;
    return (

        <div className='App'>

            <Card className='card'

                style={{ width: '250px', height: '450px' }}>
                <Card.Img variant=" " style={{ width: '250px', height: '250px' }} src={img} />
                <Card.Body >
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text className='review'><b>Review : </b> {review.slice(0, 100)} <br />
                        <b>Ratting : {ratting}</b>
                    </Card.Text>

                </Card.Body>
            </Card>

        </div >

    )


};

export default reviewDetail;




