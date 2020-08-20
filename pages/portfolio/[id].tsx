import Head from "next/head";
import styles from "./Portfolio.module.scss";
import HorizontalLayout from "../../shared/components/layout/HorizontalLayout";
import Tabs from "../../shared/components/Tabs/Tabs";
import {
  DashboardRounded,
  BeenhereRounded,
  ViewDayRounded,
} from "@material-ui/icons";
import { useState } from "react";

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

  return (
    <div className={styles.container}>
      <Head>
        <title>{profile.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {console.log(profile)}

      <HorizontalLayout profile={profile}>
        <Tabs tabs={tabs} onTabSelected={setTab} currentTabValue={tab}></Tabs>
      </HorizontalLayout>
    </div>
  );
}
