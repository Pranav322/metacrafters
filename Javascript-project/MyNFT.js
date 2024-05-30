/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const TotalNFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name, _id, _gender, _salary) {
    const NFT = {
        "name": _name,
        "id": _id,
        "gender": _gender,
        "salary": _salary
    };
    TotalNFTs.push(NFT);
    console.log(`Minted: ${_name}`);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < TotalNFTs.length; i++) {
        console.log(`\nName: ${TotalNFTs[i].name}`);
        console.log(`Employee ID: ${TotalNFTs[i].id}`);
        console.log(`Gender: ${TotalNFTs[i].gender}`);
        console.log(`Salary: ${TotalNFTs[i].salary}`);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(`Total Supply: ${TotalNFTs.length}`);
}

// call your functions below this line
mintNFT("Alan Turing", 203, "Male", "$69000");
mintNFT("John Nash", 304, "Male", "$70000");
mintNFT("Steve Jobs", 405, "Male", "$100000");
listNFTs();
console.log("\n");
getTotalSupply();
