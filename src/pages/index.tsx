import { api } from "@/utils/api";
import { useUser } from "@clerk/nextjs";
import SignIn from "@/components/sign-in";
import PageLayout from "@/components/layout";
import Board from "@/components/board";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { isLoaded: userLoaded, isSignedIn } = useUser();

  // return empty div is user isnt't loaded yet
  if (!userLoaded) return <div>Loading...</div>;

  return (
    <>
      {!isSignedIn && <SignIn />}
      {isSignedIn && (
        <PageLayout>
          <Board />
        </PageLayout>
      )}
    </>
  );
}
