import net from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

/**
 * 웹 애플리케이션 개발시 일반적으로 처리해야 할 작업
 *  1. 로깅
 *  2. url 텍스트 인코딩 
 *  3. POST 방식의 바디 파싱
 *  4. JSON 방식의 바디 파싱
 *  5. 쿠키 파싱
 *  6. 정적인 자원 응답(O)
 *  7. 세션 관리
 *  8. 동적인 자원 응답
 *  9. 파일 업로드
 *  10. 보안(인증, 권한)
 *  11. 에러 처리
 *  ...
*/


// http://localhost:8088/now 요청시 현재 시간을 응답
const server = net.createServer((req, res) => {
  if(req.url === '/'){
    req.url = '/index.html';
  }else if(req.url === '/now.html'){
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    res.end(`<h1>${new Date()}</h1>`);
  }else{
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
        const result = data.toString().replace('<%=now%>', Date());
        res.end(result);
      }
    });
  }  
});
const PORT = 8088;
server.listen(PORT, () => {
  console.log('HTTP 서버 구동.', PORT);
});