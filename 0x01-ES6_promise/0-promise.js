function getResponseFromAPI() {
  const value = true;
  const promise = new Promise(((resolve, reject) => {
    if (value) {
      resolve('Helloe world');
    } else {
      reject(new Error('Oops'));
    }
  }));
  return promise;
}

export default getResponseFromAPI;
