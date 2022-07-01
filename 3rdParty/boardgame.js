// https://jacobgrowthstory.tistory.com/25

// 문제설명
// 조건
// - N * N의 크기를 가진 2차원 행렬 위에서 게임 진행

// - 말은 상/하/좌/우로 이동 (U, D, L, R은 각각 상, 하, 좌, 우를 의미)

// - 말은 좌표 왼쪽 상단(0, 0)부터 시작하며, 움직일 때마다 그 칸 안의 요소인 숫자를 획득

// - 방문한 곳을 또 방문해도 숫자를 획득

// - 보드 밖을 나간 말은 OUT 처리하기

// 전달인자
// - board : number 타입의 2차원 배열 (2 <= board.length <= 1,000)

// - operation : U, L, D, R가 쓰여진 string 타입의 문자열

// 출력 값
// - number 타입을 리턴하며, 말이 지나간 칸에서 요소들의 합을 리턴

// 코드 작성 포인트
// - 말이 보드 밖으로 나갔는지 여부를 판단하기 위한 유효성 검사 함수 만들기

// - 말이 상/하/좌/우로 이동하는 것은 더해줄 인덱스로 표현하기 ( R: [0,1], L: [0,-1] )

// - 구조분해할당으로 y축과 x축에 인덱스를 더하여 말을 이동시키기

// - 만약 방문한 곳을 또 방문했을 때 숫자를 얻을 수 없다면, 방문한 칸의 엘리먼트는 0으로 변경해야 함

// - 만약 방문한 곳에서 중복으로 숫자를 얻을 수 없다면, 반복문 안에 다음 코드 추가 : board[Y][X]=0

function boardGame(board, operation) {
  // 상하좌우로 인덱스를 이동시키기 위한 배열을 값으로 하는 객체
  const DIR = {
    U: [-1, 0],
    D: [1, 0],
    L: [0, -1],
    R: [0, 1],
  };

  // 말이 보드판을 벗어나는지 확인하기 위한 유효성 검사 함수
  const LEN = board.length;
  const isValid = (y, x) => 0 <= y && y < LEN && 0 <= x && x < LEN;

  let Y = 0; // 말의 Y축 인덱스
  let X = 0; // 말의 X축 인덱스
  let score = 0; // 최종 점수

  // operation 배열의 방향 요소에 따라 말을 이동시키기
  for (let i = 0; i < operation.length; i++) {
    const [dY, dX] = DIR[operation[i]]; // 구조분해할당
    Y += dY; // operation의 요소에 따라 Y축의 인덱스 이동
    X += dX; // operation의 요소에 따라 X축의 인덱스 이동

    if (isValid(Y, X) === false) return "OUT"; // 유효성 검사
    score += board[Y][X]; // 말이 지나간 칸의 값을 더하기
  }
  return score;
}
