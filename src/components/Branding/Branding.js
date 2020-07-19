import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const StyledImage = styled.img`
  height: 2rem;
  width: 2rem;
  filter: invert(97%) sepia(1%) saturate(357%) hue-rotate(158deg)
    brightness(115%) contrast(94%);
`;

function Branding({ ...props }) {
  const logo = useStaticQuery(
    graphql`
      query {
        path: file(relativePath: { eq: "sf.svg" }) {
          publicURL
        }
      }
    `
  );

  return <StyledImage {...props} src={logo.path.publicURL} />;
}

export default Branding;
