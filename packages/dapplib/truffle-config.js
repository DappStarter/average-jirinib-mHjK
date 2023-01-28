require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note predict comic harvest infant flat gate'; 
let testAccounts = [
"0x07118c93de1f31a0bf64f8da820ce97e8f7b4ee2a214fd889e8047533d06bca0",
"0x2beb66d83f86eb5b485eeb3e69bf9297a438c5d8c5393bcae3a96a05880f126a",
"0x800e2656b2012416b03e0c6245c103585eaccee820d7c8d33b4d18807aa59a6c",
"0x8e22378670a296d63b8347d014892f7e6aa8572c71d8d88bd7936f1456facd2f",
"0x8e718cdbfca910b3d7d4429e890214f93c0a02e66eef074c29b7359f277ff54d",
"0xfe4c88f753e2dcc4d509bc56ebf9c41fd00ad4dfb8fd6638406486a1ab1e8002",
"0xe1231cefd73fb554b38616f64d7be94d906353405683610e2234a733caa807f2",
"0xf5c0cb248fa7793112e78c04e5c83e9dc0f1c54ef124c3f7f1b40f43a8eef4ab",
"0x707da8fa2beb437ae9b4f65014a6bfc639bb01dfc78f4e6dfaed467c0bccb499",
"0x3716137ab5121c5b49982f72f5e30977b9c7a0dd5f2a7ea79462976dbfc44890"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

