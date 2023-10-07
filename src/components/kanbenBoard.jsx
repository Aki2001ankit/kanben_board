import React from "react";
import { useApi } from "../context/apiProvider";
import Carousel from "react-elastic-carousel";
import carouselCard from "./carouselCard";
import { renderCustomArrow } from "../utils/carouselUtil";
import { GroupCard } from "./groupCard";
import { breakPoints } from "../utils/miscMap";

const KanBenBoard = () => {
  const { groupedAndSortedApiData } = useApi();

  return (
    <>
      <div>
        <Carousel
          className="mb-0 "
          breakPoints={breakPoints}
          pagination={false}
          renderArrow={renderCustomArrow}
        >
          <carouselCard>
            <GroupCard params={groupedAndSortedApiData?.first} />
          </carouselCard>
          <carouselCard>
            <GroupCard params={groupedAndSortedApiData?.second} />
          </carouselCard>
          <carouselCard>
            <GroupCard params={groupedAndSortedApiData?.third} />
          </carouselCard>
          <carouselCard>
            <GroupCard params={groupedAndSortedApiData?.fourth} />
          </carouselCard>
          <carouselCard>
            <GroupCard params={groupedAndSortedApiData?.fifth} />
          </carouselCard>
        </Carousel>
      </div>
    </>
  );
};
export default KanBenBoard;
