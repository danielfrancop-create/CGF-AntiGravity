// bridge.js - Envío con fetch no-cors (La solución definitiva)
const GAS_URL = 'https://script.google.com/macros/s/AKfycbyWHikeZ4XUmQ9zZTFfwPxIte3T3LnsN1Jpag22xmJh5pb_m5-vdJxDut5p6hKXfJE4/exec';

function callGAS(functionName, ...args) {
  return new Promise((resolve, reject) => {
    const params = new URLSearchParams();
    params.append('action', functionName);
    params.append('args', JSON.stringify(args));

    fetch(GAS_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: params
    })
    .then(() => {
      // Como no podemos leer la respuesta, asumimos éxito.
      // Recargamos los datos después de un breve retraso.
      setTimeout(() => {
        resolve({ success: true });
      }, 1000);
    })
    .catch(err => {
      reject(err);
    });
  });
}

window.callGAS = callGAS;
