import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Must try of this week: Chole Bhature at Mumbai bandra- SWADISHT KHANA",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    username: "advika_Shinde",
    fullName: "Advika Shinde",
    postImage:
      "https://2.bp.blogspot.com/-211OGIXAb-I/Ww1kD5i6ykI/AAAAAAAAD9A/cmeq206r5jYJNjtT73CcOohjN_GIP5ZSgCLcBGAs/s1600/chole-bhature-in-mumbai.jpg",
    createdAt: "2023-05-21",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Sheetal Kedare",
        username: "sheetal10",

        profileAvatar: "https://picsum.photos/id/64/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Adarsh Balika",
        username: "adarshbalika",
        profileAvatar: "https://picsum.photos/id/55/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Went to this hangout place,Yesterday must try this Misal at Nashik - Vihar Misal",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },

    username: "adarshbalika",
    fullName: "Adarsh Balika",
    createdAt: "2023-06-28",
    postImage:
      "https://im.whatshot.in/img/2019/Sep/shutterstock-1016168077-cropped-1568276028.jpg",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Sheetal Kedare",
        username: "sheetal10",
        profileAvatar: "https://picsum.photos/id/64/150",
        createdAt: "2023-06-29",
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Advika Shinde",
        username: "advika_Shinde",
        profileAvatar: "https://picsum.photos/id/54/150",
        createdAt: "2023-06-30",
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Ordered Meghana's Special Chicken Biryani from Meghana's. Recommend 10/10. ✨  ",
    likes: {
      likeCount: 2,
      likedBy: [
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
      dislikedBy: [],
    },
    username: "sheetal10",
    fullName: "Sheetal Kedare",
    postImage: null,
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Sheetal Kedare",
        username: "sheetal10",
        profileAvatar: "https://picsum.photos/id/64/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Adarsh Balika",
        username: "adarshbalika",
        profileAvatar: "https://picsum.photos/id/55/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2023-04-20",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Went out for dinner at Chili's Hyderabad. The taste reminds me of back home in Autralia.",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    postImage: null,
    username: "sheetal10",
    fullName: "Sheetal Kedare",
    createdAt: "2022-06-05",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Sheetal Kedare",
        username: "sheetal10",
        profileAvatar: "https://picsum.photos/id/64/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Adarsh Balika",
        username: "adarshbalika",
        profileAvatar: "https://picsum.photos/id/55/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Went out for dinner at Chili's Hyderabad. The taste reminds me of back home in Autralia.",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    postImage: null,
    username: "johndoe",
    fullName: "John Doe",
    createdAt: "2023-05-11",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Sheetal Kedare",
        username: "sheetal10",
        profileAvatar: "https://picsum.photos/id/64/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Adarsh Balika",
        username: "adarshbalika",
        profileAvatar: "https://picsum.photos/id/55/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Nairobi is such a great city with so many people going about their business. One thing that you need to know while there are the places where to find great food/meals. Best recommendation is @al_yusra Restaurant located along Banda Street just next to Nation Centre. #Kenya",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "johndoe",
    fullName: "John Doe",
    createdAt: "2022-04-09",
    postImage:
      "https://res.cloudinary.com/dwebygldw/image/upload/v1653066477/frittr/E-HqxXdWUAM0z-U_a44utb.jpg",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Sheetal Kedare",
        username: "sheetal10",
        profileAvatar: "https://picsum.photos/id/64/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Adarsh Balika",
        username: "adarshbalika",
        profileAvatar: "https://picsum.photos/id/55/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Must try Burger",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "johndoe",
    fullName: "John Doe",
    postImage:
      "http://3.bp.blogspot.com/_HPXWOvg7RcM/TSAlV0uVAnI/AAAAAAAAACo/kdGktUbFux8/s1600/burger.jpg",
    createdAt: "2023-03-01",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Sheetal Kedare",
        username: "sheetal10",
        profileAvatar: "https://picsum.photos/id/64/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Adarsh Balika",
        username: "adarshbalika",
        profileAvatar: "https://picsum.photos/id/55/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
