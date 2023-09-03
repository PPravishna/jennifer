import React from 'react';
import './App.css'; // Make sure to import your CSS file
import { Carousel } from 'react-responsive-carousel';
import image from "./images/Aesop_Bar_Soaps.webp"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image2 from "./images/Aesop_Body_Nurture_Bar_Soap.webp"
import image3 from "./images/Aesop_Body_Polish_Bar_Soap.webp"
import image4 from "./images/Aesop_Body_Refresh_Bar_Soap.webp"

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <p className="para1">  Trained Aesop consultations are available to provide bespoke skin care advise. 
          <a className="AlertBanner_AlertBanner-learnMoreLink__jqUKd" href="/hk/en/r/live-video-consultations/" rel="noopener noreferrer">Book a video consultation</a></p>
        </nav>

        <nav>
          <p className="para2"> Click and&nbsp;Collect is now available at Hong Kong stores. Enjoy complimentary shipping on orders over HK$400
          <a className="AlertBanner_AlertBanner-learnMoreLink__jqUKd" href="/hk/en/r/live-video-consultations/" rel="noopener noreferrer"></a></p>
        </nav>
        
        <div className='container'>
          <li><a href="/">Skin Care</a></li>
          <li><a href="/Body & Hand">Body & Hand</a></li>
          <li><a href="/Hair">Hair</a></li>
          <li><a href="/Fragrance">Fragrance</a></li>
          <li><a href="/Home">Home</a></li>
          <li><a href="/Kits & Travel">Kits & Travel</a></li>
          <li><a href="/Gifts">Gifts</a></li>
          <li><a href="/Read">Read</a></li>
          <li><a href="/Stores">Stores</a></li>
          <li><a href="/Facial Appointments">Facial Appointments</a></li>
          <li> <a href=""> <i className="fa fa-search" aria-hidden="true"></i></a></li>
        </div>


        
        <div style={{marginLeft:"30px"}}>
          <li><a href="/Login">Login</a></li>
          <li><a href="/Cabinet">Cabinet</a></li>
          <li ><a href="/Cart">Cart</a></li>
          </div>
          </header>

      <main className='content'>
       
          <div className='image1'>
          <img className='image11' src={image} alt="" />
          <div className="text-overlay">
          <p>Bar Soaps</p><br />
          <h2>A body care classic, <br />reimagined </h2><br />
          <p>Breathing new life into the humble bar soap <br />are Nurture, Polish and Refresh—three <br />additions to the range, each imparting a <br />unique constellation of benefits. </p>
          </div>
          </div>


        <section>
          <div className='container'>
            <div className='content'>
              <div className='text'>
                <h3>For the body</h3>
                <h2>An expression of care</h2>
                <p> Aesop formulations offer the body deserving care, to cleanse,
            replenish, and nourish skin. Each product is a sensory pleasure to
            use with its own delightful aroma.
            </p>
            <p>
              <a href="/body-care">See all Body Care</a>
            </p>

            <div className='sliders'>
              <Carousel>
              <div>
                      <img src={image2} />
                    </div>
                    <div>
                      <img src={image3} />
                    </div>
                    <div>
                      <img src={image4} />
                    </div>
              </Carousel>
              
            </div>

              </div>

            </div>

          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
