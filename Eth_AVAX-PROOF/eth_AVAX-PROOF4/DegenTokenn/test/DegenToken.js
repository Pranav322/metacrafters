const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DegenToken", function () {
  let DegenToken, degenToken, owner, addr1, addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    DegenToken = await ethers.getContractFactory("DegenToken");
    degenToken = await DegenToken.deploy();
    await degenToken.deployed();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await degenToken.owner()).to.equal(owner.address);
    });
    git rm --cached eth_AVAX-PROOF/eth_AVAX-PROOF4/DegenToken

    it("Should have correct name and symbol", async function () {
      expect(await degenToken.name()).to.equal("Degen");
      expect(await degenToken.symbol()).to.equal("DGN");
    });
  });

  describe("Minting", function () {
    it("Should allow owner to mint tokens", async function () {
      await degenToken.mint(addr1.address, 100);
      expect(await degenToken.balanceOf(addr1.address)).to.equal(100);
    });

    it("Should not allow non-owner to mint tokens", async function () {
      await expect(degenToken.connect(addr1).mint(addr1.address, 100)).to.be.revertedWith("Ownable: caller is not the owner");
    });
  });

  describe("Burning", function () {
    it("Should allow users to burn their tokens", async function () {
      await degenToken.mint(addr1.address, 100);
      await degenToken.connect(addr1).burn(50);
      expect(await degenToken.balanceOf(addr1.address)).to.equal(50);
    });

    it("Should not allow burning more tokens than balance", async function () {
      await degenToken.mint(addr1.address, 100);
      await expect(degenToken.connect(addr1).burn(150)).to.be.revertedWith("Insufficient balance");
    });
  });

  describe("Redeeming", function () {
    beforeEach(async function () {
      await degenToken.mint(addr1.address, 4); 
    });
  
    it("Should allow redeeming tokens for coins", async function () {
      await degenToken.connect(addr1).redeem(0); 
      expect(await degenToken.getCoinBalance(addr1.address, 0)).to.equal(1);
      expect(await degenToken.balanceOf(addr1.address)).to.equal(3);
    });
  
    it("Should not allow redeeming with insufficient balance", async function () {
      await expect(degenToken.connect(addr1).redeem(2)) 
        .to.be.revertedWith("Insufficient balance to redeem");
    });
  
    it("Should not allow redeeming invalid coin type", async function () {
      await expect(degenToken.connect(addr1).redeem(3)).to.be.revertedWith("Invalid coin type");
    });
  });
  describe("Coin Balance", function () {
    it("Should return correct coin balance", async function () {
      await degenToken.mint(addr1.address, 10);
      await degenToken.connect(addr1).redeem(0);
      await degenToken.connect(addr1).redeem(0);
      expect(await degenToken.getCoinBalance(addr1.address, 0)).to.equal(2);
    });

    it("Should return zero for coin types not redeemed", async function () {
      expect(await degenToken.getCoinBalance(addr1.address, 1)).to.equal(0);
    });
  });

  describe("Available Coin Types", function () {
    it("Should return correct available coin types", async function () {
      const coinTypes = await degenToken.getAvailableCoinTypes();
      expect(coinTypes.length).to.equal(3);
      expect(coinTypes[0]).to.equal(1);
      expect(coinTypes[1]).to.equal(2);
      expect(coinTypes[2]).to.equal(5);
    });
  });
});