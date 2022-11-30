import { useState, useEffect } from "react";
import { settings } from "./configs/game";
import styles from "../../../styles/Game/User.module.css";
import axios from "axios";

export const User = ({ userScore, userSelection, userName, userPoints, children }) => {
  return (
    <div className={styles.userCard}>
      <h1>{userName}</h1>
      {userScore < settings.winTarget ? (
        <>
          <div className={styles.choiceGrid}>{children}</div>
          <h3>
            {userSelection === ""
              ? "Pick one!"
              : `Your choice: ${userSelection}`}
          </h3>
          <h3>
            {`Total Score: ${userPoints}`}
          </h3>
        </>
      ) : (
        <>
          <h3>Victory Royale!</h3>
        </>
      )}
    </div>
  );
};
