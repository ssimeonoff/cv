import styled from "styled-components";
import personal_data from "../personal_data";
import Modal from "./Modal";

const EducationSection = () => {
  return (
    <Wrapper>
      <ContainerInfo>
        <Modal content={personal_data.education.extra} />
        <Label>Education</Label>
        <div>{personal_data.education.title}</div>
        <div>{personal_data.education.uni}</div>
        <div>{personal_data.education.date}</div>
      </ContainerInfo>

      <ContainerInfo>
        <Label>Expertise</Label>
        {personal_data.expertise.list.map((el) => (
          <div>{el}</div>
        ))}
      </ContainerInfo>
    </Wrapper>
  );
};

export default EducationSection;

const Wrapper = styled.div`
  margin-top: 0px;
  text-align: left;
  }
`;

const ContainerInfo = styled.div`
  position: relative;
  padding-top: 15px;
  @media (min-width: 800px) {
    border-top: 1px solid #43261644;
    margin-top: 20px;
  }
`;

const Label = styled.div`
  margin-bottom: 10px;
  text-transform: uppercase;
  color: #43261688;
`;

