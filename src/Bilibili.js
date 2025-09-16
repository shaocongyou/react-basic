import React, { useState } from "react";

import "./Bilibili.css";

const Bilibili = () => {
  // 一开始默认的评论
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "评论者1",
      content: "评论内容1",
      likes: 10,
      dislikes: 2,
      date: new Date("2015-5-17"),
    },
    {
      id: 2,
      author: "评论者2",
      content: "评论内容2",
      likes: 50,
      dislikes: 1,
      date: new Date("2015-5-28"),
    },
    {
      id: 3,
      author: "评论者3",
      content: "评论内容3",
      likes: -8,
      dislikes: 0,
      date: new Date("2015-5-19"),
    },
  ]);

  // 输入框的值
  const [inputValue, setInputValue] = useState("");

  // 添加评论的函数
  const handleAddComment = () => {
    if (!inputValue.trim()) return; // Prevent adding empty comments
    setComments([
      ...comments,
      {
        id: comments.length + 1,
        author: "评论者0",
        content: inputValue,
        likes: 0,
        dislikes: 0,
      },
    ]);
    setInputValue("");
  };

  // 删除评论的函数
  const handleDeleteComment = (e, commentId) => {
    setComments(comments.filter((comment) => comment.id !== commentId));
  };

  // 点赞评论的函数
  const handleLikeComment = (e, commentId) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      )
    );
  };

  // 反对评论的函数
  const handleAgainstComment = (e, commentId) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, dislikes: comment.dislikes + 1 }
          : comment
      )
    );
  };

  const hotComments = (comments) => {
    const sorted = bubbleSort(comments);
    setComments(sorted);
    setWhich("热度");
  };

  const bubbleSort = (arr) => {
    const result = [...arr];
    const n = result.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (result[j].likes < result[j + 1].likes) {
          [result[j], result[j + 1]] = [result[j + 1], result[j]];
        }
      }
    }
    return result;
  };

  const latestComments = (comments) => {
    // 这边我希望用有名气的第三方库来实现
    const sorted = [...comments].sort((a, b) => b.date - a.date);
    setComments(sorted);
    setWhich("最新");
  };

  const [which, setWhich] = useState("无");

  return (
    <div>
      <div className="container gap-8">
        <strong>
          <span>评论</span>
        </strong>
        <span></span>
        <span className={`span-button ${which === '热度' ? 'font-bold' : ''}`} onClick={() => hotComments(comments)}>
          热度
        </span>
        <span>|</span>
        <span className={`span-button ${which === '最新' ? 'font-bold' : ''}`} onClick={() => latestComments(comments)}>
          最新
        </span>
        <span>
          最近点击的排序按钮：{which}
        </span>
      </div>
      <div className="div-height-10"></div>
      <div className="container padding-left-20 gap-8">
        <span>评论者0</span>
        <input
          placeholder="写下你的评论..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddComment}>发布评论</button>
      </div>
      <div className="container ">
        <ul className="padding-left-20  gap-8">
          {comments.map((comment) => (
            <li key={comment.id}>
              <span>{comment.author}</span>
              <span>{comment.content}</span>
              <span
                className="span-button"
                onClick={(e) => handleLikeComment(e, comment.id)}
              >
                赞同
              </span>
              <span>{comment.likes}</span>
              <span
                className="span-button"
                onClick={(e) => handleAgainstComment(e, comment.id)}
              >
                反对
              </span>
              <span>{comment.dislikes}</span>
              <span
                className="span-button"
                onClick={(e) => handleDeleteComment(e, comment.id)}
              >
                删除
              </span>
              <span>{comment.date.toLocaleDateString()}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bilibili;
