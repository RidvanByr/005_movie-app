import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Categories(props) {

    const { image, category, description, getCategory } = props;
    const categoryGet = () => getCategory(props.category.toLowerCase()); 

    return(
        <div>
            <Card style={{ width: '12rem' }} className="mx-2">
                <Card.Img variant="top" src={image} height="160px"/>
                <Card.Body>
                    <Card.Title>{category}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button onClick={categoryGet} variant="primary">Top 5</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Categories;