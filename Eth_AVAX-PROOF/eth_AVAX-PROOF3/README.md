# ETH-AVX-Module3

## MyToken Contract

### License
This contract is using the MIT License.

### Prerequisites
- Solidity ^0.8.0

### Contract Details:
The contract imports two contracts from the OpenZeppelin library:

- **ERC20**: This is the standard ERC20 token contract implementation, providing basic functionality for a fungible token.
- **Ownable**: This contract provides a basic access control mechanism, allowing only the contract owner to execute certain functions.

The MyToken contract is defined and inherits from ERC20 and Ownable.

#### Constructor
The constructor function takes an initialOwner address as a parameter. It is executed once when the contract is deployed. Within the constructor, the ERC20 constructor is called with the name "MyToken" and symbol "MTK" to initialize the token. Ownership is transferred to the initial owner using the `transferOwnership` function.

#### Functions

- **mint**: 
  - `function mint(address to, uint256 amount) public onlyOwner`
  - This is a public function that can only be called by the contract owner (as defined by the Ownable contract). It takes two parameters: `to` (the address to which the tokens will be minted) and `amount` (the number of tokens to mint). Inside the function, the `_mint` function from the ERC20 contract is called to create and assign the specified amount of tokens to the given address.

- **burn**: 
  - `function burn(uint256 amount) public`
  - This function allows any token holder to burn (destroy) a specified amount of their own tokens. It takes one parameter: `amount` (the number of tokens to burn). Inside the function, the `_burn` function from the ERC20 contract is called to destroy the specified amount of tokens from the sender's balance.

### Video Walkthrough
[Video Walkthrough](https://www.loom.com/share/a4b739961a154a039a4d7a141fc0624d)

