import Head from "next/head";
import styles from "./Portfolio.module.scss";
import Certificates from "components/Certificates/Certificates";
import Tabs from "components/Tabs/Tabs";
import {
  DashboardRounded,
  BeenhereRounded,
  ViewDayRounded,
  VerifiedUserRounded,
} from "@material-ui/icons";
import { useState, useEffect } from "react";
import CardSolution from "components/CardSolution/CardSolution";
import Grid from "@material-ui/core/Grid";
import Skills from "components/Skills/Skills";
import BadgeSummary from "components/BadgeSummary/BadgeSummary";
import BadgeSmallSummary from "components/BadgeSmallSummary/BadgeSmallSummary";
import challengePaths from "data/challengePaths";
import RecentFeedbacks from "components/RecentFeedbacks/RecentFeedbacks";
import HorizontalLayout from "components/Layout/HorizontalLayout";

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.API_BASE_URL}/users/username/nghiemthu`
  );

  const profile = await res.json();

  return {
    props: {
      profile,
    },
  };
}

enum TabValues {
  overview = "overview",
  projects = "projects",
  achievements = "achievements",
}

export default function Portfolio({ profile }) {
  const [tab, setTab] = useState<TabValues>(TabValues.overview);
  const [solutions, setSolutions] = useState([]);
  const [skills, setSkills] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [badges, setBadges] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  const tabs = [
    {
      value: TabValues.overview,
      label: "Overview",
      Icon: DashboardRounded,
    },
    {
      value: TabValues.projects,
      label: `Projects (${solutions ? solutions.length : 0})`,
      Icon: ViewDayRounded,
    },
    {
      value: TabValues.achievements,
      label: `Achievements`,
      Icon: BeenhereRounded,
    },
  ];

  const getPathDetails = (pathId: string) => {
    return challengePaths.find(({ id }) => pathId === id);
  };

  const getSolutions = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/solutions/user/${profile.uid}/challenges`
    );

    const solutions = await res.json();

    setSolutions(solutions);
  };

  const getSkills = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/skills/user/${profile.uid}`
    );

    const skills = await res.json();

    setSkills(skills);
  };

  const getCertificates = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/certificate/user/${profile.uid}`
    );

    const certificates = await res.json();

    setCertificates(certificates);
  };

  const getBadges = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/user-badges/${profile.uid}`
    );

    const badges = await res.json();

    setBadges(badges);
  };

  const getRecentFeedbacks = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/feedbacks/user/${profile.uid}`
    );

    const feedbacks = await res.json();

    setFeedbacks(feedbacks);
  };

  useEffect(() => {
    getSolutions();
    getSkills();
    getCertificates();
    getBadges();
    getRecentFeedbacks();
  }, []);

  return (
    <div className={styles.portfolio}>
      <Head>
        <title>{profile.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HorizontalLayout
        sideNavigation={
          <>
            <img
              src={profile.picture}
              alt={profile.name}
              className={styles.portfolio_sideNavigation_profileImage}
            />
            <h1 className={styles.portfolio_sideNavigation_name}>
              {profile.name}
            </h1>

            <h6 className={styles.portfolio_sideNavigation_username}>
              {profile.title}
            </h6>
            <p className={styles.portfolio_sideNavigation_bio}>{profile.bio}</p>

            {certificates && certificates?.length > 0 && (
              <div className={styles.portfolio_sideNavigation_achievement}>
                <h3>Certificates</h3>
                {certificates?.map(({ pathId }) => (
                  <div
                    key={pathId}
                    className={
                      styles.portfolio_sideNavigation_achievement_certificate
                    }
                  >
                    <VerifiedUserRounded fontSize="inherit" />{" "}
                    <div
                      className={
                        styles.portfolio_sideNavigation_achievement_certificate_name
                      }
                    >
                      {getPathDetails(pathId)?.name}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {badges.length > 0 && (
              <div className={styles.portfolio_sideNavigation_achievement}>
                <h3>Badges</h3>
                <BadgeSmallSummary badges={badges} />
              </div>
            )}
          </>
        }
      >
        <Tabs tabs={tabs} onTabSelected={setTab} currentTabValue={tab}></Tabs>

        {tab === TabValues.overview && (
          <>
            {skills && <Skills skills={skills} />}

            {solutions.filter((solution) => solution.pinned).length > 0 && (
              <>
                <h3>Pinned</h3>

                <Grid container spacing={3}>
                  {solutions
                    .filter((solution) => solution.pinned)
                    .map((solution) => (
                      <Grid item xs={12} sm={6} key={solution.id}>
                        <CardSolution solution={solution} />
                      </Grid>
                    ))}
                </Grid>
              </>
            )}

            {feedbacks.length > 0 && (
              <RecentFeedbacks recentFeedbacks={feedbacks} />
            )}
          </>
        )}

        {tab === TabValues.projects && (
          <>
            <Grid container spacing={3}>
              {solutions.length > 0 &&
                solutions?.map((solution) => (
                  <Grid item xs={12} sm={6} key={solution.id}>
                    <CardSolution solution={solution} />
                  </Grid>
                ))}
            </Grid>
          </>
        )}

        {tab === TabValues.achievements && (
          <>
            <h3>Certificates</h3>
            <Certificates certificates={certificates} />

            <h3>Badges</h3>
            <BadgeSummary badges={badges} />
          </>
        )}
      </HorizontalLayout>
    </div>
  );
}
