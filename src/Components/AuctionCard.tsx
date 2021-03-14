import React from 'react';
import Card from 'react-bootstrap/Card';

interface AuctionCardProps {
  title: string;
  key: string;
}

function AuctionCard(props: AuctionCardProps) {
  const { title, key } = props;
  return (
    <Card bg={'secondary'} text={'white'} style={{ width: '18rem' }} className='mb-2 m-2' key={key}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Cliccami per entrare.</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AuctionCard;
