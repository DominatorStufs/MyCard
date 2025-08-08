import { SignIn } from "@clerk/nextjs";

export const metadata = {
  title: "Sign In",
  description: "Sign in to MyCard",
};

export default function Page() {
  return <SignIn />;
}
