// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
import {ERC20Base} from "../protocol/token/ERC20Base.sol";

contract FedhaERC20Token is ERC20Base {
    constructor(
        string memory name,
        string memory symbol,
        uint256 _totalSupply
    ) ERC20Base(name, symbol) {
        _mint(msg.sender, _totalSupply);
    }
}
