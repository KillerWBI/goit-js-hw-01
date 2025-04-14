function getShippingMessage (country , price, deliveryFee) {

    const totalPrice = price + deliveryFee;

    console.log ("Shipping to " + String(country) + " will cost " + totalPrice + " credits")

    }
