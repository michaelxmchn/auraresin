# AuraResin Studio - 订阅者管理文档

## 概述

网站集成了 Resend 作为邮件订阅服务，用于收集和管理"独家发售限量提醒"的客户邮箱。

---

## 一、订阅流程

```
用户输入邮箱 → 点击 Notify Me → 前端调用 /api/subscribe → 存入 Resend Audience
```

### 订阅接口

**Endpoint:** `POST /api/subscribe`

**请求体:**
```json
{
  "email": "customer@example.com"
}
```

**响应（成功）:**
```json
{
  "success": true,
  "message": "Subscribed successfully!"
}
```

**响应（已订阅）:**
```json
{
  "success": true,
  "message": "Already subscribed!"
}
```

**响应（失败）:**
```json
{
  "error": "Invalid email address"
}
```

---

## 二、查看订阅者

### 方法1：Resend 后台（手动查看）

1. 登录 https://resend.com
2. 进入 **Audiences** 页面
3. 选择 `AuraResin Subscribers`（Audience ID: `26de410a-3d45-410b-bccb-66ebced1037c`）
4. 查看 **Contacts** 列表

功能：
- 查看所有订阅者邮箱和订阅时间
- 手动添加/删除联系人
- 导出 CSV 表格
- 查看退订状态

### 方法2：API 获取（AI 自动处理）

**Endpoint:** `GET /api/subscribers`

**响应:**
```json
{
  "success": true,
  "contacts": [
    { "email": "customer1@example.com", "created_at": "2024-01-15T10:30:00Z" },
    { "email": "customer2@example.com", "created_at": "2024-01-16T14:20:00Z" }
  ]
}
```

此接口用于 AI 自动获取订阅者列表，以便后续发送营销邮件。

---

## 三、AI 自动发送通知邮件

当 AI 生成新产品后，可以自动触发以下流程：

```
1. AI 生成新产品图片和描述
2. AI 调用 GET /api/subscribers 获取订阅者邮箱列表
3. AI 调用 Resend API 发送批量邮件给所有订阅者
4. 邮件内容包含新产品链接和图片
```

### 发送邮件接口

**Endpoint:** `POST /api/send-newsletter`

**请求体:**
```json
{
  "subject": "New Arrival: The Azure Geode Pillar",
  "content": "<h1>New Product!</h1><p>Check out our latest epoxy resin art...</p>"
}
```

**响应:**
```json
{
  "success": true,
  "message": "Newsletter sent to X subscribers"
}
```

---

## 四、相关账号信息

| 服务 | 账号/密钥 |
|-----|----------|
| Resend API Key | `re_JzCzkGDuHBESpQaou487kUJb` |
| Resend Audience ID | `26de410a-3d45-410b-bccb-66ebced1037c` |
| 发件人邮箱 | michael@carchina.ltd |

---

## 五、本地开发

### 安装依赖

```bash
npm install
```

### 本地运行

```bash
vercel dev
```

### 部署

```bash
vercel deploy --yes --prod
```

### 设置环境变量

```bash
vercel env add RESEND_API_KEY production
```

---

## 六、文件结构

```
auraresin/
├── api/
│   ├── subscribe.js      # 订阅接口 - 接收邮箱存入 Resend
│   └── subscribers.js    # 获取订阅者列表（可选启用）
├── index.html            # 主站页面（含订阅表单）
├── vercel.json          # Vercel 配置
├── package.json         # NPM 依赖
├── docs/
│   └── SUBSCRIBERS.md   # 本文档
└── README.md            # 项目总览
```

---

## 七、注意事项

1. **隐私合规**：收集邮箱前建议在网站添加隐私政策页面
2. **退订管理**：Resend 后台支持一键退订，需在邮件底部添加退订链接
3. **频率限制**：Resend 免费版每天 100 封，批量发送注意控制频率
4. **API 安全**：生产环境应给 `/api/subscribers` 接口添加访问密码

---

*最后更新：2026-05-27*