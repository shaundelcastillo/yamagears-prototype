import express from 'express';
import { products } from '../data/products.js';
const router = express.Router();

// GET all products
router.get('/', (req, res) => {
  res.json(products);
});

// POST new product (for adminproduct.html)
router.post('/', (req, res) => {
  const newProduct = { 
    id: products.length ? Math.max(...products.map(p=>p.id))+1 : 1, 
    ...req.body, 
    price: Number(req.body.price) 
  };
  products.push(newProduct);
  res.json({ success: true, product: newProduct });
});

export default router;
