import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import FigureOne from './images/figure-1.png';
import FigureTwo from './images/figure2.png';
import FigureTree from './images/figure3.png';

function App() {
  return (
    <div className='wrapper'>
      <div className='container'>
        <Navbar />
        <Hero />
        <div className='card--wrap'>
          <Card
            figure={FigureOne}
            point="5.0"
            rating="(6) ."
            country="USA"
            title="Life lessons with Katie Zaferes"
            price="From $136 /"
            person="person"
          />
          <Card
            figure={FigureTwo}
            point="5.0"
            rating="(30) ."
            country="USA"
            title="Learn wedding photography"
            price="From $125 /"
            person="person"
          />
          <Card
            figure={FigureTree}
            point="4.8"
            rating="(2) ."
            country="USA"
            title="Group Mountain Bikin"
            price="From $50 /"
            person="person"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
