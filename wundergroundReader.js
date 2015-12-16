var wunderground = require('wunderground')('f25c0b5d11e23ac4');

var query = {
	// Welandergatan, göteborg
    pws  : 'IGOTHENB169'
};

wunderground.conditions(query, function(err, conditions) {
    // current conditions
    if(!err) {
        console.log('In Gothenburg, Sweden, it currently feels like '+ conditions.current_observation.temp_c);
        
    }
});