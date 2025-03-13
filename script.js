function deepEquals(a, b) {

	if(a === b) return true;
	
	if(Number.isNan(a) && Number.isNan(b)) return true;

	if(a === null || b === null || a === undefined || b === undefined) return false;

	if(Array.isArray(a) && Array.isArray(b)){

		if(a.length !== b.length) return false;

		return a.every((item,index)=> deepEquals(item,b[index]));
	}

	if(typeof a === "object" && typeof b === "object"){
		const keys1 = Object.keys(a);
		const keys2- Object.keys(b);

		if(keys1.length !== keys2.length) return false;

		return keys1.every((key)=> deepEquals(a[key],b[key]));
	}

	return false;
		
}	

module.exports=deepEquals;
