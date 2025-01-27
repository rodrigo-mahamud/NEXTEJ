// scripts/seed.ts
import { connect } from "mongoose";
import { Blog } from "../src/models/Blog";
import { User } from "../src/models/User";
import { config } from "dotenv";
config();
const MONGODB_URI = process.env.MONGODB_URI || " ";

async function seed() {
   try {
      await connect(MONGODB_URI);
      console.log("🌱 Connected to MongoDB");

      // Clear existing data
      await Promise.all([Blog.deleteMany({}), User.deleteMany({})]);
      console.log("🧹 Cleared existing data");

      // Seed blogs
      const blogs = [
         {
            title: "Introduction to Next.js",
            slug: "intro-to-nextjs",
            content:
               "Next.js is a powerful framework for React applications that provides features like server-side rendering and static site generation out of the box...",
            author: "John Doe",
            views: 0,
         },
         {
            title: "Understanding SSR vs CSR",
            slug: "ssr-vs-csr",
            content:
               "Let's explore the differences between Server-Side Rendering and Client-Side Rendering. Each approach has its own benefits and trade-offs...",
            author: "Jane Smith",
            views: 0,
         },
         {
            title: "Working with MongoDB and Next.js",
            slug: "mongodb-nextjs",
            content: "MongoDB is a popular choice for Next.js applications. In this post, we'll look at how to integrate MongoDB with Next.js...",
            author: "John Doe",
            views: 0,
         },
      ];

      // Seed users
      const users = [
         {
            name: "John Doe",
            email: "john@example.com",
            bio: "Full-stack developer with 5 years of experience",
            role: "Developer",
            lastLogin: new Date(),
         },
         {
            name: "Jane Smith",
            email: "jane@example.com",
            bio: "UX Designer passionate about user experience",
            role: "Designer",
            lastLogin: new Date(),
         },
         {
            name: "Bob Johnson",
            email: "bob@example.com",
            bio: "DevOps engineer specializing in cloud infrastructure",
            role: "DevOps",
            lastLogin: new Date(),
         },
      ];

      await Promise.all([Blog.insertMany(blogs), User.insertMany(users)]);

      console.log("✅ Seed data inserted successfully");
      process.exit(0);
   } catch (error) {
      console.error("❌ Error seeding data:", error);
      process.exit(1);
   }
}

seed();
