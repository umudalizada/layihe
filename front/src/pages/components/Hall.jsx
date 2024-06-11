import React from 'react';

const Hall = () => {
    return (
        <section id='hall'>
            <div className='container hall'>
                <div className="hallInfo">
                    <h3>Cinema Halls</h3>
                </div>

                <h2>Normal Hall</h2>
                <div className="normalHall">
                    <div className="hallImage">
                        <img src="https://reneedezvous.files.wordpress.com/2010/07/movie-theater-seats.jpg" alt="" />
                        <div className="overlay">Price: 5$ - 10 $</div>
                    </div>
                    <div className="hallImage">
                        <img src="https://img.freepik.com/premium-photo/movie-theater-with-red-seats-sign-that-says-exit_133748-18631.jpg" alt="" />
                        <div className="overlay">Price: 5$ - 10 $</div>
                    </div>
                </div>

                <h2>Vip Hall</h2>
                <div className="normalHall">
                    <div className="hallImage">
                        <img src="https://aradbranding.com/en/uploads/topics/16786195466609.jpg" alt="" />
                        <div className="overlay">Price: 15$ - 30 $</div>
                    </div>
                    <div className="hallImage">
                        <img src="https://ewscripps.brightspotcdn.com/dims4/default/7c50519/2147483647/strip/true/crop/640x360+0+34/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.wcpo.com%2Fphoto%2F2017%2F04%2F10%2FWCPO_movie_theater_seats_1491520210715_57901840_ver1.0_640_480_1491818948260_58038302_ver1.0_640_480.jpg" alt="" />
                        <div className="overlay">Price: 15$ - 30 $</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hall;
