const tasks = [];

const message = {
  task: 'タスクを入力してください',
  genre: 'ジャンルを入力してください',
  success: '新しいタスクを追加しました'
};

const header = {
  text: '現在持っているタスク一覧\n',  
  frame: '========================\n'
};

const dispItem = {
  separation: ' ： ',
  task: '【内容】',
  genre: '、 【ジャンル】'
}

// タスクの表示処理
const dispTask = () => {
  console.log(header.frame + header.text + header.frame);
  tasks.forEach((value, index) => console.log(index + dispItem.separation + dispItem.task + value.task + dispItem.genre + value.genre));
};

// タスクの追加処理
const addTask = () => {
  const inputTask = prompt(message.task);
  const inputGenre = prompt(message.genre);
  tasks.push({task: inputTask, genre: inputGenre});
  dispTask();
  alert(message.success);
};

// 初期表示
tasks.push({task: '机を片付ける', genre: '掃除'});
tasks.push({task: '牛乳を買う', genre: '買い物'});
tasks.push({task: '散歩する', genre: '運動'});
dispTask();

// 追加表示
setTimeout(addTask, 5000);