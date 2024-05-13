// food.js

// Import Axios library
import axios from 'axios';

// Function to fetch data using Axios
async function Foods() {
    try {
        // Make a GET request to fetch data
        const response = await axios.get('https://joerscl.github.io/history2/history2.json');

        // Access the data from the response
        const data = response.data;

        // Return the data
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return []; // Return an empty array in case of an error
    }
}

// Export the Foods function
export { Foods };
