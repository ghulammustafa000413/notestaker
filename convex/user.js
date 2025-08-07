// convex/users.js
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
    args: {
        userName: v.string(),
        email: v.string(),
        imageUrl: v.string(),
    },
    handler: async (ctx, args) => {
        // if user already exists
        const user = await ctx.db.query('users').filter((q) => {
            return (
                q.eq(q.field("email"), args.email)
            )
        }
        ).collect()
        // if user not exists 
        if (user?.length == 0) {
            // console.log("Hii");
            
            const userId = await ctx.db.insert("users", {
                userName: args.userName,
                email: args.email,
                imageUrl: args.imageUrl
            });
            return `${userId}  : new user Inserted.`;
        }

        return "User Already Exits"
    }
    
}

);
