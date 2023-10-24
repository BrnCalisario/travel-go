
import { db } from "../src/config/db.server"

console.log("Seeding")

// type Post = {
//     title: string,
//     content: string
// }

// async function seed() {
//     await Promise.all(
//         getPosts().map((post) => {
//             return db.post.create({
//                 data: {
//                     title: post.title,
//                     content: post.content
//                 }
//             })
//         })
//     )
// }

// seed()


// function getPosts() : Array<Post> {
//     return [
//         {
//             title: "titulo",
//             content: "corpo",
//         },
//         {
//             title: "title",
//             content: "cuerpo"
//         }
//     ]
// }