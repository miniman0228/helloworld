# 🚀 项目：个人主页（Flask + Vue + WebSocket 实时版）

---

## 🧱 技术架构

* **后端**：Python + Flask + WebSocket（Flask-SocketIO）
* **前端**：Vue
* **通信方式**：WebSocket（实时通信）

👉 核心思想：

> 前后端通过 WebSocket 建立长连接，实现数据实时推送，而不是传统 HTTP 请求

---

## 🎯 功能需求

### 1️⃣ 后端（Flask）

#### WebSocket 服务

需要实现：

* 客户端连接时触发事件（`connect`）
* 向前端发送个人信息数据

#### 数据格式（必须一致）

```json
{
  "name": "Simon",
  "title": "游戏开发者",
  "description": "这是我的个人网站",
  "skills": ["C#", "Unity", "HTML"],
  "link": "https://github.com/"
}
```

---

### 2️⃣ 前端（Vue）

页面需要展示：

* 👤 名字（主标题）
* 📌 title（副标题）
* 📝 description（介绍）
* 🧩 skills（列表）
* 🔗 link（可点击）

---

## 🧩 页面结构要求

必须包含以下 class：

* `.container`（整体容器）
* `.title`（主标题）
* `.subtitle`（副标题）
* `.skills`（技能列表）

---

## 📱 自适应布局（必须实现）

要求：

* 页面内容水平居中
* 最大宽度限制（如 800px）
* 小屏设备不溢出

### 提示关键词：

* `max-width`
* `margin: 0 auto`
* `padding`
* `box-sizing: border-box`

---

## 🔥 Vue 必须使用的能力

必须实现：

* `data()` —— 存储后端数据
* `mounted()` —— 建立 WebSocket 连接
* `v-for` —— 渲染 skills 列表
* `v-bind` (`:`) —— 绑定链接
* WebSocket 监听（`onmessage` 或 socket.io 事件）

---

## 🔌 WebSocket 通信要求

### 后端：

* 启动 WebSocket 服务
* 客户端连接时发送数据

### 前端：

* 页面加载时建立连接
* 接收数据并更新 UI

---

## 🧱 项目结构

```
project/
├── backend/
│   ├── app.py
│   └── requirements.txt
└── frontend/
    ├── index.html
    ├── main.js
    └── style.css
```

---

## ❗限制（必须遵守）

* ❌ 不使用内联样式（style=""）
* ❌ 不使用 UI 框架（如 Element / Vuetify）
* ❌ 不使用 HTTP API（必须走 WebSocket）
* ❌ 不复制模板代码
* ✅ 必须自己实现 CSS

---

## 🧠 核心学习目标

通过本项目，你需要掌握：

* WebSocket 基本通信流程
* 前后端数据流动方式
* Vue 数据驱动视图
* 基础响应式布局
* 前后端解耦思想

---

## 🚦 开发步骤建议（强烈建议按顺序）

1. 搭建 Flask + WebSocket 服务
2. 测试后端能发送数据
3. Vue 建立 WebSocket 连接
4. 控制台打印接收到的数据
5. 渲染到页面
6. 最后优化 CSS 和布局

---

## 🎯 最终效果

打开网页后：

* 自动连接后端
* 页面展示个人信息
* 技能列表正确渲染
* 页面布局居中且自适应

---


