import React from "react";
import Image from "next/image";
import {
  ProjectCard,
  ProjectCardContainer,
  ProjectCompany,
  ProjectDiv,
  ProjectImage,
  ProjectLocation,
  ProjectName,
  ProjectTitle,
} from "./StylingComponents";

// import unsplash from "../../public/unsplash.jpg";
import yousta from "app/assets/yousta.jpg";
import blushLace from "app/assets/blushlace.png";
import styleUnion from "app/assets/styleunion.webp";

const RecentProjectsSection = () => {
  return (
    <>
      <ProjectDiv>
        <ProjectTitle>Our Recent Work</ProjectTitle>
        <ProjectCardContainer>
          <ProjectCard>
            <ProjectImage>
              <Image src={yousta} alt="Reliance" />
            </ProjectImage>
            <ProjectName>Yousta</ProjectName>
            <ProjectCompany>Reliance Pvt. Ltd.</ProjectCompany>
            <ProjectLocation>Hyderabad, Telangana</ProjectLocation>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage>
              <Image src={blushLace} alt="Reliance" height={400} width={400} />
            </ProjectImage>
            <ProjectName>Blush Lace</ProjectName>
            <ProjectCompany>Reliance Pvt. Ltd.</ProjectCompany>
            <ProjectLocation>Hyderabad, Telangana</ProjectLocation>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage>
              <Image src={styleUnion} alt="Reliance" />
            </ProjectImage>
            <ProjectName>Style Union</ProjectName>
            <ProjectCompany>Nexon Omniverse Ltd.</ProjectCompany>
          </ProjectCard>
        </ProjectCardContainer>
      </ProjectDiv>
    </>
  );
};

export default RecentProjectsSection;
