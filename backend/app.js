const express = require('express');
const app = express();
require('dotenv').config();
const aiRoutes = require('./routes/aiRoutes');

app.use(express.json());
app.use(express.static('../frontend'));

app.use('/api/ai', aiRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));