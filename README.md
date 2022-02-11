# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
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

- 



