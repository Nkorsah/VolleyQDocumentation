---
sidebar_label: "Player Service"
sidebar_position: 3
---

# Player Service

Handles user account management. Updates the DB accordingly

---

## Add New User

**POST** `/api/player`

Creates a new user.

### Request Body

| Field | Type | Required | Description |
|-------|------|----------|------------|
| username | string | ✅ | Unique username |
| password | string | ✅ | User password |
| email | string | ✅ | User email |

---

### Responses

| Status | Description |
|--------|------------|
| 200 | New user created |
| 400 | Invalid username/password |
| 500 | Internal Server Error |

---

## Get Users

**GET** `/api/player`

Returns a list of users.

### Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|------------|
| name | string | ❌ | Filter by name |

---

### Responses

| Status | Description |
|--------|------------|
| 200 | List of users |
| 400 | Invalid name datatype |
| 404 | User not found |
| 500 | Internal Server Error |

---

## Update User

**PUT** `/api/player/{userId}`

Updates user information.

### Responses

| Status | Description |
|--------|------------|
| 400 | Invalid request |
| 404 | User not found |
| 500 | Internal Server Error |