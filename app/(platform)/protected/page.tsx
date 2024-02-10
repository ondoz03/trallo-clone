"use client";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";

const ProtectedPage = () => {
  const { sessionId } = useAuth();

  const { user } = useUser();
  return (
    <div>
      <h1>Protected Page {sessionId}</h1>
      <UserButton afterSignOutUrl="/"/>
    </div>
  );
}

export default ProtectedPage;

