To reproduce:

1. `npm i`
2. `export MNEMONIC="[your-mnemonic]"`
3. `export PROVIDER_URL="[your-provider-url]"`
4. `export ETHERSCAN_API_KEY="[your_etherscan_api_key]"`
5. `truffle migrate --network rinkeby`
6. Using `verify-on-etherscan`: `API_KEY=[your-api-key] verify-on-etherscan --network rinkeby ./build/contracts/MetaCoin.json --use-fetch=false --verbose --output ./flattened`
7. Using `truffle-plugin-verify`: `truffle run verify MetaCoin --network rinkeby --debug`