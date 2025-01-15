// import { login as loginUser } from "@/apiCalls/login";
// import { register } from "@/apiCalls/register";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { register } from "@/actions/auth-actions/register";
// import { jwtDecode } from "jwt-decode";
// import { getUserDataAfterVerify } from "@/apiCalls/getUserDataAfterVerify";
export const authOptions = {
  pages: {
    signIn: "/Login",
    newUser: "/SignUp",
  },
  session: {
    maxAge: 365 * 24 * 60 * 60,
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      id: "login",
      name: "login",
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const user = await register(credentials ?? {});
        if (user?.id) return user;
        else throw user;
      },
    }),
    CredentialsProvider({
      id: "register",
      name: "register",
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const user = await register(credentials?.formData ?? {});
        console.log("user \n ===================== \n", user);
        if (user.id) return user;
        else throw user;
      },
    }),
  ],
  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   return user ? true : false;
    // },
    async jwt({ token, user, account, profile }) {
      // if (user) {
      //   token.user = { ...user };
      //   token.accessToken = user.accessToken;
      //   token.valid = true;
      // } else if (token.user && !user && account?.provider !== "verify") {
      //   token.valid = isTokenExpired(token.accessToken.value)
      //     ? false
      //     : true;
      // }
      console.log("jwt callback", user, token);
      return token;
    },
    async session({ session, token, user }) {
      if (token) {
        session.user = token.valid ? token.user : null;
        session.accessToken = token.valid ? token.accessToken : null;
        session.valid = Boolean(token.valid);
      }
      return session;
    },
  },
};
