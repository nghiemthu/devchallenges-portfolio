import Head from "next/head";
import styles from "./Portfolio.module.scss";
import HorizontalLayout from "components/layout/HorizontalLayout";
import Tabs from "components/Tabs/Tabs";
import {
  DashboardRounded,
  BeenhereRounded,
  ViewDayRounded,
} from "@material-ui/icons";
import { useState, useEffect } from "react";
import CardSolution from "components/CardSolution/CardSolution";
import Grid from "@material-ui/core/Grid";
import Skills from "components/Skills/Skills";

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
  solutions = "solutions",
  certificates = "certificates",
}

const tabs = [
  {
    value: TabValues.overview,
    label: "Overview",
    Icon: DashboardRounded,
  },
  {
    value: TabValues.solutions,
    label: `Solutions (-)`,
    Icon: ViewDayRounded,
  },
  {
    value: TabValues.certificates,
    label: `Certificates (-)`,
    Icon: BeenhereRounded,
  },
];
export default function Portfolio({ profile }) {
  const [tab, setTab] = useState<TabValues>(TabValues.overview);
  const [solutions, setSolutions] = useState([]);
  const [skills, setSkills] = useState([]);

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

  useEffect(() => {
    getSolutions();
    getSkills();
  }, []);

  return (
    <div className={styles.portfolio}>
      <Head>
        <title>{profile.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HorizontalLayout profile={profile}>
        <Tabs tabs={tabs} onTabSelected={setTab} currentTabValue={tab}></Tabs>

        <Skills skills={skills} />

        <h4>Pinned</h4>

        <Grid container spacing={3}>
          {solutions &&
            solutions.map((solution) => (
              <Grid item xs={12} sm={6} key={solution.id}>
                <CardSolution solution={solution} />
              </Grid>
            ))}
        </Grid>
      </HorizontalLayout>
    </div>
  );
}
