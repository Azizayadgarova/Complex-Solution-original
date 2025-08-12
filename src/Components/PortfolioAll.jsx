import React from 'react';
import PortfolioMoments from './PortfolioMoments'
import PortfolioEducation from './PortfolioEducation';
import PortfolioLife from './PortfolioLife';
import PortfolioNature from './PortfolioNature'
import PortfolioSector from './PortfolioSector'
import PortfolioTravel from './PortfolioTravel';

const PortfolioAll = () => {
  return (
  <div>
    <PortfolioEducation/>
  <PortfolioLife/>
  <PortfolioMoments/>
 <PortfolioNature/>
 <PortfolioSector/>
<PortfolioTravel/>
 
  </div>
  );
};

export default PortfolioAll;
