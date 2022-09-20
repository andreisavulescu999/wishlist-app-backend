
# Wishlist App

The purpose of this project is to create an application where users can create a
wishlist with the items they want to receive as gifts, and share it with other people.

In this platform users will be able to:
- Register and login.
- Create and manage a personal profile (username, name, email, phone, dob,address).
- Create one or more wishlists.
- Create or join groups with other users and share your information with them:personal data and wishlists.
- Purchase items from other people’s wishlists.

When a special event occurs for a user (Ex: birthday, celebration), the other users
in his group will get notified (Ex: email, SMS, in-app notifications). And will be able to see
his wishlist and purchase an item or items from it. The events should be checked daily,
and trigger a notification if an event takes place in that day (cron-job).

A user is able to create multiple wishlists. When creating or joining a group the
user will specify what wishlists he wants to share with the members of the group. He
can also change the wishlists he is sharing with the group at any time (remove, add a
new one).
A wishlist has multiple items. The owner is able to add details about them (Ex:
Amazon URL link, description, purchase details)

When viewing the wishlist of another member, we will be able to mark items from it as purchased. When marking an item as purchased, we will be able to specify if other
users participated in buying this gift (Ex: user1 received a gift from user2 + user3 +
user4 => On of user2, 3, or 4 will mark the item as purchased and specify that it was
with the help from the other 2 users)
## Authors

- [@savulescuandrei](https://github.com/andreisavulescu999)


## Installation
Install dependencies

```bash
  npm install
```
Install Frontend with npm

```bash
  npm run build
```
Install dependencies

```bash
  npm install
```
Install Backend with npm

```bash
  npm run build
```    


## Start the project

Start React Frontend server with npm

```bash
  npm start
```

Start Node Backend server with npm

```bash
  npm run devStart
```  



## API Reference
http://localhost:3001

User

#### Get all users

```http://localhost:3001
  GET /user
```

#### Get specific user

```http://localhost:3001
  GET /user/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Int`    | **Required**. Id of item to fetch |

#### Edit specific user

```http://localhost:3001
  GET /user/${id}/update
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `first_name`| `String`| **Required**. |
| `last_name`| `String`| **Required**. |
| `username`| `String`| **Required**. |
| `password`| `String`| **Required**. |
| `email`| `String`| **Required**. |
| `age`| `Int`| **Required**. |
| `Birthday`| `DateTime`| **Required**. |

#### Register user
```http://localhost:3001
  POST /user/register
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `first_name`| `String`| **Required**. |
| `last_name`| `String`| **Required**. |
| `username`| `String`| **Required**. |
| `password`| `String`| **Required**. |
| `email`| `String`| **Required**. |
| `age`| `Int`| **Required**. |
| `Birthday`| `DateTime`| **Required**. |

#### Login User
```http://localhost:3001
  POST /user/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`   | `String` | **Required**. |
| `password`| `String` | **Required**.  |

#### Delete User
```http://localhost:3001
  DELETE /user/${id}/delete
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Int`    | **Required**. Id of item to delete |


Products

#### Get all Products

```http://localhost:3001
  GET /product
```

#### Get specific product

```http://localhost:3001
  GET /product/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Int`    | **Required**. Id of item to fetch |

#### Create product

```http://localhost:3001
  POST /product/create
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `String`    | **Required**|
| `user_id`   | `Int`    | **Required**|
| `features`   | `Json`  |NULL|
| `images`    | `Json`   |NULL|

#### Update product

```http://localhost:3001
  POST /product/${id}/update
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `String`    | **Required**|
| `user_id`   | `Int`    | **Required**|
| `features`   | `Json`  |NULL|
| `images`    | `Json`   |NULL|


#### Delete product
```http://localhost:3001
  DELETE /product/${id}/delete
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Int`    | **Required**. Id of item to delete |


Wishlists

#### Get all Wishlists

```http://localhost:3001
  GET /wishlist
```

#### Get specific wishlist

```http://localhost:3001
  GET /wishlist/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Int`    | **Required**. Id of item to fetch |

#### Get specific wishlist of user

```http://localhost:3001
  GET /wishlist/user/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Int`    | **Required**. Id of user to fetch wishlists|



#### Create wishlist

```http://localhost:3001
  POST /wishlist/create
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `String`    | **Required**|
| `user_id`   | `Int`    | **Required**|
| `product_id`| `Array`  |NULL|

#### Update Wishlist

```http://localhost:3001
  POST /wishlist/${id}/update
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `String`    | **Required**|
| `user_id`   | `Int`    | **Required**|
| `product_id`| `Array`  |NULL|


#### Delete wishlist
```http://localhost:3001
  DELETE /wishlist/${id}/delete
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Int`    | **Required**. Id of item to delete |


Group

#### Get all groups

```http://localhost:3001
  GET /group
```

#### Get specific group

```http://localhost:3001
  GET /group/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Int`    | **Required**. Id of item to fetch |


#### Create group

```http://localhost:3001
  POST /group/create
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `wishlist_id` | `String`    | **Required**|
| `users`   | `Array`           | **Required**|

#### Update group

```http://localhost:3001
  POST /group/${id}/update
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `wishlist_id` | `String`    | **Required**|
| `users`   | `Array`    | **Required**|

#### Delete group
```http://localhost:3001
  DELETE /group/${id}/delete
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Int`    | **Required**. Id of item to delete |

Chat

#### Get all chat

```http://localhost:3001
  GET /chat
```

#### Get specific chat

```http://localhost:3001
  GET /chat/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Int`    | **Required**. Id of item to fetch |


#### Create chat

```http://localhost:3001
  POST /chat/create
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `group_id` | `Int`   | **Required**|
| `text`   | `String`  | **Required**|

#### Update chat

```http://localhost:3001
  POST /chat/${id}/update
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `wishlist_id` | `String`    | **Required**|
| `users`   | `Array`    | **Required**|

#### Delete chat
```http://localhost:3001
  DELETE /chat/${id}/delete
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Int`    | **Required**. Id of item to delete |