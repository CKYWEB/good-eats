"use client";

import { Header } from "@/app/components/Header/header";
import { Footer } from "@/app/components/Footer/footer";
import { useUserStore } from "@/store/user";
import { useEffect } from "react";

export default function HomeLayout(props) {
  const { fetchCurrentUser } = useUserStore();

  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  return (
    <>
      <Header />

      {props.children}

      <Footer />
    </>
  );
}