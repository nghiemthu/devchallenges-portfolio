import { BadgeTypes, BadgeNames, BadgeCategory } from "types/badge";

const badges: any = {
  [BadgeNames.Enlightened]: {
    type: BadgeTypes.bronze,
    category: BadgeCategory.feedback,
    label: "Enlightened",
    description: "Feedback with score of 5",
  },

  [BadgeNames.Reviewer]: {
    type: BadgeTypes.silver,
    category: BadgeCategory.feedback,
    label: "Reviewer",
    description: "Feedback with score of 10",
  },

  [BadgeNames.Guru]: {
    type: BadgeTypes.gold,
    category: BadgeCategory.feedback,
    label: "Guru",
    description: "Feedback with score of 20",
  },

  [BadgeNames.Illuminator]: {
    type: BadgeTypes.diamond,
    category: BadgeCategory.feedback,
    label: "Illuminator",
    description: "Feedback with score of 50",
  },

  [BadgeNames.Tutor]: {
    type: BadgeTypes.bronze,
    category: BadgeCategory.participant,
    label: "Tutor",
    description: "Leave 3 feedback",
  },

  [BadgeNames.Feedbacker]: {
    type: BadgeTypes.silver,
    category: BadgeCategory.participant,
    label: "Feedbacker",
    description: "Leave 10 feedback",
  },

  [BadgeNames.Teacher]: {
    type: BadgeTypes.gold,
    category: BadgeCategory.participant,
    label: "Teacher",
    description: "Leave 15 feedback",
  },

  [BadgeNames.Professor]: {
    type: BadgeTypes.diamond,
    category: BadgeCategory.participant,
    label: "Professor",
    description: "Leave 25 feedback",
  },

  [BadgeNames.Solver]: {
    type: BadgeTypes.bronze,
    category: BadgeCategory.participant,
    label: "Solver",
    description: "Submit 2 solutions",
  },

  [BadgeNames.ChallengeCrusher]: {
    type: BadgeTypes.silver,
    category: BadgeCategory.participant,
    label: "Challenge Crusher",
    description: "Submit 5 solutions",
  },

  [BadgeNames.SolutionExpert]: {
    type: BadgeTypes.gold,
    category: BadgeCategory.participant,
    label: "Solution Expert",
    description: "Submit 10 solutions",
  },

  [BadgeNames.SolutionHero]: {
    type: BadgeTypes.diamond,
    category: BadgeCategory.participant,
    label: "Solution Hero",
    description: "Submit 15 solutions",
  },

  [BadgeNames.WeeklyPopulist]: {
    type: BadgeTypes.gold,
    category: BadgeCategory.participant,
    label: "Weekly Populist",
    description: "Top 5 highest popularity score of the week",
  },

  [BadgeNames.MonthlyPopulist]: {
    type: BadgeTypes.diamond,
    category: BadgeCategory.participant,
    label: "Monthy Populist",
    description: "Top 5 highest popularity score of the month",
  },
  [BadgeNames.Beloved]: {
    type: BadgeTypes.bronze,
    category: BadgeCategory.solution,
    label: "Beloved",
    description: "Have 5 likes to your solution",
  },

  [BadgeNames.Perfection]: {
    type: BadgeTypes.silver,
    category: BadgeCategory.solution,
    label: "Perfection",
    description: "Have 10 likes to your solution",
  },

  [BadgeNames.Epic]: {
    type: BadgeTypes.gold,
    category: BadgeCategory.solution,
    label: "Epic",
    description: "Have 20 likes to your solution",
  },

  [BadgeNames.Legandary]: {
    type: BadgeTypes.diamond,
    category: BadgeCategory.solution,
    label: "Legandary",
    description: "Have 50 likes to your solution",
  },
  [BadgeNames.Supporter]: {
    type: BadgeTypes.bronze,
    category: BadgeCategory.solution,
    label: "Supporter",
    description: "Donate 1 euros per month",
  },

  [BadgeNames.Honor]: {
    type: BadgeTypes.silver,
    category: BadgeCategory.patreon,
    label: "Honor",
    description: "Donate 5 euros per month",
  },

  [BadgeNames.marvelouser]: {
    type: BadgeTypes.gold,
    category: BadgeCategory.patreon,
    label: "Marvelouser",
    description: "Donate 10 euros per month",
  },

  [BadgeNames.DiamondSupporter]: {
    type: BadgeTypes.diamond,
    category: BadgeCategory.patreon,
    label: "Diamond Supporter",
    description: "Donate 20 euros or more per month",
  },

  [BadgeNames.Incontructive]: {
    type: BadgeTypes.penalty,
    category: BadgeCategory.penalty,
    label: "Incontructive",
    description: "Your feedback is downvoted 5 times",
  },

  [BadgeNames.Spam]: {
    type: BadgeTypes.penaltyTwo,
    category: BadgeCategory.penalty,
    label: "Spam",
    description: "One of your solution or feedback receives 6 spams",
  },
};

const getBadge = (badgeNames: string) => {
  return badges[badgeNames];
};

export default getBadge;
