import { Metadata } from "next";
import React from "react";

interface ParamsProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({
  params,
}: ParamsProps): Promise<Metadata> {
  const id = (await params).id;

  return {
    title: `News post ${id}`,
    description: `News Post for ${id}`,
  };
}

const NewsDetails = async ({ params, searchParams }: ParamsProps) => {
  const { id } = await params;

  return (
    <div>
      <div>NewsDetails for id -{id}</div>
      <div>
        {Object.entries(await searchParams).map(([key, value]) => (
          <li key={key}>
            {key} : {Array.isArray(value) ? value.join(", ") : value}
          </li>
        ))}
      </div>
    </div>
  );
};

export default NewsDetails;
