/**
 * A social media platform stores posts.
 * Tasks:
 * 1. Find post that containing "typescript"!
 * 2. Find post that containing "nestjs"!
 * 3. Find the post with highest number of likes!
 * 4. Calculate the total of likes!
 */

const posts = [
  {
    author: "Andi",
    content: "Learning TypeScript #typescript #programming",
    hashtags: ["typescript", "programming"],
    likes: 120,
  },
  {
    author: "Budi",
    content: "My first NestJS project #nestjs #typescript",
    hashtags: ["nestjs", "typescript"],
    likes: 250,
  },
  {
    author: "Citra",
    content: "Frontend development #nextjs #react",
    hashtags: ["nextjs", "react"],
    likes: 180,
  },
  {
    author: "Deni",
    content: "Backend with NestJS #nestjs #backend",
    hashtags: ["nestjs", "backend"],
    likes: 300,
  },
];

function findPostsByHashtag(hashtag: string) {
  return posts.filter(post => post.hashtags.includes(hashtag));
}

const postWithMostLikes = posts.reduce((mostLikedPost, currentPost) => {
  return currentPost.likes > mostLikedPost.likes ? currentPost : mostLikedPost;
}, posts[0]);

const totalLikes = posts.reduce((total, post) => total + post.likes, 0);

const postsWithTypescript = findPostsByHashtag("typescript");
const postsWithNestjs = findPostsByHashtag("nestjs");

console.log("Posts containing 'typescript':", postsWithTypescript);
console.log("Posts containing 'nestjs':", postsWithNestjs);
console.log("Post with the highest number of likes:", postWithMostLikes);
console.log("Total number of likes:", totalLikes);