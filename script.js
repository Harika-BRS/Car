// Define Car class
class Car {
  constructor(color, manufacturer) {
    this.color = color;
    this.manufacturer = manufacturer;
  }
}

// Define RaceCar class inheriting from Car
class RaceCar extends Car {
  constructor(manufacturer, numberOfSeats) {
    super(undefined, manufacturer);
    this.numberOfSeats = numberOfSeats;
  }
}

// Function to handle form submission
document.getElementById("car-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get input values
  const color = document.getElementById("color").value.toLowerCase(); // Convert to lowercase for case-insensitive comparison
  const manufacturer = document.getElementById("manufacturer").value.toLowerCase(); // Convert to lowercase for case-insensitive comparison
  const numberOfSeats = parseInt(document.getElementById("seats").value); // Convert to integer

  // Define the available seat options and corresponding car images
  const seatOptions = [2, 4, 6];
  const carImages = {
    audi: {
      2: "audicar.jpg",
      4: "audicar4.jpg",
      6: "audicar6.png"
    }
  };

  // Valid colors and manufacturers
  const validColors = ["red"];
  const validManufacturers = ["audi"];

  // Variable to track errors
  let errors = [];

  // Check if the selected color is valid
  if (!validColors.includes(color)) {
    errors.push("Please select 'red' as the color.");
  }

  // Check if the selected manufacturer is valid
  if (!validManufacturers.includes(manufacturer)) {
    errors.push("Please select 'Audi' as the manufacturer.");
  }

  // Check if the selected number of seats is valid
  if (!seatOptions.includes(numberOfSeats)) {
    errors.push("Please select 2, 4, or 6 seats.");
  }

  // Display errors if any, otherwise display car details
  const outputElement = document.getElementById("output");
  if (errors.length > 0) {
    // Clear previous output
    outputElement.innerHTML = '';

    // Display errors
    outputElement.innerHTML = "<p>Error(s):</p><ul>";
    errors.forEach(error => {
      outputElement.innerHTML += `<li>${error}</li>`;
    });
    outputElement.innerHTML += "</ul>";
  } else {
    // Clear previous output
    outputElement.innerHTML = '';

    // Instantiate a race car object
    const raceCar1 = new RaceCar(manufacturer, numberOfSeats);

    // Display race car details
    outputElement.innerHTML = `
      <div id="race-car1-details">
        <p>Race Car 1 - Manufacturer: ${raceCar1.manufacturer}, Number of Seats: ${raceCar1.numberOfSeats}, Color: ${color}</p>
        <!-- Dynamically selected car image -->
        <img src="${carImages[manufacturer][numberOfSeats]}" alt="${manufacturer} Car">
      </div>`;
  }
});
