import React from 'react';
import { useState } from 'react';
import { createContext } from "react";

export const Shop = createContext();

const ShopProvider = ({children}) => {

    const [cart, setCart]=useState([]);

    const addItem=(item)=>{
        if(!isInCart(item.id)){
            const cartModified = [...cart, item];
            setCart(cartModified);
        }else{
            const cartModified =cart.map(product=>{
                if(product.id===item.id){
                    product.quantity += item.quantity;
                return product;
                }
                return product;
            })
            setCart(cartModified);
        }
    }

    const isInCart=(id)=>{
        return cart.some(product=>product.id===id);
    }

    const removeItem=(id)=>{
        const cartModified= cart.filter(product=> product.id!==id);
        setCart(cartModified);
    }

    const clearCart=()=>{
        setCart([]);
    }

    

    return (
        <Shop.Provider value={{cart, addItem, removeItem, clearCart}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider