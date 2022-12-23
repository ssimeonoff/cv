import styled from "styled-components";
import phone from "./resources/phone-call.png";
import email from "./resources/email.png";
import location from "./resources/location-pin.png";
import linkedin from "./resources/linkedin.png";
import github from "./resources/github.png";
import personal_data from "../personal_data";

const ContactSection = () => {

  return (
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
  );
};
export default ContactSection;

const ContainerInfo = styled.div`
  padding-top: 15px;
  line-height: 15px;
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
  margin-right: 10px;
  opacity: 0.9;
`;

