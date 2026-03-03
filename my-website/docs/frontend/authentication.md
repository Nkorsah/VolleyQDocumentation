---
sidebar_label: "Authentication"
sidebar_position: 1
---

# Authentication Layer

Handles user authentication using Firebase and Firestore.

---

## InitializeFirebase(firebaseConfig)

Initializes Firebase in the application.

### Parameters
- `firebaseConfig` (object)

---

## RegisterUser(email, password)

Creates a new user account.

### Parameters
- `email` (string)
- `password` (string)

---

## LoginUser(email, password)

Authenticates a user.

---

## LogoutUser()

Logs out the current user.

---

## ObserveAuthState(callback)

Listens for login/logout changes.

---

## CreateUserProfile(uid, userData)

Creates a Firestore profile document.

---

## GetUserProfile(uid)

Retrieves profile data.