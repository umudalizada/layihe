import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container about">
        <div className="aboutLeft">
          <img
            id="animatedImage"
            src="src/assets/images/pngwing.com.png"
            alt=""
          />
        </div>
        <div className="aboutRight">
          <h2>About Us</h2>
          <i>Cinépolis Luxury Cinemas is a leading world-class cinema exhibitor that offers guests MORE THAN A MOVIE ™ Cinépolis Luxury Cinemas feature sophisticated interior décor with stylish lounge-style lobbies, spacious theater auditoriums with fully reclining leather seats, cutting-edge sound and projection technology, in-theater waiter service delivered by stealthy, ninja-like servers to ensure minimal movie disruption, and more. Our expanded gourmet menu showcases chef-driven selections featuring fresh ingredients, with gluten and vegan-friendly options available, and pairs perfectly with our full-service bar service pouring signature cocktails, imported and craft beers, and hand-selected wine offerings. Guests may expect everything from fresh bottomless butter popcorn, unique starters, our world famous Supremas, and popular favorites like Pretzel Sticks, gluten free pizza, flavorful tacos, sandwiches and gourmet burgers — all served at the push of a button from one’s seat.</i>
        </div>
      </div>
    </section>
  );
}

export default About;
