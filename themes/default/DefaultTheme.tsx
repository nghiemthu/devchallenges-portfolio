import Head from "next/head";
import styles from "./DefaultTheme.module.scss";
import Certificates from "components/Certificates/Certificates";
import Tabs from "components/Tabs/Tabs";
import {
  DashboardRounded,
  BeenhereRounded,
  ViewDayRounded,
  VerifiedUserRounded,
  EmailRounded,
  LanguageRounded,
} from "@material-ui/icons";
import { useState } from "react";
import CardSolution from "components/CardSolution/CardSolution";
import Grid from "@material-ui/core/Grid";
import Skills from "components/Skills/Skills";
import BadgeSummary from "components/BadgeSummary/BadgeSummary";
import BadgeSmallSummary from "components/BadgeSmallSummary/BadgeSmallSummary";
import challengePaths from "data/challengePaths";
import RecentFeedbacks from "components/RecentFeedbacks/RecentFeedbacks";
import HorizontalLayout from "components/Layout/HorizontalLayout";
import Footer from "components/Footer/Footer";
import Socials from "components/Socials/Socials";
import ReactMarkdown from "react-markdown";
import CodeBlock from "components/CodeBlock/CodeBlock";
import SEO from "components/SEO/SEO";

enum TabValues {
  overview = "overview",
  projects = "projects",
  achievements = "achievements",
}

export default function DefaultTheme({
  profile,
  certificates,
  skills,
  solutions,
  badges,
  feedbacks,
}) {
  const [tab, setTab] = useState<TabValues>(TabValues.overview);
  const [navOpenOnMobile, setNavOpenOnMobile] = useState<boolean>(false);

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

  const pinnedProjects =
    solutions.filter((solution) => solution.pinned).length > 0
      ? solutions.filter((solution) => solution.pinned)
      : solutions;

  return (
    <div className={styles.defaultTheme}>
      <SEO user={profile} />

      <HorizontalLayout
        openOnMobile={navOpenOnMobile}
        close={() => setNavOpenOnMobile(false)}
        sideNavigationMobile={
          <>
            <button
              style={{
                padding: 0,
                border: "none",
                backgroundColor: "transparent",
              }}
              onClick={() => setNavOpenOnMobile(!navOpenOnMobile)}
            >
              <img
                src={profile.picture}
                alt={profile.name}
                className={
                  styles.defaultTheme_sideNavigation_profileImageMobile
                }
              />
            </button>

            <div className={styles.defaultTheme_sideNavigation_socialsMobile}>
              <Socials user={profile} />
            </div>
          </>
        }
        sideNavigation={
          <>
            <img
              src={profile.picture}
              alt={profile.name}
              className={styles.defaultTheme_sideNavigation_profileImage}
            />
            <h1 className={styles.defaultTheme_sideNavigation_name}>
              {profile.name}
            </h1>

            <h6 className={styles.defaultTheme_sideNavigation_username}>
              {profile.title}
            </h6>
            <p className={styles.defaultTheme_sideNavigation_bio}>
              {profile.bio}
            </p>

            {(profile.email || profile.blog) && (
              <div className={styles.defaultTheme_sideNavigation_achievement}>
                <h3>Contacts</h3>

                {profile.email && (
                  <a
                    className={styles.defaultTheme_sideNavigation_contact}
                    href={profile.email}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <EmailRounded fontSize="inherit" />{" "}
                    <div
                      className={
                        styles.defaultTheme_sideNavigation_contact_value
                      }
                    >
                      {profile.email.slice(0, 50)}
                    </div>
                  </a>
                )}

                {profile.blog && (
                  <a
                    className={styles.defaultTheme_sideNavigation_contact}
                    href={profile.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LanguageRounded fontSize="inherit" />{" "}
                    <div
                      className={
                        styles.defaultTheme_sideNavigation_contact_value
                      }
                    >
                      {profile.blog.slice(0, 50)}
                    </div>
                  </a>
                )}
              </div>
            )}

            {certificates && certificates?.length > 0 && (
              <div className={styles.defaultTheme_sideNavigation_achievement}>
                <h3>Certificates</h3>
                {certificates?.map(({ pathId }) => (
                  <div
                    key={pathId}
                    className={
                      styles.defaultTheme_sideNavigation_achievement_certificate
                    }
                  >
                    <VerifiedUserRounded fontSize="inherit" />{" "}
                    <div
                      className={
                        styles.defaultTheme_sideNavigation_achievement_certificate_name
                      }
                    >
                      {getPathDetails(pathId)?.name}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {badges.length > 0 && (
              <div className={styles.defaultTheme_sideNavigation_achievement}>
                <h3>Badges</h3>
                <BadgeSmallSummary badges={badges} />
              </div>
            )}

            <div className={styles.defaultTheme_sideNavigation_achievement}>
              <h3>Socials</h3>
              <Socials user={profile} />
            </div>
          </>
        }
      >
        <div style={{ minHeight: "100vh" }}>
          <Tabs tabs={tabs} onTabSelected={setTab} currentTabValue={tab}></Tabs>
          {tab === TabValues.overview && (
            <>
              {profile.readme && profile.readme.length > 0 && (
                <div className={styles.defaultTheme_readme}>
                  <ReactMarkdown
                    source={profile.readme}
                    renderers={{ code: CodeBlock }}
                  />
                </div>
              )}

              {skills.length > 0 && <Skills skills={skills} />}

              {pinnedProjects.length > 0 && (
                <div className={styles.defaultTheme_pinned}>
                  <h3>Pinned</h3>

                  <Grid container spacing={3}>
                    {pinnedProjects.map((solution) => (
                      <Grid item xs={12} sm={6} key={solution.id}>
                        <CardSolution solution={solution} />
                      </Grid>
                    ))}
                  </Grid>
                </div>
              )}

              {feedbacks.length > 0 && (
                <RecentFeedbacks recentFeedbacks={feedbacks} />
              )}
            </>
          )}
          {tab === TabValues.projects && (
            <>
              {solutions.length > 0 && (
                <Grid container spacing={3}>
                  {solutions?.map((solution) => (
                    <Grid item xs={12} sm={6} key={solution.id}>
                      <CardSolution solution={solution} />
                    </Grid>
                  ))}
                </Grid>
              )}
            </>
          )}
          {tab === TabValues.achievements && (
            <>
              {certificates.length > 0 && (
                <>
                  <h3>Certificates</h3>
                  <Certificates certificates={certificates} />
                </>
              )}

              {badges.length > 0 && (
                <>
                  <h3>Badges</h3>
                  <BadgeSummary badges={badges} />
                </>
              )}
            </>
          )}
        </div>

        <Footer />
      </HorizontalLayout>
    </div>
  );
}
