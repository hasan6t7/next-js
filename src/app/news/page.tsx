import Link from "next/link";
import React from "react";

interface NewspostsType {
  id: number;
  title: string;
  slug: string;
  from: string;
}

const News = () => {
  const newsPosts: NewspostsType[] = [
    {
      id: 1,
      title: "learn next js ",
      slug: "next-js-course",
      from: "homepage",
    },
    {
      id: 2,
      title: "learn javascript",
      slug: "js-course",
      from: "newsletter",
    },
  ];
  return (
    <div>
      <h1 className="text-3xl mb-5">News page</h1>
      <ul>
        {newsPosts.map((news, ind) => (
          <li key={ind}>
            <Link href={`/news/${news.slug}`}>{news.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
