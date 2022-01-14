import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import data from '../src/components/data';

function App() {
  const card = data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div className='wrapper'>
      <div className='container'>
        <Navbar />
        <Hero />
        <div className='card--wrap'>
          {card}
        </div>
      </div>
    </div>
  );
}

export default App;
