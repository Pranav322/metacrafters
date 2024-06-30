# ETH_AVAX-PROOF-INTERMEDIATE-EVM_COURSE

## Project Overview
This project implements an advanced smart contract using Solidity that demonstrates the use of `require()`, `assert()`, and `revert()` statements. The contract allows only the owner to deposit and withdraw funds.

## Functionality
- `deposit()`: Allows users to deposit funds into their balance. Uses `require()` to ensure the deposit amount is greater than zero.
- `withdraw(uint256 amount)`: Allows only the owner to withdraw funds. Uses `require()` to ensure the withdraw amount is greater than zero and that the user has sufficient balance. Uses `assert()` to validate the internal state.
- `resetBalance()`: Allows only the owner to reset their balance. Uses `revert()` to ensure only the owner can reset the balance.
- `getBalance()`: Returns the balance of the calling user.

## How to Use
1. Deploy the contract on an Ethereum-compatible blockchain.
2. Call the `deposit()` function with a positive value to increase the balance.
3. Call the `withdraw()` function to withdraw funds (only the owner can do this).
4. Call the `resetBalance()` function to reset the balance (only the owner can do this).
5. Call the `getBalance()` function to check your balance.

## Video Walk-through
[Watch the code walk-through on Loom](https://www.loom.com/share/0178e3914e994ce083a7d0a1b21e22cc)

## Author
Pranav kumar
