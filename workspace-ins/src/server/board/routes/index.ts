import express from 'express';
const router = express.Router();

import model from '../models/index.js';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// 게시물 목록 조회
router.get('/:type', function(req, res, next) {
  const type = req.params.type;
  const list = model.post.list();
  res.render('community/list', { list });
});

export default router;
