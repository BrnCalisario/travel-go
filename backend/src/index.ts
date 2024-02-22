import 'dotenv/config'
import express, { Router, Request, Response } from "express"
import cors from "cors"
import { userRouter } from "./services/user/user.router"
import { hotelRouter } from './services/hotel/hotel.router'
import { reservationRouter } from './services/reservation/reservation.router'
import { createServer, Server } from 'http';

const PORT = process.env.PORT || 3000

const app = express()
const server = createServer(app);
const io = new Server(server);

app.use(cors())
app.use(express.json())

app.use("/api/user", userRouter)
app.use("/api/hotel", hotelRouter)
app.use("/api/reservation", reservationRouter)

io.on('connection', (socket) => {

    socket.on("data", (data) => {
        console.log("User connected!");
        io.emit("data: " + data)
    });

    socket.on('disconnect', () => {
        console.log("User disconnected");
    });
});

app.listen(PORT, () => console.log('Server running at port http://localhost:' + PORT));