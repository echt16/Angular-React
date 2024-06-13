const icecream = {
    small: { price: 10 },
    big: {
        price: 25,
        topings: {
            chocolate: 5,
            caramel: 6,
            berry: 10
        }
    },
    marshmalow: { price: 5 }
};


function buyIcecream() : number {
    let cost = 0;

    do {
        var ic: number | string | null = prompt("Small icecream - 1, big - 2", "0");
        if (ic)
            ic = +ic;
        else
            continue;
    } while (ic != 1 && ic != 2);

    if(ic == 1)
        cost += icecream.small.price;
    else{
        cost += icecream.big.price;
        let b = false;
        do{
            var toping: number | string | null = prompt("Chocolate - 1; caramel - 2; berry - 3; exit - 0");
            if(toping)
                toping = +toping;
            else
                continue;
            switch(toping){
                case 1: cost+=icecream.big.topings.chocolate;break;
                case 2: cost+=icecream.big.topings.caramel;break;
                case 3: cost+=icecream.big.topings.berry;break;
                case 0: {
                    if(!b){
                        alert("You must choose one of toppings. Available: chocolate, caramel, berry.");
                        continue;
                    }
                }break;
                default:continue;
            }
        }while(toping != 0);
    }
    let marshmellow = confirm("Would you like to add marshmallows?");
    if(marshmellow)
        cost += icecream.marshmalow.price;
    return cost;
}

alert(buyIcecream());