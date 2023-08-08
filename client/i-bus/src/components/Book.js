import React, { useState, useEffect } from 'react';
import BusList from './BusList';
import Footer from './Footer';
import Booking from './Booking';
const Book = () => {
  const [buses, setBuses] = useState([]);
  const [noRoutesAvailable, setnoRoutesAvailable] = useState(false);
  // const [uniqueFromValues, setUniqueFromValues] = useState([]); // To store unique 'From' values
  // const [uniqueToValues, setUniqueToValues] = useState([]); // To store unique 'To' values
  useEffect(() => {
    fetch('http://127.0.0.1:5555/buses')
      .then((r) => r.json())
      .then((busesArray) => {
        setBuses(busesArray);
        // Extract unique 'From' and 'To' values from the buses data
        // const fromValues = Array.from(new Set(busesArray.map((bus) => bus.From)));
        // const toValues = Array.from(new Set(busesArray.map((bus) => bus.To)));
        // setUniqueFromValues(fromValues);
        // setUniqueToValues(toValues);
      })
      .catch((error) => console.error('Error fetching buses:', error));
  }, []);
  const [searchFrom, setSearchFrom] = useState('');
  const [searchTo, setSearchTo] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    // Implement the search logic here based on searchFrom, searchTo, and searchDate
    // You can update the 'buses' state based on the search criteria
    // For now, we'll just console.log the search data
    const filteredBuses = buses.filter((bus) => bus.From === searchFrom && bus.To ===searchTo)
    const busesWithIndex = filteredBuses.map((bus, index) => ({ ...bus, index: 0 }));
    const costsArray = busesWithIndex.map((bus) => bus.cost);

    // Log the array of costs
    console.log('Costs:', costsArray);
    setBuses(busesWithIndex);
    setnoRoutesAvailable(filteredBuses.length ===0);
    console.log('From:', searchFrom);
    console.log('To:', searchTo);
    console.log('Date:', searchDate);
  };
  // Define the handleBook function to handle booking a bus
  const handleBook = (busId) => {
    // Implement the booking logic here based on the busId
    // For example, you can update the 'buses' state to mark the bus as booked
    // You can also redirect the user to a booking page or show a modal for booking details
    console.log('Booking Bus:', busId);
  };
  const AllLocations = [
    "Bumala", "Kericho", "Homabay", "Bungoma", "Nairobi",
    "Sirare", "Bondo", "Malaba", "Bomet",
    "Kisumu", "Eldoret", "Kakamega", "Kitale", "Kisii", "Mumias"
  ];
  const locations = AllLocations.sort();

  const filteredBuses = buses.filter((bus) => bus.From === searchFrom && bus.To ===searchTo)
  const busesWithIndex = filteredBuses.map((bus, index) => ({ ...bus, index: 0 }));
  const costsArray = busesWithIndex.map((bus) => bus.cost);
  console.log(costsArray)
  return (
    <>
    <div>
    <div className="bus-booking-page">
      <img className='book-page-image' src='images/book-image-clear.png' alt='book-bus-image'/>
      <div className="search-form">
        <form onSubmit={handleSearch}>
          <select value={searchFrom} onChange={(e) => setSearchFrom(e.target.value)}>
          <option value="">From</option>
           {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
           ))}
          </select>
          <select value={searchTo} onChange={(e) =>setSearchTo(e.target.value)}>
            <option value="">To</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
          <input
            type="date"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            placeholder="DATE"
          />
          <button className='Search' type="submit">SEARCH</button>
        </form>
      </div >
      <div className="list-and-image">
      <div className='bus-and-text'>
        {noRoutesAvailable ? (
          <img style={{width: '900px'}} src='images/Route-unavailable.png' alt='unavailable' />
          ) : (
            <>
      <p style={{fontWeight:'bold', fontSize:'60px', color:'#016DB4', lineHeight:'1.1'}}>PICK A BUS AND <br /> BOOK YOUR<br />SEAT</p>
      <img style={{width: '500px'}} src='images/blue-bus.png' alt='blue bus'  />
      </>
      )}
      </div>
      <BusList buses={buses} handleBook={handleBook} />
      {/* <img className='seatss-image-background' src='images/seats-background-book.png' alt='seats-background'/> */}
      </div>
    </div>
    <Footer />
    </div>
    <div>
      {/* <Booking costsArray={costsArray}/> */}
    </div>
    </>
  );
};
export default Book;