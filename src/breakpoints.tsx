const breakpoints = (xs = 595, sm = 600, md = 768, lg = 889, xl = 1200) => {
  return {
    xScreen: `@media only screen and (max-width: ${xs}px)`,
    smallScreen: `@media only screen and (max-width: ${sm}px)`,
    mediumScreen: `@media only screen and (max-width: ${md}px)`,
    largeScreen: `@media only screen and (max-width: ${lg}px)`,
    xtraLarge: `@media only screen and (max-width: ${xl}px)`,
  };
};

export { breakpoints };
