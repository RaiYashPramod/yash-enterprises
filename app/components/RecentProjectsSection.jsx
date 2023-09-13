import React from "react";
import Image from "next/image";
import {
  ProjectCard,
  ProjectCardContainer,
  ProjectCompany,
  ProjectDiv,
  ProjectImage,
  ProjectName,
  ProjectTitle,
} from "./StylingComponents";

import unsplash from "../../public/unsplash.jpg";

const RecentProjectsSection = () => {
  return (
    <>
      <ProjectDiv>
        <ProjectTitle>Our Recent Work</ProjectTitle>
        <ProjectCardContainer>
          <ProjectCard>
            <ProjectImage>
              <Image src={unsplash} alt="Reliance" />
            </ProjectImage>
            <ProjectName>Yousta</ProjectName>
            <ProjectCompany>Reliance Pvt. Ltd.</ProjectCompany>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage>
              <Image src={unsplash} alt="Reliance" />
            </ProjectImage>
            <ProjectName>Blush Lace</ProjectName>
            <ProjectCompany>Reliance Pvt. Ltd.</ProjectCompany>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage>
              <Image src={unsplash} alt="Reliance" />
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
