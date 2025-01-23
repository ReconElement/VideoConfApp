import express from 'express';
import { ExpressPeerServer, PeerServer } from 'peer';

const app = express();

app.get('/',(req, res, next)=>{
    res.send({
        message: "Server is working"
    });
});

const PORT = 9000;
const server = app.listen(PORT, ()=>{
    console.log(`Server listening on PORT: ${PORT}`);
});

const peerServer = ExpressPeerServer(server, {
    path: "/myVideoApp"
});

app.use('/peerjs',peerServer);
