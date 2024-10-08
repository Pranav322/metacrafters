// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    constructor(address initialOwner) ERC20("MyToken", "MTK") Ownable(initialOwner) {
        transferOwnership(initialOwner);
    }

 
    function mint(address to, uint256 amount) public onlyOwner {
        require(to != address(0), "Mint to zero address not allowed");
        _mint(to, amount);
    }


    function burn(uint256 amount) public {
        require(balanceOf(msg.sender) >= amount, "Burn amount exceeds balance");
        _burn(msg.sender, amount);
    }

   
    function transferMTK(address _to, uint256 _amount) public returns (bool) {
        require(balanceOf(msg.sender) >= _amount, "Transfer Failed: Insufficient balance.");
        _transfer(msg.sender, _to, _amount);
        return true;
    }
}
