// https://jacobgrowthstory.tistory.com/20

// Tree 자료구조 설명
// - 무방향 그래프의 한 구조로 하나의 뿌리로부터 사방으로 뻗은 형태의 자료구조

// - 계층적으로 표현되고 아래로만 뻗어나가 사이클이 없음

// - 용어

// 노드(Node) : 트리 구조를 이루는 모든 개별 데이터
// 루트(Root) : 트리 구조의 시작점이 되는 노드
// 부모 노드(Parent Node) : 두 노드가 상하관계로 연결되었 있을 때 상대적으로 루트에서 가까운 노드
// 자식 노드(Child Node) : 두 노드가 상하관계로 연결되어 있을 때 상대적으로 루트에서 먼 노드
// 리프(Leaf) : 트리 구조의 끝지점이고 자식 노드가 없는 노드
// 깊이(Depth) : 트리 구조에서는 루트로부터 하위 계층의 특정 노드까지의 깊이(depth)를 표현

// 코드 작성 포인트
// 1. 현재 노드의 값을 받을 변수 선언

// 2. 자식 노드의 값을 담기 위한 배열을 변수로 선언

// 3. 자식 노드 생성 : new 키워드를 통해 객체 생성 후 위에서 만든 배열에 push 해주기

// 4. 트리 노드 값을 조회 : 현재 노드를 먼저 조회한 뒤 재귀 패턴으로 자식 노드 조회

// Tree 구조를 구현하기 위한 class 정의하기

class Tree {
  //tree의 constructor를 생성 : tree의 자식 노드들을 엘리먼트로 담을 children 배열로 선언
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  // 자식 노드 생성 메소드 구현 : new 키워드로 자식 노드를 생성 한 후, children 배열에 push
  insertNode(value) {
    const childNode = new Tree(value);
    this.children.push(childNode);
  }

  // tree에서 value값을 탐색하기 위한 메소드 구현
  contains(value) {
    // 현재 노드의 value 값이 찾는 값과 일치한다면 true 반환
    if (this.value === value) {
      return true;
    }

    // 자식 노드에서 value값을 탐색하기 위해 반복문과 재귀패턴 사용
    for (let childNode of this.children) {
      if (childNode.contains(value)) {
        return true;
      }
    }
    // 조건에 해당하지 않으면 false 반환
    return false;
  }
}
