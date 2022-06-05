/**
 * test("테스트 설명", () => {
 *   expect("검증 대상, 함수도 가능").toXxx("기대 결과");
 * });
 *
 * toXxx 부분에 들어갈 jest 메서드를 test matcher 라고 함
 *
 * Jest는 기본적으로 test.js로 끝나거나,
 * __test__ 디렉터리 안에 있는 파일들은 모두 테스트 파일로 인식함
 *
 * 만약 특정 테스트 파일만 실행하고 싶은 경우에는
 * npm test <파일명 이나 경로>를 입력하면 됨
 */

test("1 is 1", () => {
  expect(1).toBe(1);
});

// toEqual: 객체 검증

function getUser(id) {
  if (id <= 0) throw new Error("Invalid ID"); // toThrow 검증용 라인
  return {
    id,
    email: `user${id}@test.com`,
  };
}

// test("return a user object", () => {
//   expect(getUser(1)).toBe({
//     id: 1,
//     email: `user1@test.com`,
//   });
// });
// If it should pass with deep equality, replace "toBe" with "toStrictEqual" 오류
// 그래서 아래로...

test("return a user object", () => {
  expect(getUser(1)).toEqual({
    id: 1,
    email: `user1@test.com`,
  });
});

// toBeTruthy, toBeFalsy: JS상 모든 타입의 값들을 true 아니면 false 간주하는 규칙에 의거해 판단

test("number 0 is falsy but string 0 is truthy", () => {
  expect(0).toBeFalsy();
  expect("0").toBeTruthy();
});

// toHaveLength, toContain: 배열의 길이, 또는 특정 원소 여부를 체크

test("array", () => {
  const colors = ["Red", "Yellow", "Blue"];
  expect(colors).toHaveLength(3);
  expect(colors).toContain("Yellow");
  expect(colors).not.toContain("Green");
});

// toMatch: 정규식 기반의 문자열 검증 테스트

test("string", () => {
  expect(getUser(1).email).toBe("user1@test.com");
  expect(getUser(2).email).toMatch(/.*test.com$/);
});

// toThrow: 예외 발생 여부를 테스트

// test("throw when id is non negative", () => {
//   expect(getUser(-1)).toThrow();
//   expect(getUser(-1)).toThrow("Invalid ID");
// });
// 이렇게 하면 실패; 반드시 expect() 함수에 넘기는 검증 대상을 함수로 한 번 감싸줘야 함
// 그렇지 않으면 예외 발생 여부를 체크하는 것이 아니라, 테스트 실행 도중 정말 그 예외가 발생하기 때문임
// 그래서 아래로 바꿈

test("throw when id is non negative", () => {
  expect(() => getUser(-1)).toThrow();
  expect(() => getUser(-1)).toThrow("Invalid ID");
});
