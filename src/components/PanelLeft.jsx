import styled from "styled-components";
import personal_data from "../personal_data";
import Modal from "./Modal";
import avatar from "./resources/avatar.jpg";
import phone from "./resources/phone-call.png";
import email from "./resources/email.png";
import location from "./resources/location-pin.png";
import linkedin from "./resources/linkedin.png";
import github from "./resources/github.png";

const PanelLeft = () => {
  return (
    <Wrapper>
      <AvatarContainer>
        <Avatar src={avatar} alt="avatar" />
      </AvatarContainer>
      <ContainerInfo>
        <Label>Contact</Label>
        <ContactWrapper>
          <Icon src={phone} alt="phone"></Icon>
          <div>{personal_data.phone}</div>
        </ContactWrapper>
        <ContactWrapper>
          <Icon src={email} alt="phone"></Icon>
          <div>{personal_data.email}</div>
        </ContactWrapper>
        <ContactWrapper>
          <Icon src={location} alt="phone"></Icon>
          {personal_data.address}
        </ContactWrapper>
        <ContactWrapper>
          <Icon src={linkedin} alt="phone"></Icon>
          <Link
            href="https://www.linkedin.com/in/simeon-simeonov-79553544/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </Link>
        </ContactWrapper>
        <ContactWrapper>
          <Icon src={github} alt="phone"></Icon>
          <Link
            href="https://github.com/ssimeonoff"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>
        </ContactWrapper>
      </ContainerInfo>

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

      <ContainerInfo>
        <Modal content={personal_data.interests.extra} />
        <Label>Interests</Label>
        {personal_data.interests.list.map((el) => (
          <div>{el}</div>
        ))}
      </ContainerInfo>

      <ContainerInfo>
        <Label>Languages</Label>
        blah blah blah
      </ContainerInfo>
    </Wrapper>
  );
};

export default PanelLeft;

const Wrapper = styled.div`
  width: 400px;
  height: 100%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: left;
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

const ContainerInfo = styled.div`
  position: relative;
  margin: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #43261644;
`;

const ContactWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Label = styled.div`
  margin-bottom: 10px;
  text-transform: uppercase;
  text-align: left;
  color: #43261688;
`;

const Link = styled.a`
  text-decoration: underline;
  color: none;
  border-radius: 2px;
  color: #432616ee;
  cursor: pointer;

  :hover {
    color: #000;
  }
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
  padding-top: 3px;
  margin-right: 10px;
  opacity: 0.9;
`;
