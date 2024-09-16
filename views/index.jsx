import React from 'react';

function Index({ pirates }) {
    return (
        <>
            {pirates && pirates.length > 0 ? (
                pirates.map((pirate, index) => (
                    <div key={index} style={{ borderRadius: " 25px", textAlign: "center", padding: "1em",margin: "1em",color:"white",backgroundColor:"black" }}>
                        <h3>{pirate.name}</h3>
                        <p>Crew: {pirate.crew}</p>
                        <p>Bounty: ${pirate.bounty.toLocaleString()}</p>
                        <p>Devil Fruit: {pirate.devilFruitType}</p>
                    </div>
                ))
            ) : (
                <p>No pirates available</p>
            )}
            <p>Welcome</p>
            <img src="https://wallpapers.com/images/featured/super-cool-pictures-h943jt67w6kqn4e6.jpg" alt="Cool Wallpaper" />
        </>
    );
}

export default Index;
