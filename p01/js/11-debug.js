const cartPrices = ['1250', '790', '430'];
 
function cartTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total = total + Number(items[i]);
    }
    return total;
}
 
