// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

import "./bases/ERC20.sol";
import "./governance/Governed.sol";

contract Token is ERC20, Governed {

    constructor() ERC20("Test Token", "TSTX2") {
        owner = msg.sender;
        _mint(msg.sender, 10_000_000_000 * 10 ** decimals());
    }

    function whoOwnsToken() public view returns (address) {
        return owner;
    }

    function mintToken(uint256 amount) public isAdmin {
        /**
         * All minted assets will be deposited into _owner
         * _owner will later distribute assets across recipients
         */
        _mint(msg.sender, amount * 10 ** decimals());
    }

    function decimals() public pure override returns (uint8) {
        return 0;
    }

    function whoIsAdmin() public view returns (address) {
        return owner;
    }

}