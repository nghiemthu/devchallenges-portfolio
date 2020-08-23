import { useEffect, useState } from "react";

const useFortfolio = ({ profile }) => {
  const [solutions, setSolutions] = useState([]);
  const [skills, setSkills] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [badges, setBadges] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

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

  return { solutions, skills, certificates, badges, feedbacks };
};

export default useFortfolio;
