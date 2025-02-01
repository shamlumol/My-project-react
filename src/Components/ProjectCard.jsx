import React from 'react';
import { Card } from 'react-bootstrap';

const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Card className="h-100 text-white">
      <Card.Img variant="top" src={imgUrl} alt={title} />
      <Card.Body style={{backgroundColor:'#4a7b7d'}}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;