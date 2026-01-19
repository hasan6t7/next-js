import { notFound } from "next/navigation";
import React from "react";
interface Props {
  params: Promise<{ slug: string[] }>;
}
const StoreDetails = async ({ params }: Props) => {
  const { slug } = await params;
  if(slug?.length > 3){
    notFound()
  }
  return (
    <div>
      StoreDetails
      {slug?.length > 0 && slug?.map((item, ind) => <p key={ind}>{item}</p>)}
    </div>
  );
};

export default StoreDetails;
