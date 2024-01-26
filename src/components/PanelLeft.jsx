import styled from "styled-components";
import ContactSection from "./ContactSection";
import EducationSection from "./EducationSection";
import ExpertiseSection from "./ExpertiseSection";
import LanguageSection from "./LanguageSection";
import InterestSection from "./InterestSection";

const PanelLeft = () => {
  return (
    <Container>
      <ContactSection />
      <EducationSection />
      <ExpertiseSection />
      <LanguageSection />
      <InterestSection />
    </Container>
  );
};

export default PanelLeft;

const Container = styled.div`
  text-align: left;
  margin-right: 15px;
  @media (max-width: 800px) {
    display: none;
  }
`;


