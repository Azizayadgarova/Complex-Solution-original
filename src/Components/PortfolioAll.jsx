import React from 'react';
import PortfolioMoments from './PortfolioMoments'
import PortfolioEducation from './PortfolioEducation';
import PortfolioLife from './PortfolioLife';
import PortfolioNature from './PortfolioNature'
import PortfolioSector from './PortfolioSector'

const PortfolioAll = () => {
  return (
  <div>
    <PortfolioEducation/>
  <PortfolioLife/>
  <PortfolioMoments/>
 <PortfolioNature/>
 <PortfolioSector/>

 
  </div>
  );
};

export default PortfolioAll;
