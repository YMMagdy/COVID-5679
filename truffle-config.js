// module.exports = {
//   // See <http://truffleframework.com/docs/advanced/configuration>
//   // for more about customizing your Truffle configuration!
//   networks: {
//     development: {
//       host: "127.0.0.1",
//       port: 7545,
//       network_id: "*" // Match any network id
      
//     },
//     develop: {
//       port: 8545
//     }
//   }
//         };
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: '*', 
    },
  "compilerOptions": {
    "resolveJsonModule": true,
      "esModuleInterop": true
  }
}
  }
