import { Metadata } from "next";
import React from "react";

interface ParamsProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata(
  { params }: ParamsProps,

): Promise<Metadata> {
  const id = (await params).id
 
  
 
  return {
    title: `News post ${id}`,
    description: `News Post for ${id}`,
  }
}


const NewsDetails = async ({ params }: ParamsProps) => {
  const { id } = await params;
  console.log(id);
  return <div>NewsDetails for id -{id}</div>;
};

export default NewsDetails;
