import { Modal } from "@mantine/core";
import styles from "./credit.module.scss";
import { InformationIcon } from "@/components/icons/icon";
import { useDisclosure } from "@mantine/hooks";
import { Speaker } from "@/types";

export default function InformatoinComponent({
  speaker,
}: {
  speaker: Speaker;
}) {
  const [opened, { open, close }] = useDisclosure(false);

  function credit(speaker: Speaker) {
    switch (speaker) {
      case "もち子さん":
        return "もち子(cv 明日葉よもぎ)";
      default:
        return speaker;
    }
  }

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false} centered>
        <h2 className={styles.credit}>VOICEVOX: {credit(speaker)}</h2>
      </Modal>

      <InformationIcon className={styles.icon} onClick={open} />
    </>
  );
}
