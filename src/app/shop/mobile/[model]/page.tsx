import React from "react";

const Model = async ({ params }: { params: Promise<{ model: string }> }) => {
  const { model } = await params;
  return <div>Model - {model}</div>;
};

export default Model;
