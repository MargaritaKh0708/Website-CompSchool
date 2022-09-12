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
    </div>
  );
}

export default App;
