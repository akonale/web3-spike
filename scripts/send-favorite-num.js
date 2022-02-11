
function sendFavouriteNum() {
    return async (taskArgs, hre) => {
        const FavoriteNumContract = await hre.ethers.getContractFactory("FavoriteNum");

        const contractAddr = "0x850ec3780cedfdb116e38b009d0bf7a1ef1b8b38";
        const contract = await FavoriteNumContract.attach(
            contractAddr // The deployed contract address
        );

        // Now you can call functions of the contract
        const toAddress = "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E";
        const sendFavNumTxn = await contract.sendFavoriteNum(toAddress, 3);
        console.log("Waiting till txn is confirmed")
        await sendFavNumTxn.wait();
        const newVar = await contract.getFavoriteNum(toAddress);
        console.log(newVar)
    };
}

module.exports = sendFavouriteNum

// async function main() {
//     // Hardhat always runs the compile task when running scripts with its command
//     // line interface.
//     //
//     // If this script is run directly using `node` you may want to call compile
//     // manually to make sure everything is compiled
//     // await hre.run('compile');
//
//     // We get the contract to deploy
//     const FavoriteNumContract = await hre.ethers.getContractFactory("FavoriteNum");
//
//     const contractAddr = "0x161d29E1bA822EbCeF1cB151D7970cBb050Ef050";
//     const contract = await FavoriteNumContract.attach(
//         contractAddr // The deployed contract address
//     );
//
// // Now you can call functions of the contract
//     const toAddress = "0x2298d95d5c4Cbba309B53322147a9302A75282FF";
//     const sendFavNumTxn = await contract.sendFavoriteNum(toAddress, 3);
//     console.log("Waiting till txn is confirmed")
//     await sendFavNumTxn.wait();
//     const newVar = await contract.getFavoriteNum(toAddress);
//     console.log(newVar)
// }

// main()
//     .then(() => process.exit(0))
//     .catch((error) => {
//         console.error(error);
//         process.exit(1);
//     });
