import DefaultTheme from "../themes/default/DefaultTheme";
import InstagramTheme from "../themes/instagram/InstagramTheme";
import useFortfolio from "./usePortfolio";

const themes = {
  default: DefaultTheme,
  instagram: InstagramTheme,
};

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `${process.env.API_BASE_URL}/users/username/${params.id}`
  );

  const profile = await res.json();

  return {
    props: {
      profile,
    },
  };
}

export default function Portfolio({ profile }) {
  const { solutions, certificates, skills, badges, feedbacks } = useFortfolio({
    profile,
  });
  let Theme = themes[profile.portfolioTheme];

  if (!Theme) {
    Theme = themes.default;
  }

  return (
    <Theme
      solutions={solutions}
      profile={profile}
      certificates={certificates}
      skills={skills}
      badges={badges}
      feedbacks={feedbacks}
    />
  );
}
