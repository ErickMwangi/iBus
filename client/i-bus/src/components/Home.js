import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'; 
import Footer from './Footer';

function Home() {
  return (
    <div className='home-page'> 
      {/* Hero Section */}
      <section className='home-background'>
        <div className='home-text animate-fade-in'>
          <div className='title-div'>
            <h1>I-BUS BOOKING</h1>
          </div>
          <div className='why-us-div'>
            <h2 className='why-us-title'>WHY US</h2>
            <ul className='why-us-list'>
              <li>We cover multiple routes</li>
              <li>We are affordable</li>
              <li>We ensure your comfort</li>
              <li>Easy booking and payment</li>
            </ul>
            <h3 className='tagline'>YOUR SAFARI JUST BEGUN</h3>
            <button className='home-book-button'>
              <NavLink className='navLink-book' to='/Book'>
                CLICK HERE TO BOOK
              </NavLink>
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className='middle-page animate-slide-up'>
        <div className='how-it-works'>
          <h1>How it works</h1>
          <p>With I-Bus Booking, attaining a ticket to your destination is a seamless and effortless process.</p>
          <div className='cards-container'>
            {[
              { img: 'images/young-black-woman-aun-tram-station-uses-smartphone_641386-1045.jpg', title: 'Book a bus', text: 'Select your destination and date of travel then book a seat' },
              { img: 'images/online-payment.jpg', title: 'Make Payment', text: 'Follow our hassle free payment process' },
              { img: 'images/enjoy-your-ride.jpg', title: 'Enjoy your ride', text: 'Relax and enjoy your journey with our wide selection of buses' }
            ].map((item, index) => (
              <div className='how-it-works-pic animate-hover' key={index}>
                <img src={item.img} alt={item.title}/>
                <div className='mid-image-text'>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <div className='bus-banner-image animate-fade-in'>
        <img className='home-bus-image-2' src='images/hom-image-bus-2.jpg' alt='bus-banner'/>
      </div>

      {/* Amenities */}
      <section className='icon-section animate-slide-up'>
        <div className='how-it-works'>
          <h1>Some of our amenities and benefits include</h1>
          <div className='cards-container'>
            {[
              { img: 'images/wifi-preview.png', title: 'Wi-Fi Connectivity', text: 'High-speed internet to stay connected during your journey.' },
              { img: 'images/socket.png', title: 'Power Outlets', text: 'Charge your devices on the go.' },
              { img: 'images/24-hours.png', title: 'Book Anytime', text: 'From your home, office, or anywhere.' }
            ].map((item, index) => (
              <div className='how-it-works-pic animate-hover' key={index}>
                <img src={item.img} alt={item.title}/>
                <div className='mid-image-text'>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}
export default Home;
