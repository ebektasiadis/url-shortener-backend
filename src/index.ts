import express from 'express';
import urlsController from './urls';

const app = express();

app.use(express.json());

app.use('/urls', urlsController);

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
