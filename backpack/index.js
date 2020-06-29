var backpack = function() {
    const goods = [
        {
            price: 1500,
            weight: 1,
            priceArr: [],
        }, {
            price: 3000,
            weight: 4,
            priceArr: [],
        }, {
            price: 2000,
            weight: 3,
            priceArr: [],
        }
    ];

    for (let goodIndex = 0; goodIndex < goods.length; goodIndex++) {
        const good = goods[goodIndex];
        for (let bangIndex = 0; bangIndex < 4; bangIndex++) {

            let max = 0;

            if (good.weight > 4) {
                good.priceArr.push(0);
            } else {
                if (goodIndex > 0) {
                    max = Math.max(goods[goodIndex - 1].priceArr[bangIndex], good.price + goods[goodIndex - 1].priceArr[4 - bangIndex - 1]);
                } else {
                    max = good.price;
                }
                good.priceArr.push(max);
            }
        }
    }

    console.log(goods);
}

backpack();