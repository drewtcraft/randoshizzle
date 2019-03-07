function retrieveObjectsFromArray (arr, acc = []) {
	arr.forEach(el => {
		if (_.isObject(el) && !_.isArray(el)) {
			acc.push(el);
		}
		else if (_.isArray(el)) {
			retrieveObjectsFromArray(el, acc);
		}
	});
	return acc;
}

function propertyFinder (blob, property, acc = []) {

	if (blob[`${property}`]) {
		acc.push(blob[`${property}`]);
	}

	let nestedObjects = _.values(blob).filter(val => {
		return typeof val === 'object';
	});

	nestedObjects = retrieveObjectsFromArray(nestedObjects);

	if (!nestedObjects.length) return acc;
	else {
		let nextLayer = {};
		nestedObjects.forEach(o => {
			nextLayer = _.assign(nextLayer, o);
		});

		return propertyFinder(nextLayer, property, acc);
	}
}
