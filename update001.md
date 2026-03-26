# 🚀 项目升级需求：个人主页（Flask + Vue + WebSocket 交互版）

---

## 🎯 项目目标（升级版）

在已有“展示型网站”基础上，升级为：

> ✅ **支持用户交互的实时网站（双向通信）**

核心能力：

* 前端可以发送数据
* 后端可以处理并广播
* 页面实时更新

---

## 🧱 技术架构（保持不变）

* 后端：Python + Flask + Flask-SocketIO
* 前端：Vue
* 通信：WebSocket（socket.io）

---

## 🔥 新增功能：动态添加 Skill

---

## 1️⃣ 功能描述

用户可以：

1. 在输入框输入技能（例如：Python）
2. 点击按钮提交
3. 页面立即更新技能列表（所有客户端同步更新）

---

## 🔄 数据流（必须理解）

```
前端输入 → emit(add_skill)
        ↓
后端接收 → 更新数据
        ↓
后端广播 → emit(update_skills)
        ↓
前端接收 → 更新 UI
```

---

## 📡 WebSocket 事件设计（必须一致）

### 前端 → 后端

#### 事件名：`add_skill`

发送数据格式：

```json
{
  "skill": "Python"
}
```

---

### 后端 → 前端

#### 事件名：`update_skills`

返回数据格式：

```json
{
  "skills": ["C#", "Unity", "HTML", "Python"]
}
```

---

## 🖥️ 前端需求（Vue）

---

### 1️⃣ 数据结构（data）

必须包含：

* `skills`：技能列表（数组）
* `newSkill`：输入框绑定值

---

### 2️⃣ 页面结构

必须新增：

* 输入框（绑定 `newSkill`）
* 按钮（点击触发发送）
* 技能列表（已有，用 `v-for`）

---

### 3️⃣ 必须使用的 Vue 能力

* `data()` —— 存储状态
* `v-model` —— 绑定输入框
* `v-for` —— 渲染列表
* `methods` —— 定义发送方法
* `mounted()` —— 建立 socket 连接
* `socket.emit()` —— 发送数据
* `socket.on()` —— 接收更新

---

## 🧠 前端逻辑要求

点击按钮时：

1. 检查输入不能为空
2. 发送 WebSocket：

```js
socket.emit("add_skill", { skill: this.newSkill })
```

3. 清空输入框

---

## 🧪 前端监听更新

```js
socket.on("update_skills", (data) => {
  this.skills = data.skills
})
```

---

## 🖥️ 后端需求（Flask）

---

### 1️⃣ 数据存储（内存即可）

```python
skills = ["C#", "Unity", "HTML"]
```

---

### 2️⃣ WebSocket 事件处理

#### 接收添加技能

```python
@socketio.on("add_skill")
def handle_add_skill(data):
```

逻辑：

1. 获取 `data["skill"]`
2. 添加到 skills 列表
3. 广播更新

---

### 3️⃣ 广播数据

```python
emit("update_skills", {"skills": skills}, broadcast=True)
```

---

## 📱 样式与布局要求（保持）

必须满足：

* `.container` 居中布局
* `max-width` 限制宽度（如 800px）
* `margin: 0 auto`
* 响应式（手机不溢出）

---

## ❗限制（必须遵守）

* ❌ 不使用内联样式
* ❌ 不使用 UI 框架
* ❌ 不使用 HTTP API（全部走 WebSocket）
* ✅ 必须使用 class 控制样式
* ✅ 必须前后端解耦

---

## 🚀 扩展方向（完成后可选）

* 删除 skill
* 多用户同步（已具备基础）
* 持久化（接数据库）
* 用户登录系统

---

## 🧠 核心学习目标

完成本升级后，你应该掌握：

* WebSocket 双向通信
* 事件驱动架构
* Vue 状态管理基础
* 前后端数据流设计
* 实时 UI 更新机制

---

## ❓关键思考（必须能回答）

👉 为什么前端不能直接修改 skills，而必须通过后端？

（用一句话说明）
