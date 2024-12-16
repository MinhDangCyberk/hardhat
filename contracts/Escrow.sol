// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Escrow {
    address public owner;
    address public claimer;
    uint public amount;
    bool public isWithdraw;

    error OnlyClaimerCanWithdraw(address _operator);
    error FailedToSendEther(address _operator);
    error AlreadyWithdrawn();

    constructor(address _claimer) {
        owner = msg.sender;
        claimer = _claimer;
    }

    function deposit() public payable {
        amount += msg.value;
    }

    function withdraw() public {
        if (isWithdraw) revert AlreadyWithdrawn();
        if (msg.sender != claimer) revert OnlyClaimerCanWithdraw(msg.sender);
        (bool sent, ) = msg.sender.call{value: amount}("");
        if (!sent) revert FailedToSendEther(msg.sender);
        isWithdraw = true;

    }
}

