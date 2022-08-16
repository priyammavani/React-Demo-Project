import PageTitle from "../components/PageTitle";
import UseState from "../components/Hooks/UseState";
import UseEffect from "../components/Hooks/UseEffect";
import UseReducer from "../components/Hooks/UseReducer";

const About = () => {
  return (
    <>
      <PageTitle className="text-center" titleContent="About Page" />
      <div className="about-page">
        <UseState />
        <UseEffect />
        <UseReducer/>
      </div>
    </>
  );
};

export default About;
