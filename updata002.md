# 🚀 升级需求：Flask + Vue + WebSocket（交互版）

---

## 🎯 目标

将当前“展示型网站”升级为：

> ✅ **支持用户交互 + 实时同步的 WebSocket 应用**

---

## 🔧 核心功能

### 1️⃣ 初始化数据

* 连接时返回完整数据（一次性）
* 事件名：`init_data`

数据结构：

```json
{
  "name": "Simon",
  "title": "游戏开发者",
  "skills": ["C#", "Unity", "HTML"],
  "link": "https://github.com/"
}
```

---

### 2️⃣ 添加 Skill（新增）

#### 前端 → 后端

* 事件：`add_skill`
* 数据：

```json
{
  "skill": "Python"
}
```

---

#### 后端处理

逻辑：

* 去空格（trim）
* 判空
* 判重
* 合法才加入列表

---

#### 后端 → 前端（广播）

* 事件：`update_skills`

```json
{
  "skills": ["C#", "Unity", "HTML", "Python"]
}
```

* 必须：`broadcast=True`

---

## 🔄 数据流

```
前端输入 → add_skill
        ↓
后端校验 + 更新
        ↓
广播 update_skills
        ↓
所有客户端同步更新
```

---

## 🖥️ 前端要求（Vue）

必须实现：

* `data()`：

  * `profile`（整体数据对象）
  * `newSkill`（输入绑定）
* `v-model`（输入框）
* `v-for`（技能列表）
* `mounted()`（建立 WebSocket）
* `socket.emit()`（发送）
* `socket.on()`（接收）

---

## 🖥️ 后端要求（Flask）

必须实现：

* `@socketio.on("connect")` → `init_data`
* `@socketio.on("add_skill")`
* 内存维护 `skills` 列表
* 广播更新

---

## 📱 布局要求

* `.container` 居中
* `max-width`（如 800px）
* `margin: 0 auto`
* 响应式不溢出

---

## ❗限制

* ❌ 不用 HTTP API
* ❌ 不用内联样式
* ❌ 不用 UI 框架
* ✅ 必须 WebSocket 通信
* ✅ 必须使用 class

---

## 🧠 关键原则

* 数据以**后端为准（单一数据源）**
* 所有修改必须走：前端 → 后端 → 广播
* 前端只负责展示和触发行为

---

## ✅ 完成标志

* 可输入 skill 并添加
* 所有客户端实时同步
* 页面结构清晰 + 自适应
