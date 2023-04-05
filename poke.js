const allPokeUrl =
  "https://testbucket-jangrubin.s3.ap-northeast-2.amazonaws.com/%ED%85%8C%EC%8A%A4%ED%8A%B8+%ED%8F%B4%EB%8D%94/test.JSON";
const xhr = new XMLHttpRequest();
xhr.open("GET", allPokeUrl);
// xhr.responseType = "json";
xhr.send();
// 서버의 응답을 기다리고, 그것의 처리까지와 관련된 섹션 -> 웹페이지가 로드 됐을 때 기본적으로 모든 포켓몬의 정보를 불러와야 함
xhr.onload = function () {
  let allPokeInfo = JSON.parse(xhr.response);

  // 모든 포켓몬 정보가 담긴 json파일이 js 객체형태로 나타난다
  console.log(allPokeInfo);
  // json 파일이 객체형태로 나타나서 개발자 도구로 읽고 result의 0번째 배열에 접근 -> 첫번째 포켓몬 접근 성공
  console.log(allPokeInfo);
};
