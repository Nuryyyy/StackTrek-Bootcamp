 // sample Polymul run
 const listA = [1,2,3]; // corresponds to 1x^2 + 2x^1 + 3x^0 => x^2 + 2x + 3
 const listB = [2,4]; // corresponds to the polynomial 2x^1 + 4x^0 => 2x + 4
 console.log(Polymul(listA, listB)); // must print { '0': 12, '1': 14, '2': 8, '3': 2 } which corresponds to the polynomial 2x^3 + 8x^2 + 14x^1 + 12x^0 => 2x^3 + 8x^2 + 14x + 12
 