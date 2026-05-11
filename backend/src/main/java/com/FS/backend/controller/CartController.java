package com.FS.backend.controller;

import com.FS.backend.entity.Cart;
import com.FS.backend.repository.CartRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
@CrossOrigin(
        origins = "http://localhost:5173",
        allowedHeaders = "*",
        methods = {
                RequestMethod.GET,
                RequestMethod.POST,
                RequestMethod.PUT,
                RequestMethod.DELETE
        }
)
public class CartController {

    @Autowired
    private CartRepo cartRepo;

    @GetMapping
    public List<Cart> getCartItems() {
        return cartRepo.findAll();
    }

    @PostMapping
    public Cart addToCart(@RequestBody Cart cart) {
        return cartRepo.save(cart);
    }

    @DeleteMapping("/{id}")
    public void deleteCart(@PathVariable Long id) {
        cartRepo.deleteById(id);
    }

    @PutMapping("/{id}")
    public Object updateCart(@PathVariable Long id, @RequestBody Cart updatedCart) {
        Cart cart = cartRepo.findById(id).orElseThrow();
        if (updatedCart.getQuantity() <= 0) {
            cartRepo.deleteById(id);
            return "Product Removed";
        }
        cart.setQuantity(updatedCart.getQuantity());
        return cartRepo.save(cart);
    }
}