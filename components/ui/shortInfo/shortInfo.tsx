import styles from "./ShortInfo.module.scss";
import { Reactions, ShortObject } from "@/types";
import {
  GoodFilledIcon,
  GoodIcon,
  HeartFilledIcon,
  HeartIcon,
  SmileIcon,
  SmileFilledIcon,
} from "@/components/icons/icon";
import useReaction from "@/hooks/useReaction";
import { reactions } from "@/const";
import { useRecoilValue } from "recoil";
import { userState } from "@/store/state";
import InformatoinComponent from "../credit/credit";

type IconRelationType = {
  [key in Reactions]: {
    normal: JSX.Element;
    filled: JSX.Element;
  };
};

export default function ShortInfoComponent({ short }: { short: ShortObject }) {
  const [reactionState, { addReaction, removeReaction }] = useReaction(
    short.id,
    short.reactions
  );

  const IconRelation: IconRelationType = {
    heart: {
      normal: (
        <HeartIcon
          className={styles.icon}
          onClick={() => addReaction("heart")}
        />
      ),
      filled: (
        <HeartFilledIcon
          className={styles.icon}
          onClick={() => removeReaction("heart")}
        />
      ),
    },
    good: {
      normal: (
        <GoodIcon className={styles.icon} onClick={() => addReaction("good")} />
      ),
      filled: (
        <GoodFilledIcon
          className={styles.icon}
          onClick={() => removeReaction("good")}
        />
      ),
    },
    smile: {
      normal: (
        <SmileIcon
          className={styles.icon}
          onClick={() => addReaction("smile")}
        />
      ),
      filled: (
        <SmileFilledIcon
          className={styles.icon}
          onClick={() => removeReaction("smile")}
        />
      ),
    },
  };

  const dateComponent = (date: string) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();

    return (
      <div className={styles.date_container}>
        <p className={styles.year}>{year}</p>
        <p className={styles.date}>
          {month}/{day}
        </p>
      </div>
    );
  };

  const ReactionComponent = ({ reaction }: { reaction: Reactions }) => {
    return (
      <div>
        {reactionState[reaction].reacted
          ? IconRelation[reaction].filled
          : IconRelation[reaction].normal}
        <p className={styles.count}>{reactionState[reaction].count}</p>
      </div>
    );
  };

  return (
    <div className={styles.right}>
      {dateComponent(short.createdAt)}

      <div className={styles.reaction}>
        {reactions.map((reaction) => (
          <ReactionComponent reaction={reaction} key={reaction} />
        ))}
      </div>

      <InformatoinComponent speaker={short.speaker} />
    </div>
  );
}
