import styled from "styled-components";
import ContactSection from "./ContactSection";
import EducationSection from "./EducationSection";
import PersonalSection from "./PersonalSection";
import avatar from "./resources/avatar.jpg";

const PanelLeft = () => {
  return (
    <Wrapper>
      <AvatarContainer>
        <Avatar src={avatar} alt="avatar" />
      </AvatarContainer>

      <ContactSection />

      <EducationSection />

      <PersonalSection />

    </Wrapper>
  );
};

export default PanelLeft;

const Wrapper = styled.div`
  text-align: left;
  min-width: 205px;
  padding:20px;
  @media (max-width: 800px) {
    display: none;
  }
`;

const AvatarContainer = styled.div`
  width: 150px;
  height: 150px;
  margin: 0px auto;
  opacity: 0.8;
`;

const Avatar = styled.img`
  border-radius: 50%;
`;

