document.addEventListener('DOMContentLoaded', () => {
    const planetInfo = document.getElementById('planet-info');
    
    // Planet information
    const planetData = {
        mercury: {
            name: "Mercury",
            distance: "57.9 million km from Sun",
            period: "88 Earth days",
            fact: "Smallest planet in our solar system and closest to the Sun."
        },
        venus: {
            name: "Venus",
            distance: "108.2 million km from Sun",
            period: "225 Earth days",
            fact: "Hottest planet in our solar system with temperatures up to 471°C."
        },
        earth: {
            name: "Earth",
            distance: "149.6 million km from Sun",
            period: "365.25 days",
            fact: "Only planet known to support life with liquid water covering 71% of its surface."
        },
        mars: {
            name: "Mars",
            distance: "227.9 million km from Sun",
            period: "687 Earth days",
            fact: "Known as the Red Planet due to iron oxide on its surface."
        },
        jupiter: {
            name: "Jupiter",
            distance: "778.5 million km from Sun",
            period: "12 Earth years",
            fact: "Largest planet in our solar system with a giant storm called the Great Red Spot."
        },
        saturn: {
            name: "Saturn",
            distance: "1.4 billion km from Sun",
            period: "29 Earth years",
            fact: "Known for its spectacular ring system made mostly of ice particles."
        },
        uranus: {
            name: "Uranus",
            distance: "2.9 billion km from Sun",
            period: "84 Earth years",
            fact: "Rotates on its side with an axial tilt of 98 degrees."
        },
        neptune: {
            name: "Neptune",
            distance: "4.5 billion km from Sun",
            period: "165 Earth years",
            fact: "Windiest planet with speeds up to 2,100 km/h."
        }
    };
    
    // Planet hover events
    const planets = document.querySelectorAll('.planet');
    planets.forEach(planet => {
        planet.addEventListener('mouseenter', () => {
            const planetClass = planet.className.split(' ')[1]; // Get planet name class
            const data = planetData[planetClass];
            
            if (data) {
                planetInfo.innerHTML = `
                    <h3>${data.name}</h3>
                    <p><strong>Distance from Sun:</strong> ${data.distance}</p>
                    <p><strong>Orbital Period:</strong> ${data.period}</p>
                    <p><strong>Interesting Fact:</strong> ${data.fact}</p>
                `;
            }
        });
        
        planet.addEventListener('mouseleave', () => {
            planetInfo.innerHTML = '<p>Hover over a planet to see information</p>';
        });
    });
});