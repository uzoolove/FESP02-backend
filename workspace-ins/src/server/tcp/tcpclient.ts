import { Socket } from 'node:net';
const target = {
  // host: 'localhost',
  host: '172.31.98.210',
  // host: 'api.fesp.shop',
  // host: 'google.com',
  port: 80,
};
const socket = new Socket();
socket.connect(target.port, target.host, () => {
  console.log('서버 접속 완료.', `${target.host}:${target.port}`);
  // 서버에 메세지 전송
  // socket.write('안녕...');
  socket.write('GET /posts HTTP/1.1\r\n');
  socket.write('Host: localhost\r\n');
  socket.write('\r\n');
  socket.on('error', (err) => {
    console.log(err);
  });
  // 서버의 메세지 출력
  socket.on('data', data => console.log(data.toString()));
});

// 표준 입력장치로부터 메세지를 읽어서 서버에 전송
process.stdin.on('data', data => {
  socket.write(data);
});