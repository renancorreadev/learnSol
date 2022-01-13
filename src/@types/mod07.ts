export const md01_07 = ` 
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract Counter {
    // Escreva seu Código Aqui
    uint public  count; 
    
    //Incrementar mais 1
    function inc() external {
        count += 1;
    }
    
    //Decrementar mais 1
    function dec() external {
        count -= 1;
    }
}

`
