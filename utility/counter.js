const counter = (iterable) => {
    // Create a map to store the counts of the iterable
    const counts = new Map();

    // For every iteration, update the count in counts
    for (const element of iterable) {
        counts.set(element, (counts.get(element) || 0) + 1);
    }
    
    return counts;
};

module.exports = counter;