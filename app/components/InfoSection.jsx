import React from "react";
import {
  Info,
  InfoDetail,
  InfoDetailText,
  InfoTitle,
} from "./StylingComponents";

const InfoSection = () => {
  return (
    <>
      <Info>
        <InfoTitle>Experience That Matters</InfoTitle>
        <InfoDetail>
          <InfoDetailText>
            Yash Enterprises has been in the industry since March 5, 2003,
            providing top-notch civil and interior contractor services. Our
            commitment to quality can be seen in the stunning results we&apos;ve
            achieved for countless clients.
          </InfoDetailText>
          <InfoDetailText>
            Get ready to revolutionize your space with us. We offer a
            comprehensive range of services including electrical support,
            carpentry support, fabrication work, plumbing support, painting
            support, civil work, security services, and housekeeping.
          </InfoDetailText>
        </InfoDetail>
      </Info>
    </>
  );
};

export default InfoSection;
