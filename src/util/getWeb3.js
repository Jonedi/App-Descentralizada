import Web3 from 'web3'

/* 
* 1. Comprobar que web3 esté inyectado(mist/metamask)
* 2. If metamask/mist crea una nueva instancia web3, transmitir el resultado
* 3. Obtener NetworkId: ahora podemos verificar que el usuario est{e conectado a la red correcta
* 4. Obtener la cuenta de usuario de metamask
* 5. Obtener el resultado del usuario
*/

let getWeb3 = new Promise(function (resolve, reject) {
    // Obtener la inyecti{on web3 (mist/metamask)
    var web3js = window.web3
    if (typeof web3js !== 'undefined') {
        var web3 = new Web3(web3js.currentProvider)
        resolve({
            injectedWeb3: web3.isConnected(),
            web3 () {
                return web3
            }
        })
        
    } else {
        reject(new Error('No se puede conectar a MetaMask'))
    }
})
.then(result => {
    return new Promise(function (resolve, reject){
        // Recuperar Id de red
        result.web3().version.getNetwork((err, networkId) => {
            if (err) {
                // Si no podemos encontrar una nerworkId mantendrá un resultado igual y rechazaría la promesa
                reject(new Error('No se puede recuperar el ID de la red'))
            } else {
                // Asignar la propiedad networkId a nuestro resultado y resolver la promesa
                result = Object.assign({}, result, {networkId})
                resolve(result)
            }
        })
    })
})
.then(result => {
    return new Promise(function (resolve, reject) {
        // Recuperar la base de monedas
        result.web3().eth.getCoinbase((err, coinbase) => {
            if(err) {
                reject(new Error('No se puede recuperar la base de monedas'))
            } else {
                result = Object.assign({},result, { coinbase})
                resolve(result)
            }
        })
    })
})
.then(result => {
    return new Promise(function (resolve, reject) {
        // Recuperar balance por base de monedas
        result.web3().eth.getBalance(result.coinbase, (err, balance) => {
            if (err) {
                reject(new Error('No se puede recuperar el balance por direccion' + result.coinbase))
            } else {
                result = Object.assign({}, result, { balance })
                resolve(result)
            }
        })
    })
})
export default getWeb3