# Contracts

## Send favourite number contract
Sends arbitrary number from one account to another. Steps:
- npx hardhat compile # Compiles contract
- npx hardhat node # Starts local eth node 
- npx hardhat run scripts/deploy.js (Uses network defined in hardhat.config.js. 
    Use `ropsten` network to use alchemy client with ropsten test network. Returns contract address)
- npx hardhat sendFavNum # Runs contract. todo: remove hardcoding of contract address and stuff

# Notes

## Basic hardhat commands

```shell
npx hardhat <task defined in hardhat.config.js>
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/deploy.js
npx hardhat help
```


## Compile smart contracts from ethereum  

docker run -v \
    /Users/akonale/ashwin/web3/contracts:/contracts \
    ethereum/solc:stable \
    -o /contracts/output \
    --abi --bin \
    /contracts/HelloWorld.sol
    
## Hardhat 

#### Compile contract
npx hardhat compile

#### Run hardhat node (switch off proxy)
npx hardhat node
(Configure localhost network in hardhat.config.js)

#### Run scripts
- Deploy contract: 
npx hardhat run scripts/deploy.js --network localhost 



