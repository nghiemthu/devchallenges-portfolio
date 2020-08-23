import {
  GitHub,
  Twitter,
  Instagram,
  Facebook,
  LinkedIn,
  YouTube,
} from "@material-ui/icons";
import styles from "./Socials.module.scss";

const Socials = ({ user }) => {
  if (!user) {
    return <></>;
  }

  return (
    <div className={styles.socials}>
      {user.githubUrl && (
        <div className={styles.socials_link}>
          <a href={user.githubUrl} target="_blank" rel="noopener noreferrer">
            <GitHub fontSize="inherit" />
          </a>
        </div>
      )}

      {user.linkedin && user.linkedin.length > 0 && (
        <div className={styles.socials_link}>
          <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedIn fontSize="inherit" />
          </a>
        </div>
      )}

      {user.twitter && user.twitter.length > 0 && (
        <div className={styles.socials_link}>
          <a href={user.twitter} target="_blank" rel="noopener noreferrer">
            <Twitter fontSize="inherit" />
          </a>
        </div>
      )}

      {user.facebook && user.facebook.length > 0 && (
        <div className={styles.socials_link}>
          <a href={user.facebook} target="_blank" rel="noopener noreferrer">
            <Facebook fontSize="inherit" />
          </a>
        </div>
      )}
      {user.instagram && user.instagram.length > 0 && (
        <div className={styles.socials_link}>
          <a href={user.instagram} target="_blank" rel="noopener noreferrer">
            <Instagram fontSize="inherit" />
          </a>
        </div>
      )}
      {user.youtube && user.youtube.length > 0 && (
        <div className={styles.socials_link}>
          <a href={user.youtube} target="_blank" rel="noopener noreferrer">
            <YouTube fontSize="inherit" />
          </a>
        </div>
      )}
      {user.twitch && user.twitch.length > 0 && (
        <div className={styles.socials_link}>
          <a href={user.twitch} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="var(--grey-6)"
            >
              <path
                d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

export default Socials;
