import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    fullName: "Adarsh Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    bio: "Hey there, Adarsh Balika here",
    website: "",
    profileAvatar: "https://picsum.photos/id/55/150",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    following: [],
    followers: [],
  },
  {
    _id: uuid(),
    fullName: "John Doe",
    username: "johndoe",
    password: "123john",
    bio: "Hey there, John here",
    website: "https://www.johndoe.com",
    profileAvatar: "https://picsum.photos/id/1009/150",
    createdAt: "2022-05-05",
    updatedAt: formatDate(),
    bookmarks: [],
    following: [
      {
        _id: uuid(),
        fullName: "Advika Shinde",
        username: "advika_Shinde",
        profileAvatar: "https://picsum.photos/id/54/150",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "Sheetal Kedare",
        username: "sheetal10",
        profileAvatar: "https://picsum.photos/id/64/150",
      },
    ],
  },
  {
    _id: uuid(),
    fullName: "Sheetal Kedare",
    username: "sheetal10",
    password: "anshaal123",
    bio: "Hey there, Anshaal here",
    website: "https://www.nike.com",
    profileAvatar: "https://picsum.photos/id/64/150",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    following: [
      {
        _id: uuid(),
        fullName: "Adarsh Balika",
        username: "adarshbalika",
        profileAvatar: "https://picsum.photos/id/55/150",
      },
      {
        _id: uuid(),
        fullName: "John Doe",
        username: "johndoe",
        profileAvatar: "https://picsum.photos/id/1009/150",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "Advika Shinde",
        username: "advika_Shinde",
        profileAvatar: "https://picsum.photos/id/54/150",
      },
    ],
  },
  {
    _id: uuid(),
    fullName: "Advika Shinde",
    username: "advika_Shinde",
    password: "Shinde123",
    bio: "Hello Fritter, Shinde here!",
    website: "https://www.wikipedia.com",
    profileAvatar: "https://picsum.photos/id/54/150",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    following: [
      {
        _id: uuid(),
        fullName: "Adarsh Balika",
        username: "adarshbalika",
        profileAvatar: "https://picsum.photos/id/55/150",
      },
      {
        _id: uuid(),
        fullName: "Sheetal Kedare",
        username: "sheetal10",
        profileAvatar: "https://picsum.photos/id/64/150",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "John Doe",
        username: "johndoe",
        profileAvatar: "https://picsum.photos/id/1009/150",
      },
      {
        _id: uuid(),
        fullName: "Sheetal Kedare",
        username: "sheetal10",
        profileAvatar: "https://picsum.photos/id/64/150",
      },
    ],
  },
];
