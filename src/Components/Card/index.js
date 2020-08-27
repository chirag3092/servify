import React, { Suspense, lazy } from 'react';
const ShaadiCard = lazy(() => import('./ShaadiCard'));
const ServifyCard = lazy(() => import('./ServifyCard'));

const getCard = {
  shaadi: () => <ShaadiCard /> ,
  servify: () => <ServifyCard /> ,
};

const Card = () => {
  const COMPANYNAME = process.env.REACT_APP_COMPNANY_NAME; 
  return <Suspense fallback={<div>Loading...</div>}>{getCard[COMPANYNAME]()}</Suspense>
}

export default Card;
