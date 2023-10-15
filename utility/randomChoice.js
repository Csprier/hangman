function randomChoice(array) {
    if (array.length === 0) {
      return undefined; // Return undefined for empty arrays
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

module.exports = randomChoice;
