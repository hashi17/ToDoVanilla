import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得して初期化する
  const inputText = document.getElementById("add-text").value;
  createIncompleteList(inputText);
  //console.log(inputText);
  document.getElementById("add-text").value = "";

  //console.log(li);
  //console.log(div);
  //console.log(p);
  //console.log(completeButton);
  //console.log(deleteButton);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // liタグ生成
  const li = document.createElement("li");

  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグ生成
  const p = document.createElement("p");
  p.className = "todo-txt";
  p.innerText = text;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li)を削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    // ToDo内容テキストを取得(divまで)
    const divTarget = completeButton.parentNode;
    const text = divTarget.firstElementChild.innerText;

    // li以下を初期化
    const addTarget = completeButton.parentNode.parentNode;
    addTarget.textContent = null;

    // divタグ生成
    const div = document.createElement("div");
    div.className = "list-row";

    // pタグ生成
    const p = document.createElement("p");
    p.className = "todo-txt";
    p.innerText = text;

    // button(完了)タグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキストの取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });
    div.appendChild(p);
    div.appendChild(backButton);
    addTarget.appendChild(div);
    console.log(addTarget);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li)を削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  // liタグの下にdivタグを入れる
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
