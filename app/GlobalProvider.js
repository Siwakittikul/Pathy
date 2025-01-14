"use client";

import { SessionProvider } from "next-auth/react";
import { NovelProvider } from '@/context/NovelContext';
import { AuthProvider } from "@/context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function GlobalProvider({ children }) {
  return (
    <>
    <SessionProvider>
    <ToastContainer position="bottom-right" />
      <NovelProvider>
      <AuthProvider>
      {children}
      </AuthProvider>
      </NovelProvider>
      </SessionProvider>
    </>
  );
}