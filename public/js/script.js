const setFalse = (arr) => arr.fill(false);
// From solution code
const createEmptyDrumArray = () => new Array(16).fill(false);

// Drum Arrays (cant pass into clear because of test script, therefore must declare each array)
let kicks = createEmptyDrumArray();
    snares = createEmptyDrumArray();
    hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
// [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

function clear (arr) { 
    if(invalidInput(arr)) { 
        return;
    }

    arr === 'kicks'
        ? kicks = setFalse(kicks)
    : arr === 'snares'
        ? snares = setFalse(snares)
    : arr === 'hiHats'
        ? hiHats = setFalse(hiHats)
        : rideCymbals = setFalse(rideCymbals);
}

function invert (arr) { 
    if(invalidInput(arr)) { 
        return;
    }
    
    arr === 'kicks'
        ? kicks = swap(kicks)
    : arr === 'snares'
        ? snares = swap(snares)
    : arr === 'hiHats'
        ? hiHats = swap(hiHats)
        : rideCymbals = swap(rideCymbals)

}

function toggleDrum (drum, index) { 
    // Check paramaters
    if(invalidInput(drum) || invalidIndex(index)) { 
        return;
    }

    // Flip values per parameters
    drum === 'kicks'
        ? kicks[index] = flipIndex(kicks, index)
    : drum === 'snares'
        ? snares[index] = flipIndex(snares, index)
    : drum === 'hiHats'
        ? hiHats[index] = flipIndex(hiHats, index)
        : rideCymbals[index] = flipIndex(rideCymbals, index);
}

function getNeighborPads (x, y, size) { 
    let neighbors = [];

    // Check parameters are numbers & if x or y are outside range "size"
    if (notANumber(x) || notANumber(y) || notANumber(size) || size < 1) { 
        return neighbors;
    } else if (!inRange(x, size) || !inRange(y, size)) { 
        return neighbors;
    }

    let xNew, yNew;
    
    // Right 
    xNew = x + 1; // y does not change
    if (inRange(xNew, size)) { 
        neighbors.push([xNew, y]);
    }

    // Left
    xNew = x - 1; // y does not change
    if (inRange(xNew, size)) { 
        neighbors.push([xNew, y]);
    }
    
    // Find above
    yNew = y + 1; // x does not change
    if (inRange(yNew, size)) { 
        neighbors.push([x, yNew]);
    }

    // Down
    yNew = y - 1; // y does not change
    if (inRange(yNew, size)) { 
        neighbors.push([x, yNew]);
    }
    
    return neighbors;
}

// --- HELPER FUNCTIONS --- \\

function swap (arr) { 
    return arr.map(x => !x);
}

function flipIndex (d, i) { 
    return !d[i];
}

function invalidInput (x) { 
    return !(x === 'kicks' || x === 'snares' || x === 'hiHats' || x === 'rideCymbals');
}

function invalidIndex (x) { 
    return (x < 0 || x > 15);
}

function notANumber (n) { 
    return typeof(n) !== 'number';
}

function inRange (n, range) { 
    return (n < range && n >= 0)
}