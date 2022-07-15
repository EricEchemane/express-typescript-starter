import express from 'express';
import Environment from './constants/environment';

const app = express();
const PORT = Environment.port();

app.get('/', (_, res) => {
    res.json({ message: 'hello' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));