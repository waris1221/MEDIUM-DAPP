// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Medium is ERC721, ERC721URIStorage, Ownable {

    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;
    uint256 public fees;
    uint256 private minimumSupportingValue = 1000000000000000;                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

    constructor(
        string memory name_,
        string memory symbol_,
        uint256 fees_
    )  ERC721(name_, symbol_){
        fees = fees_;
    }

    /**
    * @dev Mints `tokenId` and transfers it to `to`.
    *
    * WARNING: Usage of this method is discouraged, use {_safeMint} whenever possible
    *
    * Requirements:
    *
    * - `tokenId` must not exist.
    * - `to` cannot be the zero address.
    *
    * Emits a {Transfer} event.
    */


    function safeMint(address to, string memory uri) public payable{
        require(msg.value >= fees, "Not enough MATIC");
        payable(owner()).transfer(fees);

        /// @notice  Mint NFT

        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);


        /// @notice Return oversupplied fees

        uint256 contractBalance = address(this).balance;

        if(contractBalance > 0){
            payable(msg.sender).transfer(address(this).balance);
        }
    }

    /// @notice support the projet


     function support()public payable {
        require(msg.value >= minimumSupportingValue, "you have not enough Matic");
         payable(owner()).transfer(minimumSupportingValue);
        uint256 remaining = msg.value  - minimumSupportingValue;

        if(remaining > 0){
            payable(msg.sender).transfer(remaining);
        }

    }

    
    /// @notice Override function

    function _burn(uint256 tokenId) 
        internal  
        override (ERC721, ERC721URIStorage)
    {

        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId) 
        public 
        view  
        override(ERC721, ERC721URIStorage)
        returns (string memory) 
    {
        return super.tokenURI(tokenId);
    }
}
