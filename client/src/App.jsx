import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import InventoryAccordion from './components/InventoryAccordion'


import {
  Button
} from 'react-bootstrap';


function App() {

  return (

    <div className="App">

      <div className="bg--img--wrap">
        <img src={'./pexels-rachel-claire-5864757.jpg'} alt={"main back"}/>
      </div>



      <header>
        <h2 className="logo--text">MUSA - Live Inventory</h2>
        <Button variant="info"><i className="fas fa-bars"></i></Button>
      </header>

      <section className="accordion--wrapper">
        <InventoryAccordion />
      </section>
    </div>

  );
}

export default App;
