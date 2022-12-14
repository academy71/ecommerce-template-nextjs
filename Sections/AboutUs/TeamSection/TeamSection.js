import React from "react";
import StyledTeamSection from "./StyledTeamSection";
import Container from "./../../../Components/Container/Container";
import {H2} from "../../../styles/ShareStyles";
// import MemberCard from '../../../Components/MemberCard/MemberCard';
import DATA from "./../../../Data/Data";
import MemberCard from "../../../Components/MemberCard/MemberCard";

const TeamSection = () => {
  return (
    <StyledTeamSection>
      <Container>
        <H2 className="title">The Choicest Company</H2>
        <div className="cards">
          {DATA.member.map(({id, img, title, meta, desc, linkText, href}) => {
            return (
              <MemberCard
                key={id}
                img={img}
                title={title}
                meta={meta}
                desc={desc}
                linkText={linkText}
                href={href}
              />
            );
          })}
        </div>
      </Container>
    </StyledTeamSection>
  );
};

export default TeamSection;
