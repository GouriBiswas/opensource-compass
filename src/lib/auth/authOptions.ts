import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { connectDB } from "@/lib/db/connect";
import User from "@/models/User";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        await connectDB();

        const existingUser = await User.findOne({
          githubId: account?.providerAccountId,
        });

        if (!existingUser) {
          await User.create({
            githubId: account?.providerAccountId,
            username: (profile as any)?.login,
            name: user.name,
            email: user.email,
            image: user.image,
          });
        }

        return true;
      } catch (error) {
        console.error("Error saving user:", error);
        return false;
      }
    },
  },
};