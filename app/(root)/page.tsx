"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoutBtn, Sidebar, TransactionForm, TransactionList } from "@/components";

export default function Home() {
  const [user] = useAuthState(auth);
  const [userSession, setUserSession] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const session = sessionStorage.getItem("user");
    setUserSession(session);
    if (!user && !session) {
      router.push("/sign-up");
    }
  }, [user, router]);

  return (
    <div>
      <h1>Financial Data Management</h1>
      {/* <TransactionForm />
      <TransactionList /> */}
      <Sidebar />
      <LogoutBtn />
    </div>
  );
}
