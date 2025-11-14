import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Active CORS pour toutes les routes
app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
  console.log('Requête reçue:', req.body);
  res.json({ success: true, message: 'Message reçu !' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
 