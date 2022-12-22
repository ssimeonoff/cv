import styled from "styled-components";
import personal_data from "../personal_data";
import SectionJob from "./SectionJob";

const PanelRight = () => {
  return (
    <Wrapper>
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
  );
};
export default PanelRight;

const Wrapper = styled.div`
  width: 100%;
  background: #fff6;
  padding: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border-radius: 4px;
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
