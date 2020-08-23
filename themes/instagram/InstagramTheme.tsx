import Head from "next/head";
import styles from "./InstagramTheme.module.scss";
import Certificates from "components/Certificates/Certificates";
import {
  DashboardRounded,
  BeenhereRounded,
  ViewDayRounded,
  VerifiedUserRounded,
  LanguageRounded,
  EmailRounded,
} from "@material-ui/icons";
import { useState } from "react";
import CardSolution from "components/CardSolution/CardSolution";
import Grid from "@material-ui/core/Grid";
import Skills from "components/Skills/Skills";
import BadgeSummary from "components/BadgeSummary/BadgeSummary";
import CodeBlock from "components/CodeBlock/CodeBlock";
import BadgeSmallSummary from "components/BadgeSmallSummary/BadgeSmallSummary";
import challengePaths from "data/challengePaths";
import RecentFeedbacks from "components/RecentFeedbacks/RecentFeedbacks";
import InstagramTabs from "./components/InstagramTabs/InstagramTabs";
import InstagramHeader from "./components/InstagramHeader/InstagramHeader";
import InstagramFooter from "./components/InstagramFooter/InstagramFooter";
import ReactMarkdown from "react-markdown";
import SEO from "components/SEO/SEO";

enum TabValues {
  overview = "overview",
  projects = "projects",
  achievements = "achievements",
}

export default function InstagramTheme({
  profile,
  certificates,
  skills,
  solutions,
  badges,
  feedbacks,
}) {
  const [tab, setTab] = useState<TabValues>(TabValues.overview);

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
    <div className={styles.instagramTheme}>
      <SEO user={profile} />

      <div className={styles.instagramTheme_content}>
        <InstagramHeader user={profile} />

        <div className={styles.instagramTheme_summary}>
          <Grid container spacing={3}>
            <Grid xs={12} md={2} item></Grid>
            <Grid xs={12} md={3} item>
              <div
                className={styles.instagramTheme_summary_profileImageWrapper}
              >
                <img
                  src={profile.picture}
                  alt={profile.name}
                  className={styles.instagramTheme_summary_profileImage}
                />
              </div>
            </Grid>
            <Grid xs={12} md={7} item>
              <div>
                <h1 className={styles.instagramTheme_summary_name}>
                  {profile.name}
                </h1>
                <h6 className={styles.instagramTheme_summary_username}>
                  {profile.title}
                </h6>
                <p className={styles.instagramTheme_summary_bio}>
                  {profile.bio}
                </p>

                <div className={styles.instagramTheme_summary_achievements}>
                  {(profile.email || profile.blog) && (
                    <div className={styles.instagramTheme_summary_achievement}>
                      <h3>Contacts</h3>

                      {profile.email && (
                        <a
                          className={styles.instagramTheme_summary_contact}
                          href={profile.email}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <EmailRounded fontSize="inherit" />{" "}
                          <div
                            className={
                              styles.instagramTheme_summary_contact_value
                            }
                          >
                            {profile.email.slice(0, 50)}
                          </div>
                        </a>
                      )}

                      {profile.blog && (
                        <a
                          className={styles.instagramTheme_summary_contact}
                          href={profile.blog}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LanguageRounded fontSize="inherit" />{" "}
                          <div
                            className={
                              styles.instagramTheme_summary_contact_value
                            }
                          >
                            {profile.blog.slice(0, 50)}
                          </div>
                        </a>
                      )}
                    </div>
                  )}

                  {certificates?.length > 0 && (
                    <div className={styles.instagramTheme_summary_achievement}>
                      <h3>Certificates</h3>
                      {certificates?.map(({ pathId }) => (
                        <div
                          key={pathId}
                          className={
                            styles.instagramTheme_summary_achievement_certificate
                          }
                        >
                          <VerifiedUserRounded fontSize="inherit" />{" "}
                          <div
                            className={
                              styles.instagramTheme_summary_achievement_certificate_name
                            }
                          >
                            {getPathDetails(pathId)?.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {badges.length > 0 && (
                    <div className={styles.instagramTheme_summary_achievement}>
                      <h3>Badges</h3>
                      <BadgeSmallSummary badges={badges} />
                    </div>
                  )}
                </div>
              </div>
            </Grid>
            <Grid xs={12} md={2} item></Grid>
          </Grid>
        </div>

        <InstagramTabs
          tabs={tabs}
          onTabSelected={setTab}
          currentTabValue={tab}
        ></InstagramTabs>

        {tab === TabValues.overview && (
          <>
            {profile.readme.length > 0 && (
              <div className={styles.instagramTheme_readme}>
                <ReactMarkdown
                  source={profile.readme}
                  escapeHtml={false}
                  renderers={{ code: CodeBlock }}
                />
              </div>
            )}

            {skills.length > 0 && <Skills skills={skills} />}

            {pinnedProjects.length > 0 && (
              <div className={styles.instagramTheme_pinned}>
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

        <InstagramFooter user={profile} />
      </div>
    </div>
  );
}
