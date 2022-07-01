// https://jacobgrowthstory.tistory.com/24

// 이진 탐색 트리 (Binary Search Tree) 자료구조 설명
// - 자식 노드가 최대 두 개인 노드들로 구성된 트리로 각 노드에 값이 있음

// - 노드의 왼쪽 서브트리에는 그 노드의 값보다 작은 값들을 지닌 노드들로 구성

// - 노드의 오른쪽 서브트리에는 그 노드의 값보다 큰 값들을 지닌 노드들로 구성

// - 좌우 하위 트리는 각각이 다시 이진 탐색 트리 (sub tree)

// 코드 작성 포인트
// 1. 노드에 값 입력 및 자식 노드 선언

//   - (루트)노드를 선언 후 입력 값을 할당하기

//   - '왼쪽 자식 노드'와 '오른쪽 자식 노드'를 선언 후 null을 할당하기

// 2. 자식 노드에 값을 추가하기

//   - 입력 값을 노드 값과 비교해서 작으면 왼쪽 자식 노드로, 크면 오른쪽 자식 노드로 이동

//   - 자식 노드에 값이 없으면 new 키워드로 새로운 노드를 만들어 값과 함께 자식 노드에 할당하기

//   - 자식 노드에 값이 있으면 재귀를 사용하여 값이 없는 depth까지 이동하기

// 3. 트리에 값이 있는지 탐색하기

//   - 찾는 값과 노드의 값이 같으면 true를 반환하기

//   - 찾는 값이 노드에 없으면 크기에 따라 왼쪽 또는 오른쪽 자식 노드로 이동하기

//   - 자식 노드가 null이면 false를 반환하기

//   - 자식 노드에 찾는 값이 없으면 재귀를 통해 sub tree의 자식 노드로 이동하기

// 이진 탐색 트리 (Binary Search Tree) 구현 코드 (JavaScript)

// 이진 탐색 트리를 구현하기 위한 class 정의

class BinarySearchTree {
  //constructor를 구현 : constructor로 만든 객체는 이진 탐색 트리의 노드가 됨
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // tree에 value를 삽입하는 메소드 구현
  insert(value) {
    // 인자의 value가 this.value보다 작을 경우 왼쪽 노드에서 작업
    if (value < this.value) {
      // this.left에 아무것도 없을 경우, 새로운 자식 노드를 추가
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      }
      // this.left의 자식 노드가 있을 경우, 자식 노드에서 insert 재귀를 사용
      else {
        this.left.insert(value);
      }
    }
    // 인자의 value가 this.value보다 클 경우, 오른쪽 노드에서 작업
    else if (value > this.value) {
      // this.right에 아무것도 없을 경우, 새로운 자식 노드를 추가
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      }
      // this.left의 자식 노드가 있을 경우, 자식 노드에서 insert 재귀를 사용
      else {
        this.right.insert(value);
      }
    } else {
      // 이미 value값을 포함
    }
  }

  // tree의 value값을 탐색하는 메소드 구현
  contains(value) {
    // 자식 노드에 값이 없다면 this.left와 this.right는 null을 반환함
    // null을 false로 변경하기 위해 '!!' 사용
    // !null === true
    // !!null === false

    // 찾는 value값이 노드의 value와 일치한다면 true를 리턴
    if (value === this.value) {
      return true;
    }
    // 찾는 value값이 노드의 value 보다 작다면 왼쪽에서 작업
    // 비어 있지 않다면 contains의 재귀를 진행
    if (value < this.value) {
      return !!(this.left && this.left.contains(value));
    }
    // 찾는 value값이 노드의 value 보다 크다면 오른쪽에서 작업
    // 비어 있지 않다면 contains의 재귀를 진행
    if (value > this.value) {
      return !!(this.right && this.right.contains(value));
    }
  }

  // tree 순회 메소드 구현 : 함수를 매개변수로 받아 콜백 함수에 값을 적용시키기

  //tree를 전위 순회
  preorder(callback) {
    callback(this.value);
    if (this.left) {
      this.left.preorder(callback);
    }
    if (this.right) {
      this.right.preorder(callback);
    }
  }

  // tree를 중위 순회
  inorder(callback) {
    if (this.left) {
      this.left.inorder(callback);
    }
    callback(this.value);
    if (this.right) {
      this.right.inorder(callback);
    }
  }

  //tree를 후위 순회
  postorder(callback) {
    if (this.left) {
      this.left.postorder(callback);
    }
    if (this.right) {
      this.right.postorder(callback);
    }
    callback(this.value);
  }
}
