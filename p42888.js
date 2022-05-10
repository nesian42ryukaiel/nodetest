function solution(record) {
  const answer = [];
  const cparse = [];
  const idmap = new Map();
  const message = (name, dir) => {
    if (dir != 0) {
      return name + "님이 들어왔습니다.";
    } else {
      return name + "님이 나갔습니다.";
    }
  };
  const parseid = (id) => {
    return;
  };
  for (let i = 0; i < record.length; i++) {
    const cmd = record[i].split(" ");
    if (cmd[0] === "Enter") {
      idmap.set(cmd[1], cmd[2]);
      cparse.push([cmd[1], 1]);
    } else if (cmd[0] === "Leave") {
      cparse.push([cmd[1], 0]);
    } else {
      idmap.set(cmd[1], cmd[2]);
    }
  }
  for (let i = 0; i < cparse.length; i++) {
    answer.push(message(idmap.get(cparse[i][0]), cparse[i][1]));
  }
  return answer;
}
