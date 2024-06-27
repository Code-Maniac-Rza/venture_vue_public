import '../index.css';
import Demographics from './Demographics';
import Home from './Home';
import KeySector from './KeySector';
import Snapshot from './Snapshot';
import InvestmentOpportunity from './InvestmentOpportunity';

import { useParams } from 'react-router-dom';
import Footer from './Footer';
import { MainNav } from '../MainNav';

function StateComponent() {
  const {stateId} = useParams();
  return (
    <div className="App">
      
      <MainNav stateId={stateId} />
      <Home stateId={stateId} />
      <Snapshot stateId={stateId} />
      <KeySector stateId={stateId} />
      <Demographics stateId={stateId}/>
      <InvestmentOpportunity stateId={stateId}/>
      <Footer stateId={stateId}/>
    </div>
  );
}

export default StateComponent;
