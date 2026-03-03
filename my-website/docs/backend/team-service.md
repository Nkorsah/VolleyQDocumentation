---
sidebar_label: "Team Service"
sidebar_position: 2
---

# Team Service

Manages team creation, updates, and deletion. Updates the firebase DB accourdingly

---

## Create New Team

### **POST** `/api/team`

Creates a new team.

### Request Body

| Field | Type | Required | Description |
|-------|------|----------|------------|
| name | string | ✅ | Team name |
| players | array | ✅ | List of player IDs |
| color | string | ✅ | Color of the team |
| private Lobby | boolean | ✅ | Makes the team password protected |


---

### Responses

| Status | Description |
|--------|------------|
| 200 | New team created |
| 400 | Invalid team object |
| 401 | Unauthorized |
| 500 | Internal Server Error |

---

## Delete Team

### **DELETE** `/api/team/{teamId}`

Deletes an existing team.

### Path Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|------------|
| teamId | string | ✅ | Unique team identifier |

---

### Responses

| Status | Description |
|--------|------------|
| 401 | Unauthorized |
| 500 | Internal Server Error |

---

## Manage Team

### **PUT** `/api/team/{teamId}`

Updates team information.

### Responses

| Status | Description |
|--------|------------|
| 401 | Unauthorized |
| 500 | Internal Server Error |