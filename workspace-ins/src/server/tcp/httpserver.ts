import net from 'node:net';

const server = net.createServer((socket) => {
  // 클라이언트 접속됨
  console.log(socket.remoteAddress, '접속함.');
  // 클라이언트로부터 메세지가 도착할 때 발생
  socket.on('data', (data) => {
    // console.log(`${socket.remoteAddress}: ${data}`);

    const req = data.toString();
    const reqArr = req.split('\r\n');
    const startLine = reqArr.shift();
    if(startLine){
      const method = startLine.split(' ')[0];
      const url = startLine.split(' ')[1];
      const httpVersion = startLine.split(' ')[2];
      console.log(method, url, httpVersion);
    }

    socket.write('HTTP/1.1 200 OK\r\n');
    socket.write('Content-Type: text/html;charset=utf-8\r\n');
    socket.write('\r\n');
    socket.write(`
      <html>
      <head><title>Hello</title><head>
      <body><h1>안녕.</h1><img src="https://cdn.discordapp.com/attachments/1254708375187361817/1263033163886624818/KakaoTalk_Photo_2024-07-17-13-59-22_004.png?ex=6698c2cc&is=6697714c&hm=ad227754ea0aa3f694955211bb1bb813eefcc69bb8d4c9aa9e86e68a40af27e3&"></body>
      </html>
    `);
    socket.end('\r\n');
  });
  // 클라이언트가 연결을 끊을때 발생
  socket.on('error', () => {
    console.log(socket.remoteAddress, '접속 종료.');
  });
});

const PORT = 8088;
server.listen(PORT, () => {
  console.log('TCP 서버 구동.', PORT);
});