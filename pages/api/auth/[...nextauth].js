import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        //TODO: You need to provide your own logic here that takes the credentials

        const res = await fetch("https://api.thelastofgame.xyz/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const user = await res.json();

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
};
export default NextAuth(authOptions);
