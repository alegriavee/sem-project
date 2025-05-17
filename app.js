const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const customerRoutes = require('./routes/customerRoutes');
const waterUsageRoutes = require('./routes/waterUsageRoutes');

app.use('/api/customers', customerRoutes);
app.use('/api/water-usages', waterUsageRoutes);

app.get('/', (req, res) => {
  res.send('BAWASA API Running...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));