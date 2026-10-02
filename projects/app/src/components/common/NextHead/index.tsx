import Head from 'next/head';
import React, { useMemo } from 'react';

const FAVICON_VERSION = 'v2';

const NextHead = ({ title, icon, desc }: { title?: string; icon?: string; desc?: string }) => {
  const formatIcon = useMemo(() => {
    if (!icon || icon === '/') return `/favicon.png?${FAVICON_VERSION}`;
    if (icon.startsWith('http')) {
      return icon;
    }
    if (icon.startsWith('/')) {
      const separator = icon.includes('?') ? '&' : '?';
      return `${icon}${separator}${FAVICON_VERSION}`;
    }
    return `/favicon.png?${FAVICON_VERSION}`;
  }, [icon]);

  return (
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no, viewport-fit=cover"
      />
      <meta httpEquiv="Content-Security-Policy" content="img-src * data: blob:;" />
      {desc && <meta name="description" content={desc} />}
      <link rel="icon" type="image/png" sizes="32x32" href={formatIcon} />
      <link rel="apple-touch-icon" sizes="192x192" href={`/apple-touch-icon.png?${FAVICON_VERSION}`} />
    </Head>
  );
};

export default NextHead;
