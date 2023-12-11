import styled from "styled-components";
import ContactSection from "./ContactSection";
import EducationSection from "./EducationSection";
import ExpertiseSection from "./ExpertiseSection";
import LanguageSection from "./LanguageSection";
import InterestSection from "./InterestSection";

const PanelLeft = () => {
  return (
    <Container>
      <Wrapper>
        <ContactSection />
      </Wrapper>
      <Wrapper>
        <EducationSection />
      </Wrapper>
      <Wrapper>
        <ExpertiseSection />
      </Wrapper>
      <Wrapper>
        <LanguageSection />
      </Wrapper>
      <Wrapper> 
        <InterestSection />
      </Wrapper>
    </Container>
  );
};

export default PanelLeft;

const Container = styled.div`
  text-align: left;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  margin: 0px 15px 15px 0;
  background-color: #fff5;
  padding: 20px 20px 10px 20px;
  border-radius: 5px;
  border: 1px solid #ccc8;
`;


