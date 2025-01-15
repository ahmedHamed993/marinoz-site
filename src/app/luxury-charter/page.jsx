import React from "react";
import Hero from "./components/hero/Hero";
import SeasonExplore from "./components/season-explore/SeasonExplore";
import ContactForm from "@/components/Form/ContactForm";
import RecentNews from "@/components/recent-news/RecentNews";
import CustomEvent from "./components/custom-event/CustomEvent";
import styles from "./page.module.css";
const page = () => {
  return (
    <div>
      <Hero />
      <SeasonExplore />
      <CustomEvent />
      <div className="container">
        <ContactForm />
      </div>
      <RecentNews />
    </div>
  );
};

export default page;
