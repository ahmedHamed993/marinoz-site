import React from "react";
import styles from "./recentNews.module.css";
import Link from "next/link";
const NewsCard = () => {
  return (
    <div className={styles.older_news} style={{ marginBottom: "32px" }}>
      <h4>Recent News</h4>
      <div className={styles.news_list}>
        {news.slice(2, news.length).map((item) => (
          <Link href={`/Blog`} className={styles.news_row}>
            <img src={item.image} width="64px" height="64px" loading="lazy" />
            <div>
              <h5>{item.title}</h5>
              <p>{item.created_at}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;

const news = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1484507175567-a114f764f78b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c25vcmtsaW5nfGVufDB8fDB8fHww",
    title: "How to plan a diving trip to the Red Sea",
    created_at: "20 August, 2024",
    summary:
      "Imagine the sun kissing your skin as you glide across the crystal-clear waters of the Red Sea, the gentle breeze filling your sails and the horizon stretching endlessly before you. This isn't just a dream; it's a reality waiting for you in Hurghada and El Gouna, two of Egypt's premier destinations for yacht and boat rentals. ",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1484507175567-a114f764f78b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c25vcmtsaW5nfGVufDB8fDB8fHww",
    title: "How to plan a diving trip to the Red Sea",
    created_at: "20 August, 2024",
    summary:
      "Imagine the sun kissing your skin as you glide across the crystal-clear waters of the Red Sea, the gentle breeze filling your sails and the horizon stretching endlessly before you. This isn't just a dream; it's a reality waiting for you in Hurghada and El Gouna, two of Egypt's premier destinations for yacht and boat rentals. ",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1484507175567-a114f764f78b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c25vcmtsaW5nfGVufDB8fDB8fHww",
    title: "How to plan a diving trip to the Red Sea",
    created_at: "20 August, 2024",
    summary:
      "Imagine the sun kissing your skin as you glide across the crystal-clear waters of the Red Sea, the gentle breeze filling your sails and the horizon stretching endlessly before you. This isn't just a dream; it's a reality waiting for you in Hurghada and El Gouna, two of Egypt's premier destinations for yacht and boat rentals. ",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1484507175567-a114f764f78b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c25vcmtsaW5nfGVufDB8fDB8fHww",
    title: "How to plan a diving trip to the Red Sea",
    created_at: "20 August, 2024",
    summary:
      "Imagine the sun kissing your skin as you glide across the crystal-clear waters of the Red Sea, the gentle breeze filling your sails and the horizon stretching endlessly before you. This isn't just a dream; it's a reality waiting for you in Hurghada and El Gouna, two of Egypt's premier destinations for yacht and boat rentals. ",
  },
];
