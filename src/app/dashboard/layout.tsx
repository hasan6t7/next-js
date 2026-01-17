import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-2 h-screen flex-col md:flex-row">
      <div className="w-full md:w-56 p-2 border ">sidebar</div>
      <div className="flex-1 border p-4">{children}</div>
    </div>
  );
};

export default layout;
