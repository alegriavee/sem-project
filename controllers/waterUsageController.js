const db = require('../models/db');

exports.getAllWaterUsages = (req, res) => {
  db.query('SELECT * FROM water_usages', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getAverageConsumption = (req, res) => {
  db.query('SELECT AVG(consumption_in_cubic_meters) AS average_consumption FROM water_usages', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
};

exports.getUsageByMonth = (req, res) => {
  db.query(`
    SELECT DATE_FORMAT(reading_date, '%Y-%m') AS month, 
           SUM(consumption_in_cubic_meters) AS total_consumption 
    FROM water_usages 
    GROUP BY month
    ORDER BY month ASC
  `, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getTopConsumers = (req, res) => {
  db.query(`
    SELECT c.name, SUM(w.consumption_in_cubic_meters) AS total_consumption 
    FROM water_usages w
    JOIN customers c ON w.customer_id = c.id
    GROUP BY c.id
    ORDER BY total_consumption DESC
    LIMIT 10
  `, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getLowConsumers = (req, res) => {
  db.query(`
    SELECT c.name, SUM(w.consumption_in_cubic_meters) AS total_consumption 
    FROM water_usages w
    JOIN customers c ON w.customer_id = c.id
    GROUP BY c.id
    ORDER BY total_consumption ASC
    LIMIT 10
  `, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};