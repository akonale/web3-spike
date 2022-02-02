//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract FavoriteNum {
    mapping (address => uint) public favNums;

    function getFavoriteNum(address owner) public view returns (uint) {
        return favNums[owner];
    }

    function sendFavoriteNum(address owner, uint _favNum) public {
        console.log("Sending favNum of '%s' to '%s' from address '%s'", owner, _favNum, msg.sender);
        favNums[owner] = _favNum;
    }
}
