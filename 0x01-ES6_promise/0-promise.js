function getResponseFromAPI() {
  let promise = new Promise(function(resolve, reject) {
		resolve("Helloe world")
  });
  return promise;
	
}

export default getResponseFromAPI;
