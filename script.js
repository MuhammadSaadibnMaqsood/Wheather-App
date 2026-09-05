const API_KEY = "YOUR_API_KEY";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

async function fetchWheather() {
  const city = document.getElementById("input").value;

  const temp = document.getElementById("temp");
  const humidity = document.getElementById("humidity");
  const wind = document.getElementById("wind");
  const title = document.getElementById("title");
  const weatherIcon = document.querySelector(".weatherIcon");

  const res = await fetch(
    `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}`,
  );

  const data = await res.json();

  // Convert Kelvin to Celsius
  const celsius = Math.round(data.main.temp - 273.15);

  temp.innerText = `${celsius}°C`;
  humidity.innerText = `${data.main.humidity}%`;
  wind.innerText = `${data.wind.speed} Km/h`;
  title.innerText = data.name;

  // Get current weather condition
  const weather = data.weather[0].main.toLowerCase();

  // Change SVG according to weather
  if (weather === "clear") {
    weatherIcon.innerHTML = `       <circle cx="50" cy="50" r="22" fill="currentColor" />       <path d="M50 12V24" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>       <path d="M50 76V88" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>       <path d="M12 50H24" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>       <path d="M76 50H88" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>       <path d="M23 23L31 31" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>       <path d="M69 69L77 77" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>       <path d="M77 23L69 31" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>       <path d="M31 69L23 77" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
    `;
  } else if (weather === "clouds") {
    weatherIcon.innerHTML = `       <path
        d="M25 65H72C80 65 85 59 85 52C85 45 79 39 72 39C70 30 62 24 53 24C43 24 35 31 33 41C25 40 18 46 18 54C18 60 21 64 25 65Z"
        fill="currentColor"
      />
    `;
  } else if (weather === "rain" || weather === "drizzle") {
    weatherIcon.innerHTML = `       <path
        d="M25 58H72C80 58 85 52 85 45C85 38 79 32 72 32C70 23 62 18 53 18C43 18 35 25 33 35C25 34 18 40 18 48C18 54 21 57 25 58Z"
        fill="currentColor"
      />       <path d="M32 68L28 80" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>       <path d="M50 68L46 80" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>       <path d="M68 68L64 80" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    `;
  } else if (weather === "thunderstorm") {
    weatherIcon.innerHTML = `       <path
        d="M25 55H72C80 55 85 49 85 42C85 35 79 29 72 29C70 20 62 15 53 15C43 15 35 22 33 32C25 31 18 37 18 45C18 51 21 54 25 55Z"
        fill="currentColor"
      />       <path
        d="M52 55L43 70H51L47 85L62 65H54L61 55H52Z"
        fill="currentColor"
      />
    `;
  } else if (weather === "snow") {
    weatherIcon.innerHTML = `       <path
        d="M25 55H72C80 55 85 49 85 42C85 35 79 29 72 29C70 20 62 15 53 15C43 15 35 22 33 32C25 31 18 37 18 45C18 51 21 54 25 55Z"
        fill="currentColor"
      />       <circle cx="32" cy="72" r="4" fill="currentColor"/>       <circle cx="50" cy="78" r="4" fill="currentColor"/>       <circle cx="68" cy="72" r="4" fill="currentColor"/>
    `;
  } else {
    // Mist / fog / haze
    weatherIcon.innerHTML = `       <path d="M20 40H80" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>       <path d="M15 52H85" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>       <path d="M20 64H80" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
    `;
  }
}
