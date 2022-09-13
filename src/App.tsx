import { Footer } from 'components/footer/Footer';
import { GetProff } from 'components/get-prof-block/GetProff';
import { Partners } from 'components/partners-block/Partners';
import { ProgramBlock } from 'components/program-block/ProgramBlock';
import { QuickStartBlock } from 'components/quick-start-block/QuickStartBlock';
import { Teachers } from 'components/teachers-block/Teahers';
import { About } from './components/about-block/About';
import { Header } from './components/header/Header';
import { PresentationBlock } from './components/presentation-block/PresentationBlock';
import { OrderLine } from './components/presentation-block/sub-presentation-block/OrderLine';

import './index.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <PresentationBlock/>
      <OrderLine/>
      <About/>
      <QuickStartBlock/>
      <GetProff/>
      <Partners/>
      <ProgramBlock/>
      <Teachers/>
      <Footer/>
    </div>
  );
}

export default App;
