import * as http from 'http';
import express from 'express';
import cors from 'cors';
import RichPresenceController from './controllers/richPresence/index.js';
import AuthController from './controllers/auth/index.js';


const app = express();
const server = http.createServer(app);

app.use(cors({ origin: 'https://discord.com' }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', RichPresenceController.bind);
app.use('/', AuthController.bind);
app.get('/', (req, res) => res.send('ping'));

server.listen(3000, () => console.log('Started'));