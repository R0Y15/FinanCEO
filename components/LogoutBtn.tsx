"use client";

import { auth } from '@/app/firebase/config';
import { signOut } from 'firebase/auth';
import React from 'react'

const LogoutBtn = () => {
    return (
        <button onClick={() => {
            signOut(auth);
            sessionStorage.removeItem("user");
        }}>
            Logout
        </button>
    )
}

export default LogoutBtn