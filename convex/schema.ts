import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    tokenIdentifier: v.string(),
  }).index("by_token", ["tokenIdentifier"]),
  products: defineTable({
    title: v.string(),
    price: v.string(),
    imageUrl: v.string(),
    category: v.string(),
    description: v.string(),
    date: v.string(),
  }),
});
