import Button from "../Components/Button/Button";
import {H1,H2, H3, H4, H5, LgPara, MdPara, SmPara} from "./../styles/ShareStyles";
const Home = () => {
  return (
    <>
      <H1>Hello World !</H1>
      <H2>Hello World !</H2>
      <H3>Hello World !</H3>
      <H4>Hello World !</H4>
      <H5>Hello World !</H5>
      <H5 className="small_heading">Hello World !</H5>
      <SmPara>this is sm para</SmPara>
      <MdPara>this is md para</MdPara>
      <LgPara>this is lg para</LgPara>
      <Button variant="primary" href="/" text="button" />
      <Button variant="transparent" text="button" />
      <Button variant="smBtn" text="button" />
    </>
  );
};

export default Home;
