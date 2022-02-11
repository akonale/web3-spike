const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("FavoriteNumContract", function () {
  it("Should return the new greeting once it's changed", async function () {
    const FavoriteNumContract = await ethers.getContractFactory("FavoriteNum");
    const favoriteNumContract = await FavoriteNumContract.deploy();
    await favoriteNumContract.deployed();
    const [owner1, owner2] = await ethers.getSigners();

    console.log(owner1.address)
    console.log(owner2.address)

    favoriteNumContract.connect(owner1.address)
    const setGreetingTx = await favoriteNumContract.sendFavoriteNum(owner2.address, 3);
    await setGreetingTx.wait();
    expect(await favoriteNumContract.getFavoriteNum(owner2.address)).to.equal(3);
  });
});
