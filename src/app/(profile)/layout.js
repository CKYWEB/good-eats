"use client";

import { Header } from "@/app/components/Header/header";
import { useUserStore } from "@/store/user";
import { useEffect } from "react";

export default function ProfileLayout(props) {

  const { fetchCurrentUser } = useUserStore();

  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  return (
    <>
      <Header />
      {props.children}
    </>
  );
}