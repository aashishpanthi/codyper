import Code from "react-code-ui";
import "react-code-ui/dist/index.css";
import { StyledHeader } from "./Header.styled";
import { StyledButton } from "../styled/Button/Button.styled";
import { Link } from "react-router-dom";
import IllustrationMockups from "../svgs/IllustrationMockups";

const code = `await skills.get({
  "typing": 'Boost your typing speed',
  "coding": 'Improve your coding skills',
  "languages": ["Python", "JavaScript", "C++", "Java"],
  steps:{
    "1": ['type'],
    "2": ['learn'],
    "3": ['repeat'],
  }
});
`;

function Header({ iscode }) {
  return (
    <StyledHeader>
      <nav>
        <Link to="/">
          <h2>Codyper</h2>
        </Link>
        <Link to="/test">
          <StyledButton color={`#111`} bg={"#fff"}>
            Try It Now
          </StyledButton>
        </Link>
      </nav>

      <section className="headerContent">
        <article>
          {iscode ? (
            <>
              <h1>Learn to code increasing typing speed</h1>
              <p>
                Here, you can select which programming language you want to
                learn and get started by typing with maximum speed. Boost your
                typing speed and improve your programming skills.
              </p>
            </>
          ) : (
            <>
              <h1>About the website</h1>
              <p>
                The main focus of this website is to help you learn to code
                while learning to type. If you don't know anything about
                programming then also this website will help you a lot when you
                start typing the code now and later on you try to learn to code.
                The easiest part of this website is to type the keywords then
                you can move onto typing the real code. This website has code of
                C++, Java, Python and JavaScript for you to practice.
              </p>
            </>
          )}
          <Link to="/test">
            <StyledButton>Get Started Now</StyledButton>
          </Link>
        </article>
        {iscode ? <Code code={code} /> : <IllustrationMockups />}
      </section>
    </StyledHeader>
  );
}

export default Header;
