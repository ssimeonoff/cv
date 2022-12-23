import styled from "styled-components";
import personal_data from "../personal_data";
import SectionJob from "./SectionJob";
import ContactSection from "./ContactSection";
import PersonalSection from "./PersonalSection";
import EducationSection from "./EducationSection";
import avatar from "./resources/avatar.jpg";

const PanelRight = () => {
  return (
    <Container>
      <Wrapper>
        <TopSection>
          <AvatarContainer>
            <Avatar src={avatar} alt="avatar" />
          </AvatarContainer>
        </TopSection>
        <NameWrapper>
          <NameLabel>{personal_data.name}</NameLabel>
          <ProfessionLabel>{personal_data.profession}</ProfessionLabel>
        </NameWrapper>
        <ProfileWrapper>
          <Label>Profile</Label>
          {personal_data.profile}
        </ProfileWrapper>
        <Label>Expenrience</Label>
        {personal_data.jobs.map((job) => (
          <SectionJob job={job} key={job.key} />
        ))}
  
      </Wrapper>
      <ColumnsWrapper>
        <Column><EducationSection /></Column>
        <Column><PersonalSection /></Column>
        <Column><ContactSection /></Column>
      </ColumnsWrapper>
    </Container>
  );
};
export default PanelRight;

const Container= styled.div`
  display:block;
`;

const Wrapper = styled.div`
  background: #fff6;
  padding: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border-radius: 4px;
`;
const TopSection= styled.div`
  @media (min-width: 800px) {
    display: none;
  }
`;
const NameWrapper = styled.div`
  margin-bottom: 20px;
`;
const NameLabel = styled.div`
  font-size: 26px;
  text-transform: uppercase;
  font-weight: 400;
`;
const ProfessionLabel = styled.div``;
const ProfileWrapper = styled.div`
  margin-bottom: 40px;
  text-align: left;
  text-align: justify;
`;
const Label = styled.div`
  margin-bottom: 10px;
  text-transform: uppercase;
  text-align: left;
  color: #43261688;
`;

const AvatarContainer = styled.div`
  width: 150px;
  height: 150px;
  margin: 10px auto 10px auto;
  opacity: 0.8;
`;

const Avatar = styled.img`
  border-radius: 50%;
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

