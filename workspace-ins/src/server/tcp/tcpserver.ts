import net from 'node:net';
const server = net.createServer((socket) => {
  // 클라이언트 접속됨
  console.log(socket.remoteAddress, '접속함.');
  // 클라이언트로부터 메세지가 도착할 때 발생
  socket.on('data', (data) => {
    console.log(`${socket.remoteAddress}: ${data}`);
  });
  // 클라이언트가 연결을 끊을때 발생
  socket.on('error', () => {
    console.log(socket.remoteAddress, '접속 종료.');
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log('TCP 서버 구동.', PORT);
});