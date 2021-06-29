import React from "react";
import theme from "../theme";
import { Helmet } from "react-helmet-async";

const MetaScript = () => {
  return (
    <Helmet>
      <title>Rweet Dictionary</title>
      <meta
        property="og:image"
        content="https://image.flaticon.com/icons/png/512/60/60580.png"
      />
      <meta property="og:description" content="트위터 스타일 사전입니다." />
      <style>{`body { background-color: ${theme.bgColor}; }`}</style>
    </Helmet>
  );
};

export default MetaScript;
