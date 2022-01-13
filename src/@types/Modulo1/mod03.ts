export const md01_03 = ` 
contract MyContract {
    // Isso é um contrato de estado
    uint public myStateVariable;

    function func() external {
        // Isso não é uma variavel de estado!
        uint notStateVariable = 123;
    }
}
`
