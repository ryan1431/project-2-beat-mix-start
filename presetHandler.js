// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (req, presetsIndex, newPresetArray) => {
    let response = [];
    
    // Validate parameters 'req' & 'presetsIndex'
    typeof presetsIndex !== 'number' || outOfRange(presetsIndex)
        ? response[0] = 404
        : response[0] = 200;
    if (req !== 'GET' && req !== 'PUT') { 
        response[0] = 400;
    }
    
    //Second index of response
    if(response[0] === 200) { 
        if(req === 'GET') {
            response[1] = presets[presetsIndex];
        } else { 
            response[1] = newPresetArray;
            presets[presetsIndex] = newPresetArray;
        }
    }

    return response;
};

function outOfRange (n) { 
    return n < 0 || n > 3;
}

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;