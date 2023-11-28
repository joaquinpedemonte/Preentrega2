import React from 'react';
import { Card, CardSubtitle } from 'react-bootstrap';

const ItemListContainer = ({products}) => {
  return (
    <div
        style={{
            display: "flex",
            flexWrap:"wrap",
            width: "100vw",
            justifyContent: "space-around",
        }}    
    >
  {products.map((product) => {
    return (
        <Card 
            key={products.id} 
            style={{ width: "18rem", margin: 20, height: "500px" }}
            >
              <link to={`/Item/${product.id}`}>
              <Card.Img variant="top" src={product.thumbnail} /></link>
              <Card.Body>
                 <Card.Title>{product.title}</Card.Title>
                 <Card.Text>{product.description}</Card.Text>
              </Card.Body>
        </Card>
    );
})}

  </div>
);
};

export default ItemListContainer;