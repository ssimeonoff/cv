import styled from "styled-components";
import personal_data from "../personal_data";
import SectionJob from "./SectionJob";
import ContactSection from "./ContactSection";
import ExpertiseSection from "./ExpertiseSection";
import EducationSection from "./EducationSection";
import LanguageSection from "./LanguageSection";
import InterestSection from "./InterestSection";

const PanelRight = () => {
  return (
    <Container>
      <Wrapper>
        <TopSection>
        </TopSection>
        <NameWrapper>
          <NameLabel>{personal_data.name}</NameLabel>
          <ProfessionLabel>{personal_data.profession}</ProfessionLabel>
        </NameWrapper>
        <ProfileWrapper>
          <Label>Profile</Label>
          {personal_data.profile}
        </ProfileWrapper>
      </Wrapper>
      <WrapperExpanded>
        <Label>Expenrience</Label>
        {personal_data.jobs.map((job) => (
          <SectionJob job={job} key={job.key} />
        ))}
      </WrapperExpanded>
      <ColumnsWrapper>
        <Column>
          <ExpertiseSection /> 
          <LanguageSection />
          <InterestSection />
        </Column>
        <Column>
          <ContactSection />
          <EducationSection /> 
        </Column>
      </ColumnsWrapper>
    </Container>
  );
};
export default PanelRight;

const Container= styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  margin: 0 0 15px 0;
  border: 1px solid #ccc8;
`;

const WrapperExpanded = styled(Wrapper)`
  flex: 1;
`;

const TopSection= styled.div`
  @media (min-width: 800px) {
    display: none;
  }
`;
const NameWrapper = styled.div`
  margin: 20px;
  letter-spacing: 0.5px;
`;
const NameLabel = styled.div`
  font-size: 26px;
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 5px;
`;
const ProfessionLabel = styled.div``;
const ProfileWrapper = styled.div`
  text-align: left;
  text-align: justify;
`;
const Label = styled.div`
  margin-bottom: 10px;
  text-transform: uppercase;
  text-align: left;
  color: #43261688;
  letter-spacing: 0.5px;
`;

const ColumnsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  @media (min-width: 800px) {
    display: none;
  }
`;

const Column = styled.div`
`;

