import React from "react";
import ContentLoader from "react-content-loader";

const Loading = (props: any) => (
  <ContentLoader
    speed={2}
    width={344}
    height={84}
    viewBox="0 0 344 84"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="2" y="3" rx="3" ry="3" width="79" height="16" />
    <rect x="1" y="31" rx="3" ry="3" width="90" height="14" />
    <rect x="116" y="29" rx="0" ry="0" width="174" height="14" />
    <rect x="120" y="59" rx="0" ry="0" width="172" height="14" />
    <rect x="2" y="61" rx="0" ry="0" width="90" height="14" />
  </ContentLoader>
);

export default Loading;
