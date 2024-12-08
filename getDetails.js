// Get all elements with the class '.property-pill'
const propertyPills = document.querySelectorAll('.property-pill');

// Initialize an array to store the extracted integer values
let valuesArray = [];

// Loop through the .property-pill elements
propertyPills.forEach(pill => {
    // Extract the text content and remove non-integer characters (e.g., 'K')
    let value = pill.textContent.trim();
    let numericValue = parseInt(value.replace(/[^\d.-]/g, ''), 10); // Remove anything not a number

    // Push the numeric value to the array if it's a valid number
    if (!isNaN(numericValue)) {
        valuesArray.push(numericValue);
    }
});

// Total count of elements
const totalCount = valuesArray.length;

// Calculate the average
const average = valuesArray.reduce((sum, value) => sum + value, 0) / totalCount;

// Calculate the median
valuesArray.sort((a, b) => a - b);  // Sort the array in ascending order
let median;
if (totalCount % 2 === 0) {
    // If the count is even, median is the average of the two middle numbers
    median = (valuesArray[totalCount / 2 - 1] + valuesArray[totalCount / 2]) / 2;
} else {
    // If the count is odd, median is the middle number
    median = valuesArray[Math.floor(totalCount / 2)];
}

// Log the results
console.log("Total count of elements: ", totalCount);
console.log("Average value: ", average);
console.log("Median value: ", median);
