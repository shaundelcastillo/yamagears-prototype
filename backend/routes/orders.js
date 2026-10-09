import express from 'express';
const router = express.Router();

// In-memory storage for orders
let orders = [];

// GET /api/orders - for admin-order.html
router.get('/', (req, res) => {
  res.json(orders);
});

// POST /api/orders - from checkout
router.post('/', (req, res) => {
  const newOrder = {
    trackingId: 'YAMA-' + Date.now().toString(36).toUpperCase(), // generate tracking id
    id: Date.now(),
    ...req.body, // cart items, customer info
    date: new Date().toISOString(),
    status: 'To Ship' // default status
  };
  orders.push(newOrder);
  res.json({ success: true, trackingId: newOrder.trackingId });
});

export default router;
