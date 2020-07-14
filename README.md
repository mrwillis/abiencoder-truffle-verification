To reproduce:

1. `npm i`
2. export MNEMONIC="[your-mnemonic]"
3. export PROVIDER_URL="[your-provider-url]"
4. `truffle migrate --network rinkeby`
5. API_KEY=[your-api-key] verify-on-etherscan --network rinkeby ./build/contracts/MetaCoin.json --use-fetch=false --verbose --output ./flattened