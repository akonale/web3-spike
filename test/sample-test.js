const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy();
    await greeter.deployed();
    const [owner1, owner2] = await ethers.getSigners();

    console.log(owner1.address)
    console.log(owner2.address)

    // expect(await greeter.greet(owner1.address)).to.equal("Hello, world!");

    greeter.connect(owner1.address)
    const setGreetingTx = await greeter.setGreeting(owner2.address, 3);
    await setGreetingTx.wait();
    expect(await greeter.greet(owner2.address)).to.equal(3);

    // greeter.connect(owner2.address)
    // const setGreeting2Tx = await greeter.setGreeting("Hola, owner2!");
    // await setGreeting2Tx.wait();
    // expect(await greeter.greet()).to.equal("Hola, owner2!");
  });
});
