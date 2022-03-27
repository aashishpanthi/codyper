import Code from "react-code-ui";
import "react-code-ui/dist/index.css";
import { StyledHeader } from "./Header.styled";
import { StyledButton } from "../styled/Button/Button.styled";
import { Link } from "react-router-dom";

const code = `await skills.get({
  "typing": 'Increase your typing speed',
  "coding": 'Improve your coding skills',
  "languages": ["Python", "JavaScript", "C++", "Java"],
  steps:{
    "1": ['TYPE'],
    "2": ['LEARN'],
    "3": ['REPEAT'],
  }
});
`;

function Header() {
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
          <h1>Learn to code increasing typing speed</h1>
          <p>
            Here, you can select which programming language you want to learn
            and get started by typing with maximum speed. Boost your typing
            speed and improve your programming skills.
          </p>
          <Link to="/test">
            <StyledButton>Get Started Now</StyledButton>
          </Link>
        </article>
        <Code code={code} />
      </section>
    </StyledHeader>
  );
}

export default Header;
