"use client";

import { useRouter } from "next/navigation";
import React from "react";



const Logout = () => {
    const router = useRouter();
  const handleLogOut = () => {
    console.log("logout btn clicked");
    router.push("/");
  };
  return (
    <div>     
      <button
        onClick={handleLogOut}
        className="bg-gray-600 text-white px-5 py-1.5 rounded-xl border-none"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
