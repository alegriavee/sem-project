const db = require('../models/db');

exports.getAllCustomers = (req, res) => {
  db.query('SELECT * FROM customers', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getCustomerCount = (req, res) => {
  db.query('SELECT COUNT(*) AS total_customers FROM customers', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
};