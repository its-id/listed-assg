import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Dashboard from "./dashboard/page";

const HomePage = async () => {
  const session = await getServerSession(authOptions); //server side

  if (!session) {
    redirect("/signin?callbackUrl=/dashboard");
  }

  return (
    <>
      <Dashboard />
    </>
  );
};

export default HomePage;
