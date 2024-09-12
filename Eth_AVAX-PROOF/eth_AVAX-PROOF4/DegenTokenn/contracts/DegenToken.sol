// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DegenToken is ERC20, Ownable {
    mapping(address => mapping(uint256 => uint256)) private _userCoins;
    uint256[] private _coinDenominations = [1, 2, 5]; 

    constructor() ERC20("Degen", "DGN") {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function burn(uint256 amount) public {
        require(balanceOf(msg.sender) >= amount, "Insufficient balance");
        _burn(msg.sender, amount);
    }

    function redeem(uint256 coinType) public {
        require(coinType < _coinDenominations.length, "Invalid coin type");
        uint256 coinValue = _coinDenominations[coinType];
        require(balanceOf(msg.sender) >= coinValue, "Insufficient balance to redeem");

        _burn(msg.sender, coinValue);
        _userCoins[msg.sender][coinType]++;
    }

    function getCoinBalance(address user, uint256 coinType) public view returns (uint256) {
        require(coinType < _coinDenominations.length, "Invalid coin type");
        return _userCoins[user][coinType];
    }

    function getAvailableCoinTypes() public view returns (uint256[] memory) {
        return _coinDenominations;
    }
}