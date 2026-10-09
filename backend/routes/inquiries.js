import express from 'express';
const router = express.Router();

// In-memory storage for now (resets when server restarts)
let inquiries = [];

// GET /api/inquiries - return all inquiries for admin
router.get('/', (req, res) => {
  res.json(inquiries);
});

// POST /api/inquiries - from Contact Us form
router.post('/', (req, res) => {
  const newInquiry = {
    id: Date.now(), // unique id based on timestamp
    ...req.body, // name, email, message from frontend
    date: new Date().toISOString() // add timestamp
  };
  inquiries.push(newInquiry);
  res.json({ success: true });
});

export default router;


