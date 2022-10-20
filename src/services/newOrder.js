
const newOrder =(email, name, surname, phone, cart, totalAmount)=>{
    
    return{
        client: {
            name: name,
            surname: surname,
            email: email,
            phone: phone
        },
        items: cart,
        total: totalAmount,
        purchaseDate: new Date().toDateString()
    }
}

export default newOrder;