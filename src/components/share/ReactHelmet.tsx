import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

type ReactHelmetProps = {
  title: string;
  description: string;
  siteName: string;
};

const ReactHelmet: FC<ReactHelmetProps> = (props) => {
  const { title, description, siteName } = props;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:description" content={description} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary" />
    </Helmet>
  );
};

export default ReactHelmet;
