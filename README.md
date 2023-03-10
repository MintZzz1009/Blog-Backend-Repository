# Blog-Backend Repository

author: Haksoo Ji

## ✅ 소속

내일배움캠프 스파르타 코딩클럽 Node.js 트랙

## ✅ 주제

주특기 입문 주차 **개인과제**

## ✅ 진행 주차 및 팀

B반 8조 코딩할팔자조

- 팀장: 이희찬

- 팀원: 장빈 강하루 지학수

## ✅ 프로젝트 설명

### ✔️ Goal: "Node.js와 express로 로그인 기능이 없는 나만의 항해 블로그 백엔드 서버 만들기"

### ✔️ 학습목표 ( 학습 완료 후 가능해지는 것 )

1. Node.js를 이용해서 웹 프레임워크를 구성 할 수 있어요.
2. mongoDB와 mongoose를 이용하여 원하는 데이터베이스를 만들고 활용할 수 있어요.
3. express를 기반으로 CRUD(Create, Read, Update, Delete) 기능이 포함된 REST API를 만들 수 있어요.
4. AWS에 express와 mongoDB 서비스를 배포할 수 있어요.
5. 프로젝트에 필요한 기능을 토대로 API 리스트를 작성해서 백엔드 서버를 설계할 수 있어요.

### ✔️ 과제 요구사항

#### 1. 서비스 완성

- 1-1. 전체 게시글 목록 조회 API

  - 제목, 작성자명, 작성 날짜를 조회하기
  - 작성 날짜 기준으로 내림차순 정렬하기

- 1-2. 게시글 작성 API

  - 제목, 작성자명, 비밀번호, 작성 내용을 입력하기

- 1-3. 게시글 조회 API

  - 제목, 작성자명, 작성 날짜, 작성 내용을 조회하기
    <br>(검색 기능이 아닙니다. 간단한 게시글 조회만 구현해주세요.)

- 1-4. 게시글 수정 API
  - API를 호출할 때 입력된 비밀번호를 비교하여 동일할 때만 글이 수정되게 하기
- 1-5. 게시글 삭제 API

  - API를 호출할 때 입력된 비밀번호를 비교하여 동일할 때만 글이 삭제되게 하기

- 1-6. 댓글 목록 조회

  - 조회하는 게시글에 작성된 모든 댓글을 목록 형식으로 볼 수 있도록 하기
  - 작성 날짜 기준으로 내림차순 정렬하기

- 1-7. 댓글 작성

  - 댓글 내용을 비워둔 채 댓글 작성 API를 호출하면 "댓글 내용을 입력해주세요" 라는 메세지를 return하기
  - 댓글 내용을 입력하고 댓글 작성 API를 호출한 경우 작성한 댓글을 추가하기

- 1-8. 댓글 수정

  - 댓글 내용을 비워둔 채 댓글 수정 API를 호출하면 "댓글 내용을 입력해주세요" 라는 메세지를 return하기
  - 댓글 내용을 입력하고 댓글 수정 API를 호출한 경우 작성한 댓글을 수정하기

- 1-9. 댓글 삭제
  - 원하는 댓글을 삭제하기

#### 2. Directory Structure

```
.
├── app.js<br>
├── routes<br>
│   ├── index.js
│   ├── comments.js
│   └── posts.js
└── schemas
    ├── index.js
    ├── comment.js
    └── post.js
```

- Directory Structure

  - 위와 같은 Directory Structure로 서비스를 구현하기
  - Middleware를 이용하여 Router를 분리해주세요.

#### 3. AWS 배포

- EC2 배포
  - Ubuntu EC2 를 구매한 뒤, 노드 포트(3000)를 80번 포트로 포워딩해서 포트 번호 없이도 서비스에 접속 가능하도록 하기
    <br>→ 수업시간에 배웠던 iptable을 사용하기
- mongoDB를 EC2 내부에 설치해서 연결하기
- 배포 후 ip 주소를 제출해주세요!

#### 4. Why?: 과제 제출시에는 아래 질문의 답변과 함께 제출해주세요.

- 4-1. 수정, 삭제 API에서 Resource를 구분하기 위해서 Request를 어떤 방식으로 사용하셨나요? (param, query, body)
- 4-2. HTTP Method의 대표적인 4가지는 GET, POST, PUT, DELETE 가있는데 각각 어떤 상황에서 사용하셨나요?
- 4-3. RESTful한 API를 설계했나요? 어떤 부분이 그런가요? 어떤 부분이 그렇지 않나요?
- 4-4. 역할별로 Directory Structure를 분리하였을 경우 어떠한 이점이 있을까요?

**_Postman이나 Thunder Client를 이용해 HTTP 메서드 요청을 시도해보세요!_**

### ✔️ Warning : 꼭 지켜야 할 것과 하지 않아도 되는 것!

#### 1. 이것은 꼭 지켜주세요(Do's)

- 과제 요구 사항은 모두 지켜주세요. 특정 기능을 임의로 배제하면 안 됩니다!

#### 2. 이것은 하지 않으셔도 돼요(Don'ts)

- 과제 추가 기획 때문에 고민하지 마세요. 위에 작성된 과제 요구 사항만 지키면 됩니다!

  → 좋은 예 (⭕ ): "아하, 결국 express로 기본 CRUD 가 가능한 서비스를 만들고 배포하면 되는거구나!"
  <br>→ 나쁜 예 (❌ ): "로그인 없어도 되나? 다른 기능 페이지가 더 있어야 하지 않을까?"
