import styled from "styled-components";
import avatar from "./resources/avatar.jpg";
import personal_data from "../personal_data";


const ContactSection = () => {

  return (
    <ContainerInfo>
      <AvatarContainer>
        <Avatar src={avatar} alt="avatar" />
      </AvatarContainer>
      <Label>Contact</Label>
      <ContactWrapper>
        <IconContainer><i class="fa-solid fa-phone"></i></IconContainer>
        <div>{personal_data.phone}</div>
      </ContactWrapper>
      <ContactWrapper>
      <IconContainer><i class="fa-solid fa-envelope"></i></IconContainer>
        <div>{personal_data.email}</div>
      </ContactWrapper>
      <ContactWrapper>
      <IconContainer><i class="fa-solid fa-location-dot"></i></IconContainer>
        {personal_data.address}
      </ContactWrapper>
      <ContactWrapper>
      <IconContainer><i class="fa-brands fa-linkedin"></i></IconContainer>
        <Link
          href="https://www.linkedin.com/in/simeon-simeonov-79553544/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </Link>
      </ContactWrapper>
      <ContactWrapper>
      <IconContainer><i class="fa-brands fa-github"></i></IconContainer>
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

const IconContainer = styled.div`
  width: 18px;
  font-size: 18px;
  margin-right: 10px;
  color: #432616ee;
  text-align: center;
`;

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0px 30px 0;
  @media (max-width: 800px) {
    display: none;
  }
`
const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  opacity: 0.9;
  border: 1px solid #ccc8;
`;

