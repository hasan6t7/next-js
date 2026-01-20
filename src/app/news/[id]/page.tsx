import React from "react";

interface ParamsProps {
  params: Promise<{ id: string }>;
}

const NewsDetails = async ({ params }: ParamsProps) => {
  const { id } = await params;
  console.log(id);
  return <div>NewsDetails for id -{id}</div>;
};

export default NewsDetails;
