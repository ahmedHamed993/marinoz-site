import DetailsSlider from "@/app/tours/[id]/DetailsSlider";
import TabsWithData from "@/app/tours/[id]/Tabs";
import React from "react";

const SportsDetails = () => {
  return (
    <div>
      <div className="container">
        <DetailsSlider />
        <div className="row">
          <div className="col-md-8">
            <TabsWithData Sports />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default SportsDetails;
