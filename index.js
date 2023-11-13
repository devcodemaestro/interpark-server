// const express = require("express") ;  옛날 즉 commonjs 방식
import express from "express"; // 현대 방식 module 방식
import cors from "cors";
// 도움말 및 기능 테스트 Swagger

import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

const app = express();
const port = 4000; // 서버에 접속시 포트번호
// cors 처리(웹브라우저로 접속시 보안관련 처리)
app.use(
  cors({
    origin: "*",
  })
);

// json 데이터를 사용하겠다고 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// swagger 설정

const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// REST API 요청 처리
// 첫페이지
app.get("/", function (req, res) {
  res.send("인터파크 API");
});
// 게시판 API (백엔드 호출 함수)
// get 은 프론트에서 자료 요청
// localhost:4000/board : 게시판 자료를 요청.
app.get("/board", (req, res) => {
  console.log("GET", req);
  // DB 에서 조건을 보고 결과를 {} 만들어서 [] 담아서준다.
  // MongoDB, MaraiDB(MySql)
  const result = [
    {
      number: 1,
      writer: "철수",
      title: "제목입니다.",
      contents: "내용입니다.",
    },
    {
      number: 2,
      writer: "영희",
      title: "영희입니다.",
      contents: "내용입니다.",
    },
    {
      number: 3,
      writer: "훈희",
      title: "훈희입니다.",
      contents: "내용입니다.",
    },
  ];
  res.send(result);
});

// post 는 프론트에서 백엔드로 자료 전송
// localhost:4000/board : 게시판 자료를 추가한다.
// axios.post("/board", {자료})
app.post("/board", (req, res) => {
  // console.log("POST", req);
  console.log("BODY 프론트가 보낸 데이터 ", req.body);
  // req.body 를 바탕으로 DB 에 내용 추가
  res.send("게시물 추가에 성공하였습니다.");
});

// 인터파크 API (백엔드 호출 함수)
// visual 영역에 출력할 자료 요청
// localhost:4000/visual
app.get("/visual", (req, res) => {
  const result = {
    total: 6,
    visual_1: {
      file: "images/v1.png",
      url: "a.html",
    },
    visual_2: {
      file: "images/v2.jpg",
      url: "b.html",
    },
    visual_3: {
      file: "images/v3.jpg",
      url: "c.html",
    },
    visual_4: {
      file: "images/v4.jpg",
      url: "d.html",
    },
    visual_5: {
      file: "images/v5.jpg",
      url: "e.html",
    },
    visual_6: {
      file: "images/v6.png",
      url: "f.html",
    },
  };
  res.send(result);
});
// recommend 영역에 출력할 자료 요청
// localhost:4000/visual
app.get("/recommend", (req, res) => {
  const result = {
    total: 12,
    good_1: {
      image: "images/r1.jpg",
      discount: 47,
      price: 6090,
      desc: "[오쎈특가 쿠폰최종가 소형 5,070원]  [2024년 달력 얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼, 모네, 고흐, 윤동주 등",
      url: "a.html",
    },
    good_2: {
      image: "images/r2.jpg",
      discount: 0,
      price: 12900,
      desc: "유혜광 통등심돈까스 10장 (총 5팩)",
      url: "a.html",
    },
    good_3: {
      image: "images/r3.jpg",
      discount: 42,
      price: 12900,
      desc: "[10/31 단하루/한정수량] 매일 어메이징 오트 언스위트 190ml 24팩 + 오리지널 6팩 증정",
      url: "a.html",
    },
    good_4: {
      image: "images/r4.png",
      discount: 2,
      price: 8240,
      desc: "단하루! 베베숲 센시티브 20매 휴대 캡 12팩 외 휴대용 아기 물티슈 모음 / 외출 필수품",
      url: "a.html",
    },
    good_5: {
      image: "images/r5.jpg",
      discount: 22,
      price: 3900,
      desc: "★10월 마지막!★ 베어파우 키즈 방한 패딩 양털 부츠 베이비 남아 여아 아기 어린이 유아",
      url: "a.html",
    },
    good_6: {
      image: "images/r6.jpg",
      discount: 29,
      price: 34900,
      desc: "[스포츠파크]  뉴발란스 남성 UNI 에센셜 스몰로고 맨투맨 4종택1",
      url: "a.html",
    },
    good_7: {
      image: "images/r7.jpg",
      discount: 2,
      price: 22220,
      desc: "[더쎈위크]  롯데빼빼로 3종 x 20갑 (오리지널/아몬드/초코필드) 골라담기",
      url: "a.html",
    },
    good_8: {
      image: "images/r8.jpg",
      discount: 35,
      price: 26900,
      desc: "[한정수량특가]  한양식품 국내산 꽃보다오징어 오리지날 260g+260g",
      url: "a.html",
    },
    good_9: {
      image: "images/r9.jpg",
      discount: 14,
      price: 18260,
      desc: "샤오미 미지아 가습기2/미지아 스마트 살균가습기2/MJJSQ06DY/관부가세포함",
      url: "a.html",
    },
    good_10: {
      image: "images/r10.jpg",
      discount: 18,
      price: 2930,
      desc: "[쇼핑앱특가2400원] 아이팝 무라벨 먹는샘물 생수 2L*6펫 / 하이트진로",
      url: "a.html",
    },
    good_11: {
      image: "images/r11.jpg",
      discount: 25,
      price: 10410,
      desc: "제주 삼다수 2L 12병 (유/무라벨 랜덤발송) ",
      url: "a.html",
    },
    good_12: {
      url: "go.html",
    },
  };
  res.send(result);
});

// tour 영역에 출력할 자료 요청
app.get("/tour", (req, res) => {
  const result = {
      "total": 9,
      "tour_1": {
        "image": "images/t1.jpg",
        "badge": "강력특가",
        "benefit": "스탠다드 더블",
        "desc": "글래드 여의도",
        "price": 139040,
        "url": "a.html"
      },
      "tour_2": {
        "image": "images/t2.jpg",
        "badge": "타이베이",
        "benefit": "시먼역 도보 3분, 4성급 모던 호텔",
        "desc": "저스트 슬립 시먼딩",
        "price": 180885,
        "url": "a.html"
      },
      "tour_3": {
        "image": "images/t3.jpg",
        "badge": "베스트셀러",
        "price": 679000,
        "benefit": "최다판매 상품",
        "desc": "[부산-하노이 5일]★가족여행최고★하노이/하롱베이+옌뜨...",
        "url": "a.html"
      },
      "tour_4": {
        "image": "images/t4.webp",
        "badge": "국적기직항",
        "price": 3399000,
        "benefit": "라스베가스 준특급 2박, 5대특식 포함",
        "desc": "[미서부/단독/BEST] 3대도시+8대캐년 완전일주 10일/11일...",
        "url": "a.html"
      },
      "tour_5": {
        "image": "images/t5.webp",
        "badge": "강력특가",
        "price": 107000,
        "benefit": "룸온니 초특가",
        "desc": "인터컨티넨탈 알펜시아 평창",
        "url": "a.html"
      },
      "tour_6": {
        "image": "images/t6.jpg",
        "badge": "국적기직항",
        "price": 2599000,
        "benefit": "대한항공, 베스트셀러",
        "desc": "동유럽 3국 9일, 체코/오스트리아/헝가리,대한항공,4성호텔,...",
        "url": "a.html"
      },
      "tour_7": {
        "image": "images/t7.webp",
        "badge": "괌",
        "price": 219120,
        "benefit": "공항 10분 거리, 오션뷰 인피니티 풀",
        "desc": "괌 리프 호텔 (구.괌 리프 앤 올리브 스파 리조트)",
        "url": "a.html"
      },
      "tour_8": {
        "image": "images/t8.webp",
        "badge": "나트랑",
        "price": 124592,
        "benefit": "공항 15분 거리, 논느억 해변에 위치",
        "desc": "빈펄 나트랑 베이 리조트 & 빌라",
        "url": "a.html"
      },
      "tour_9": {
        "image": "images/t9.webp",
        "badge": "강력특가",
        "price": 220000,
        "benefit": "클래식 킹",
        "desc": "레스케이프 호텔",
        "url": "a.html"
      }
    }
  res.send(result);
})
// 서버에서 Request 요청대기
app.listen(port, () => {
  console.log(`현재 웹서버가 ${port} 로 접속하였습니다.`);
});
