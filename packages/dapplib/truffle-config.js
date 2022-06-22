require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food ecology rebel magic minor honey light army genuine'; 
let testAccounts = [
"0xc5a3eefb05a15d767415bef74d74ff39e524daba926402d88452ecc6f7d02948",
"0x91d5218d7d725798dc18ca31a65da078131a0fff6f046be5c97dae25d5fec7c7",
"0xb25508d8ec8b0e2a2ec31cfc772493312331dd521fc7689d5ce3bace3c4552d5",
"0xd2bc5a6cb0377792d3d09ba050e73af89045a70979183a104382d395e9d53e9e",
"0x73c6c88a88d8da5f3ca01fa0d8b3b2de49c408a6fb36a45c9ba8a1845d817f8c",
"0x9f47a475e5a38fd2cecd13a317f3cce2c857cb47ab37106c0444c9ce878005e5",
"0xb11d62391a9efdc05aa7d30792cc62e13698f106939d28f0b9044e7828fd269b",
"0xc190c50f2b9a6a3bffea6f609c6c0152522614c31d65374228eeef78caa33161",
"0xcbd178fdbe79bbf0e1dbc96ad163cdcb74b9f7ebd58cd93b3d0ab2df3914a04a",
"0x385cfad31c315b7268bda2362a5feb4611423bc84c083b3ddd1b528bff2120fd"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


