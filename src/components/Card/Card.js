import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

const Example = (props) => {
  return (
    <div className="card-project">
      <Card>
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
        </CardBody>
        <img width="100%" src={props.image} alt={props.alt} />
        <CardBody >
          <CardText className="card-text-project">{props.text}</CardText>
          <CardText>{props.technology}</CardText>
          <CardLink href={props.github}>Github</CardLink>
          <CardLink href={props.deployed}>{ props.deployed ? "Deployed Link" : "Site is under repair"}</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;