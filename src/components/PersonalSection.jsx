import styled from "styled-components";
import personal_data from "../personal_data";
import Modal from "./Modal";

const PersonalSection = () => {
  return (
    <Wrapper>
      <ContainerInfo>
        <Label>Languages</Label>
        {personal_data.languages.list.map((el) => (
          <div>{el}</div>
        ))}
      </ContainerInfo>

      <ContainerInfo>
        <Modal content={personal_data.interests.extra} />
        <Label>Interests</Label>
        {personal_data.interests.list.map((el) => (
          <div>{el}</div>
        ))}
      </ContainerInfo>
    </Wrapper>
  );
};

export default PersonalSection;

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

