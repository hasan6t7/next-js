import React from "react";

const DocsDetails = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const { slug } = await params;
  console.log(slug)
  if (slug.length === 2) {
    return (
      <p>
        viewing document category {slug[0]} and document name {slug[1]}
      </p>
    );
  }
  else if(slug.length === 1 ){
    return  <p>
        viewing document category {slug[0]} 
      </p>
  }
  return <div>Docs Details</div>;
};

export default DocsDetails;
