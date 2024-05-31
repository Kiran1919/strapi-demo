import React from "react";
import style from './Card.module.css'
import config from "@/config";
import Link from "next/link";

const Card = (data) => {
    console.log("data from cardss",data.data.Thumbnail.data.attributes.ext)
    const ext = data.data.Thumbnail.data.attributes.ext
    // debugger
    const videoExtensions = [".mp4", ".mpeg", ".mov", ".avi"];
    const isVid = videoExtensions.includes(ext);
  return (
    <div className={style.card}>
    <div className="">
      {isVid ? (
        <video className={style.video} controls>
            <source src={`${config.api}${data.data.Thumbnail.data.attributes.url}`} type={`video/${ext.split('.')[1]}`} />
            Your browser does not support the video tag.
        </video>
    ) : (
      <img src={`${config.api}${data.data.Thumbnail.data.attributes.url}`} className="" alt="..." />
    )}
      <div className="">
        <h5 className={style.title}>{data.data.Title}</h5>
        <span className="category">{data.data.Category}</span>
        {/*data.data.Content.map((val,i) =>(
            <p dangerouslySetInnerHTML={{ __html: val.children[0].text }} key={i}></p>
        ))*/}
        <p className={style.summary}>{data.data.Summary}</p>
        <Link href={`/blogs/${data.data.slug}`} className="link">Read more</Link>
      </div>
    </div>
    </div>
  );
};

export default Card;
