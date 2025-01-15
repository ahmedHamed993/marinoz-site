import React from "react";
import styles from "./recentNews.module.css";
import Link from "next/link";
import BlogCard from "./BlogCard";
import NewsCard from "./News";
import AdsBox from "@/components/ads-box/AdsBox";
const Blog = () => {
  return (
    <div className={styles.recent_news}>
      <div className="container">
        <h1>Explore Latest News</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit
        </p>
      </div>
      <div className={`container`}>
        <div className="row">
          <div className="col-md-8">
            <BlogCard />
          </div>
          <div className="col-md-4">
            <NewsCard />
            <AdsBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
