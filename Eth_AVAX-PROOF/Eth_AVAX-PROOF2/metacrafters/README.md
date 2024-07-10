# ETH_AVAX_Module2

My Account 

Create a simple contract with 2-3 functions. Then show the values of those functions in frontend of the application.
License This contract is using the MIT License.

Prerequisites Solidity ^0.8.0

Contract Details 

Assignment.sol

The contract is defined with the name "SimpleContract" and specifies that it complies with the MIT license.

The contract contains a private array variable called "names," which will store the names added by users. The "private" visibility modifier restricts direct access to this variable from outside the contract.

The setName function allows users to add a new name to the "names" array. It takes a string parameter _name and appends it to the end of the array.

The getAllNames function is a view function, meaning it does not modify the contract's state. It returns the complete list of names stored in the "names" array.

The reset function deletes all the names stored in the "names" array. It uses the delete keyword to clear the array.

The deleteName function allows users to remove a specific name from the "names" array. It takes a string parameter _name and iterates through the array to find a match. If a match is found, the function shifts all subsequent elements one position to the left to overwrite the matched name. Finally, it uses the pop function to remove the last element from the array, effectively deleting the target name.

index.js

It is a React component that interacts with a Solidity smart contract. It allows users to perform various actions on a list of names stored in the contract. The component displays an input field and a button for adding a name to the list, an input field and a button for deleting a name from the list, and buttons for retrieving all names and deleting all names.

When a user adds a name, the component calls the setName function of the contract and sends a transaction to add the name to the list. When a user deletes a name, the component calls the deleteName function of the contract and sends a transaction to remove the specified name from the list.

The component also includes functions for retrieving all names from the contract and deleting all names from the contract. These functions call the corresponding contract functions and update the state of the component with the retrieved names or an empty list, respectively.

The component uses React's useState hook to manage the state of the contract instance, input fields, and the list of names. It also utilizes the useEffect hook to initialize the contract instance when the component is mounted.

deploy.js

It is a JavaScript script that uses Hardhat and ethers.js to compile and deploy a Solidity contract. It follows these steps:
Imports the necessary libraries from Hardhat and ethers.js.
Defines an asynchronous function called main().
Compiles the Solidity contract using ethers.getContractFactory().
Deploys the contract using the contract factory's deploy() function and stores the deployed instance in a variable.
Waits for the contract to be mined and deployed by using the deployed() function.
Logs the deployed contract's address to the console.
Calls the main() function, handles errors, and exits the process

Video Walkthrough
https://www.loom.com/share/82210c4a7d344467a6d487efbf9ffcc2