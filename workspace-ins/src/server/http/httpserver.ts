import net from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const server = net.createServer((req, res) => {
  if(req.url === '/'){
    req.url = '/index.html';
  }
  const filename = path.join('.', 'dist', 'server', 'http', 'public', req.url!);
  fs.readFile(filename, (err, data) => {
    if(err){
      console.error(err);
      res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'});
      res.end(`<h1>${req.url} 파일을 찾을 수 없습니다.</h1>`);
    }else{
      if(filename.endsWith('.svg')){
        res.writeHead(200, {'Content-Type': 'image/svg+xml;charset=utf-8'});
      }else{
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
      }      
      res.end(data);
    }
  });
});
const PORT = 8088;
server.listen(PORT, () => {
  console.log('HTTP 서버 구동.', PORT);
});