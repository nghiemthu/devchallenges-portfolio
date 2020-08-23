import React, { FunctionComponent, useState } from "react";
import styles from "./Skill.module.scss";
import Modal from "components/Modal/Modal";
import CardUser from "components/CardUser/CardUser";
import Skeleton from "@material-ui/lab/Skeleton";

const Skill: FunctionComponent<{ skill: any }> = ({ skill }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [endorsementUsers, setEndorsementUsers] = useState<any>();
  const [userLoading, setUserLoading] = useState<boolean>(false);

  const getEndorsementUsers = async () => {
    if (!skill.id) {
      return;
    }

    setUserLoading(true);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/skills/${skill.id}/users`
    );

    const users = await res.json();

    if (res) {
      setEndorsementUsers(users);
    }
    setUserLoading(false);
  };

  const openUsersModal = async () => {
    if (skill.endorsements.length <= 0) {
      return;
    }

    setOpen(true);
    if (!endorsementUsers) {
      getEndorsementUsers();
    }
  };

  return (
    <>
      <Modal open={open} closeModal={() => setOpen(false)} size="sm" scrollable>
        <h4 style={{ marginBottom: "var(--space-2xs)" }}>
          Endorsements for {skill.name}
        </h4>

        {!userLoading && (
          <div>
            {endorsementUsers?.map((user: any) => (
              <div
                id={user.id}
                key={user?.id}
                className={styles.skill_modal_user}
              >
                <CardUser user={user} />
              </div>
            ))}
          </div>
        )}

        {userLoading &&
          [0, 1, 2, 3].map((number) => <Skeleton key={number} height={60} />)}

        <div className={styles.skill_modal_buttonRow}>
          <button aria-label="done" onClick={() => setOpen(false)}>
            Ok
          </button>
        </div>
      </Modal>

      <button className={styles.skill} onClick={openUsersModal}>
        <div className={styles.skill_name}>{skill.name}</div>
        {skill.endorsements.length > 0 && (
          <>
            <div className={styles.skill_dot}>·</div>
            <div className={styles.skill_endorsementsButton}>
              {skill.endorsements.length} endorsements
            </div>
          </>
        )}
      </button>
    </>
  );
};

export default Skill;
