// SPDX-License-Identifier: MIT

// write a smart contract that implements the require(), assert() and revert() statements.

pragma solidity 0.8.18;

contract ErrorHandlingContract {
    uint256 public balance;

    constructor() {
        balance = 0;
    }

    function deposit(uint256 amount) external {
        require(amount > 0, "Deposit amount must be greater than zero");
        balance += amount;
    }

    function withdraw(uint256 amount) external {
        require(amount > 0, "Withdrawal amount must be greater than zero");
        
        if (amount > balance) {
            revert("Insufficient balance"); // revert statement
        }
        else {
            balance -= amount;
        }
    }

    function checkBalance() external view returns (uint256) {
        assert(balance >= 0); // assert statement
        return balance;
    }
}