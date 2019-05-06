import React from "react";
import Wrapper from "../components/Wrapper/index";

function NoMatch() {
  return (
    <Wrapper>
      <div>
        <h1>404 Page Not Found
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
      </div>
    </Wrapper>
  );
}

export default NoMatch;