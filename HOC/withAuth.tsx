// @ts-nocheck
"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const withAuth = (WrappedComponent) => {
    return (props) => {
        const [user] = useAuthState(auth);
        const [userSession, setUserSession] = useState<string | null>(null);
        const router = useRouter();
        const pathname = usePathname();

        useEffect(() => {
            const session = sessionStorage.getItem("user");
            setUserSession(session);

            if (!user && !session) {
                router.push("/sign-up");
            } else if (user && session && (pathname === "/sign-up" || pathname === "/sign-in")) {
                // Redirect authenticated users away from sign-in/sign-up pages
                router.push("/");
            }
        }, [user, router, pathname]);

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
