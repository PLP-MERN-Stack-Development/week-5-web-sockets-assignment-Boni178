import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: 'http://localhost:5173' }
});

app.use(cors());
app.use(express.json());
socket.on('chat-message', ({ username, message }) => {
  io.emit('chat-message', {
    username,
    message,
    timestamp: new Date()
  });
});

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

httpServer.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}`)
);
socket.on('private-message', ({ to, message }) => {
  io.to(to).emit('private-message', { message });
});
socket.on('join-room', (room) => {
  socket.join(room);
});

socket.on('chat-message', ({ room, message }) => {
  io.to(room).emit('chat-message', message);
});
socket.on('chat-message', (data) => {
  playSound(); // or update unread badge
});
socket.broadcast.emit('user-joined', username);
const playSound = () => new Audio('/ding.mp3').play();
if (Notification.permission === "granted") {
  new Notification("New message!", { body: message });
}
function getMessages(offset = 0, limit = 20) {
  return db.slice(offset, offset + limit);
}
socket.on('reconnect', () => {
  console.log('Reconnected');
});

socket.emit('message-delivered', messageId);

const filtered = messages.filter(m => m.text.includes(searchTerm));
