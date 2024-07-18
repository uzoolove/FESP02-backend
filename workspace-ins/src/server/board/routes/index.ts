import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const list = [
    {
      "_id": 968,
      "title": "fdgdsf",
      "content": "sdf",
      "type": "info",
      "views": 8,
      "user": {
        "_id": 2,
        "name": "네오",
        "profile": "/files/00-sample/user-neo.webp"
      },
      "createdAt": "2024.07.16 18:20:02",
      "updatedAt": "2024.07.16 18:20:02",
      "seller_id": null,
      "repliesCount": 0,
      "product": {
        "image": null
      }
    },
    {
      "_id": 967,
      "title": "다시수정다시수정",
      "content": "존맛탱구리구리구리",
      "type": "info",
      "views": 26,
      "user": {
        "_id": 82,
        "name": "매그내틱",
        "profile": "/files/00-sample/H9g65B9Hr.jpg"
      },
      "createdAt": "2024.07.16 15:51:45",
      "updatedAt": "2024.07.16 15:51:45",
      "seller_id": null,
      "repliesCount": 0,
      "product": {
        "image": null
      }
    },
    {
      "_id": 966,
      "title": "비가 많이온다 호옹",
      "content": "호옹2",
      "type": "info",
      "views": 22,
      "user": {
        "_id": 301,
        "name": "호옹이",
        "profile": null
      },
      "createdAt": "2024.07.16 15:50:09",
      "updatedAt": "2024.07.16 15:50:09",
      "seller_id": null,
      "repliesCount": 1,
      "product": {
        "image": null
      }
    },
    {
      "_id": 964,
      "title": "헤헤헷 나 된당~~",
      "content": "룰루 랄라 ~~",
      "type": "info",
      "views": 43,
      "user": {
        "_id": 300,
        "name": "동글암이",
        "profile": "/files/00-sample/iqMn1ugR2.JPG"
      },
      "createdAt": "2024.07.16 14:49:21",
      "updatedAt": "2024.07.16 14:49:21",
      "seller_id": null,
      "repliesCount": 4,
      "product": {
        "image": null
      }
    }
  ];
  res.render('index', { list });
});

export default router;
