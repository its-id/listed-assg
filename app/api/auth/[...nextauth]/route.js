import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {},
      authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) return null;

        const user = {
          id: 1,
          name: "Test User",
          email: "test@test.com",
        };

        if (email === user.email && password === "123123") {
          return user;
        }

        return new Error("invalid credentials");
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
