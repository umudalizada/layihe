import React from 'react';

const BarHall = () => {
  return (
    <section id='bar'>
      <div className="container">
        <h2>Bar</h2>
      </div>
      <div className="container bar">
        <div className="image-wrapper">
          <img 
            src="https://richmix.org.uk/wp-content/uploads/2021/12/Richmix-Bar-030222-2-1308x872.jpg" 
            alt="Bar" 
          />
          <div className="menu">
            <ul>
              <li>Popcorn - $5.00</li>
              <li>Hotdog - $4.50</li>
              <li>Soda - $2.50</li>
              <li>Candy - $3.00</li>
              <li>Nachos - $6.00</li>
              <li>Ice Cream - $4.00</li>
              <li>French Fries - $3.50</li>
              <li>Beer - $5.50</li>
              <li>Wine - $6.50</li>
              <li>Chocolate - $2.00</li>
              <li>Chicken Wings - $7.00</li>
              <li>Mozzarella Sticks - $5.00</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BarHall;
