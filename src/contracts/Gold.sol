// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;

//import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
//import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.3.0/contracts/token/ERC20/ERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.3.0/contracts/token/ERC20/ERC20Burnable.sol";


contract Gold is ERC20, ERC20Burnable {
  address public minter;
  address private owner;
  
  mapping(address => uint) staked;

  event MinterChanged(address indexed from, address to);

  constructor() payable ERC20("Gold", "GLD") {
    minter = msg.sender;
    owner = msg.sender;
  }

  function passMinterRole(address farm) public returns (bool) {
    require(msg.sender==minter, "You are not minter");
    minter = farm;

    emit MinterChanged(msg.sender, farm);
    return true;
  }
  
  function getOwner() public view returns (address) {
      return owner;
  }

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) public virtual override returns (bool) {
        require(msg.sender == minter, "You are not the minter");
        
        _transfer(sender, recipient, amount);
        
        return true;
    }
    
    function stake(address account, uint amount) public {
        require(msg.sender == minter, "You are not the minter");
        staked[account] = amount;
        
        // TODO: Do proper reflection
        _mint(account, amount * 2);
    }
    
    function getStaked(address account) public view returns (uint) {
        return staked[account];
    }
}
