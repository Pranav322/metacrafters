# ErrorHandling Contract

This is a Solidity smart contract that demonstrates the use of `require()`, `assert()`, and `revert()` statements.

## License

This contract uses the MIT License.

## Prerequisites

- Solidity ^0.8.18

## Contract Details

The `ErrorHandlingContract` is a smart contract that manages a `balance` variable.

- **balance**: Stores the total balance managed by the contract.

### Functions

1. **constructor()**
   - Initializes the balance to 0.

2. **deposit(uint256 amount) external**
   - Allows users to add funds to the balance.
   - Uses `require(amount > 0, "Deposit amount must be greater than zero")` to ensure the deposit amount is greater than zero.

3. **withdraw(uint256 amount) external**
   - Lets users withdraw funds from the balance.
   - Uses `require(amount > 0, "Withdrawal amount must be greater than zero")` to ensure the withdrawal amount is greater than zero.
   - Uses `revert("Insufficient balance")` if the withdrawal amount exceeds the available balance.

4. **checkBalance() external view returns (uint256)**
   - Returns the current value of the `balance` variable.
   - Uses `assert(balance >= 0)` to ensure the balance is always greater than or equal to zero.

Overall, the contract implements basic error handling and validation using the `require()`, `assert()`, and `revert()` statements to ensure proper behavior and prevent incorrect operations.

## Video Walkthrough

[Watch the video walkthrough](https://www.loom.com/share/5ddcace9ced0488d9d2f129c540fad89)
