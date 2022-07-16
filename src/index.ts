import Environment from 'constants/environment';
import express from 'express';

const app = express();
const PORT = Environment.port();

app.get('/', (_, res) => {
    res.json({ message: 'hello' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});