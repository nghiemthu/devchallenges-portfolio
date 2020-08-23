import Head from "next/head";

const SEO = ({ user }) => {
  const username = user.githubUrl.replace("https://github.com/", "");

  return (
    <>
      <Head>
        <title>{user.name}</title>

        <link rel="icon" href="/devchallenges.png" />

        <meta name="description" content={user.bio} />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://portfolio.devchallenges.io/${username}`}
        />
        <meta property="og:title" content={user.name} />
        <meta property="og:description" content={user.bio} />

        <meta property="og:image" content={user.picture} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://portfolio.devchallenges.io/${username}`}
        />
        <meta property="twitter:title" content={user.name} />
        <meta property="twitter:description" content={user.bio} />
        <meta property="twitter:image" content={user.picture} />

        <link
          rel="shortcut icon"
          type="image/x-icon"
          href={`https://portfolio.devchallenges.io/${username}`}
        />
      </Head>
    </>
  );
};

export default SEO;
