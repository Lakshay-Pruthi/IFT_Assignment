import './App.css'

import Card from './Components/Card'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <h1 className='heading-primary'>Nifty 50 is trading <span style={{ 'borderBottom': '5px solid #1e71ad' }}>below</span> its </h1>
      <h1 className='heading-secondary'><b>50-day moving average 😬</b></h1>
      <div className="container">
        <Navbar />
        <main>
          <div className='card-container'>
            <Card title={'Summary'} graph={1} pointer={1} pointerValue={77} bearish={14} neutral={8} bullish={5} />
            <Card title={'Support & Resistance'} graph={2} pointer={2} pointerValue={12} />
            <Card title={'Moving averages'} graph={3} pointer={3} pointerValue={35} bearish={11} neutral={2} bullish={4} >
              <div className='data-2-container'>
                <p><span className='tag tag-1'>S</span>EMA(5)</p>
                <p>217.5</p>
              </div>
              <div className='data-2-container'>
                <p><span className='tag tag-1'>S</span>EMA(5)</p>
                <p>21732.5</p>
              </div>
              <p className='detail-expander'>View Details ∨</p>
            </Card>
            <Card title={'Oscilators'} graph={4} pointer={4} pointerValue={5} bearish={3} neutral={6} bullish={1} >
              <div className='data-2-container'>
                <p><span className='tag tag-2'>N</span>RSI(140)</p>
                <p>217.5</p>
              </div>
              <div className='data-2-container'>
                <p><span className='tag tag-2'>N</span>EMA(5)</p>
                <p>21732.5</p>
              </div>
              <p className='detail-expander'>View Details ∨</p>
            </Card>
          </div>
        </main>
      </div >
      <Footer />
    </>
  )
}

export default App
