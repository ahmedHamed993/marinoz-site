import React from 'react';
import styles from './page.module.css';

const BlogDetails = () => {
  return (
    <div className={styles?.blog_details}>
        <div className="container"> 
            <div className={styles.first_section}>
                <img src="https://images.unsplash.com/photo-1682687982502-1529b3b33f85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGl2aW5nfGVufDB8fDB8fHww"/>
                <div>
                    <h1>How to plan a diving trip to the Red Sea</h1>
                    <h6>Sunday 16 July, 2023</h6>
                    <p>The Red Sea is one of the most popular destinations for divers around the world. It offers a variety of dive sites, from coral reefs and wrecks to caves, with an abundance of marine life and stunning underwater scenery. Whether you are a beginner or an expert, you can find a dive site that suits your level and interests in the Red Sea. Here are some tips on how to plan a diving trip to the Red Sea and what to expect from its rich marine life.</p>
                </div>
            </div>
            <div className={styles.second_section}>
                <p><b>1. Choose your Destination</b><br/>
                    The Red Sea is divided into two regions: the northern Red Sea and the southern Red Sea. The northern Red Sea includes Egypt, Jordan and Saudi Arabia, while the southern Red Sea includes Egypt, Sudan, Eritrea, Djibouti and Yemen. Each region has its own characteristics and attractions, so you should choose your destination based on your preferences and budget.
                    The northern Red Sea is more accessible and developed, with many resorts, liveaboards and dive centers to choose from. It also has some of the most famous dive sites in the world, such as Ras Mohammed National Park, Thistlegorm Wreck, Blue Hole and Dahab. The northern Red Sea is known for its clear water, colorful coral reefs, large schools of fish and historical wrecks.
                    The southern Red Sea is more remote and pristine, with fewer tourists and more untouched dive sites. It also has some of the most diverse and exotic marine life in the world, such as hammerhead sharks, whale sharks, manta rays, dolphins and dugongs. The southern Red Sea is known for its: deep water, large pelagic animals, coral gardens and caves.
                </p>
                <img src="https://images.unsplash.com/photo-1517627043994-b991abb62fc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGl2aW5nfGVufDB8fDB8fHww" />
            </div>
            <div className={styles.third_section}>
                        <br/><b>2.  Choose your Season</b><br/>
                The Red Sea is a year-round diving destination, but the best time to visit depends on what you want to see and experience. The water temperature ranges from 20°C in winter to 30°C in summer, while the air temperature ranges from 15°C in winter to 40°C in summer. The visibility is usually excellent, ranging from 20 to 40 meters.
                The winter months (December to February) are the coldest and windiest, but also the best time to see large pelagic animals such as hammerhead sharks, whale sharks and manta rays in the southern Red Sea.
                The summer months (June to August) are the hottest and calmest, but also the best time to see coral spawning and plankton blooms in the northern Red Sea.
                The spring months (March to May) and the autumn months (September to November) are the most pleasant and balanced, with moderate temperatures, good visibility and a variety of marine life. These are also the peak seasons for tourism, so you should book your trip well in advance.

                <br/><b>3.  Choose your Accommodation</b><br/>
                There are two main options for accommodation in the Red Sea:
                Resorts or liveaboards. Resorts are land-based hotels that offer diving packages or courses along with other facilities and services. Liveaboards are boats that offer diving trips that last from a few days to a few weeks, with all meals and dives included.
                Resorts are more suitable for divers who want more comfort, flexibility and activities besides diving. They also allow you to explore the local culture, cuisine and attractions of your destination. Resorts are more common in the northern Red Sea, where there are many towns and cities along the coast.
                Liveaboards are more suitable for divers who want more adventure, immersion and dives per day. They also allow you to access more remote and diverse dive sites that are not reachable by day boats. Liveaboards are more common in the southern Red Sea, where there are fewer settlements and infrastructure along the coast.

                <br/><b>4.  Choose your Dive Sites</b><br/>

                The Red Sea has hundreds of dive sites to choose from, each with its own features and highlights. You should choose your dive sites based on your level of experience, your interests and your expectations. Here are some examples of dive sites in each region:
            </div>
            <div className={styles?.full_width_img}>
                <img src="https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGRpdmluZ3xlbnwwfHwwfHx8MA%3D%3D" />
            </div>
            <div className={styles?.fourth_section}>
                <br/><b>A.       Southern Red Sea:</b>
               <br /> I.  Ras Mohammed National Park: A marine protected area that hosts some of the most spectacular coral reefs and fish life in the world. It has several dive sites such as Shark Reef, Yolanda Reef, Anemone City and Jackfish Alley.

                <br />II.  Thistlegorm Wreck: A British cargo ship that sank in 1941 during World War II. It is one of the most famous wrecks in the world, with many artifacts still intact such as motorcycles, trucks, guns and ammunition .
                <br />III.  Blue Hole: A deep sinkhole that drops to over 100 meters. It is one of the most challenging dive sites in the world, with strong currents and low visibility. It is also one of the most controversial dive sites in the world, with many fatalities and accidents reported over the years.

                <br /> IV.  Dahab: A laid-back town that offers some of the most unique and diverse dive sites in the world. It has several dive sites such as The Canyon, The Bells, Eel Garden and The Lighthouse.

                <br /><b>B.       Southern Red Sea:</b>

                <br /> I. Sanganeb Reef: A UNESCO World Heritage Site that hosts one of the largest coral atolls in the world. It has several dive sites such as The Lighthouse, The Plateau, The Wall and The Garden.

                 II.   Shaab Rumi: A reef that surrounds a lagoon where Jacques Cousteau conducted his experiments in the 1960s. It has several dive sites such as The Precontinent, The South Plateau, The North Plateau and The Arch.

                <br /> III.   Daedalus Reef: A remote reef that rises from the depths of the sea. It has several dive sites such as The Anemone Garden, The North Wall, The South Wall and The East Wall.

                <br /> IV.   St. John's Reef: A group of reefs that offer some of the most pristine and diverse coral formations and marine life in the world. It has several dive sites such as Habili Ali, Habili Gafaar, Dangerous Reef and Fury Shoal.

            </div>
        </div>
    </div>
  );
};

export default BlogDetails;
