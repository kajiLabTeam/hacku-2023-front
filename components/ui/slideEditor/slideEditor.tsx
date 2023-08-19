import styles from "./slideEditor.module.scss";
import SlideComponent from "@/components/ui/slide/slide";
import MdEditorComponent from "@/components/ui/mdEditor/mdEditor";
import ScriptEditor from "@/components/ui/scriptEditor/scriptEditor";
import { PlusIcon } from "@/components/icons/icon";
import { Button, Flex, Modal, Space } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PostSlideObject } from "@/types";

type props = {
  index: number;
  slide: PostSlideObject;
  addSlideAt: (index: number) => void;
  deleteSlideAt: (index: number) => void;
};

export default function SlideEditorComponent({
  index,
  slide,
  addSlideAt,
  deleteSlideAt,
}: props) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal.Root
        className={styles.slide_delete_modal}
        opened={opened}
        onClose={close}
      >
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>スライドを削除しますか</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>

          <Modal.Body>
            <Flex
              mih={50}
              gap="md"
              justify="flex-end"
              align="flex-end"
              direction="row"
              wrap="wrap"
            >
              <Button onClick={close} variant="outline">
                キャンセル
              </Button>

              <Button onClick={() => deleteSlideAt(index)} data-autofocus>
                削除
              </Button>
            </Flex>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <section className={styles.page} data-slide-number={index} key={index}>
        <div className={styles.left_top}>
          <span className={styles.pagenum} onClick={open}>
            {index + 1}
          </span>
          <PlusIcon
            className={styles.plus_icon}
            onClick={() => addSlideAt(index + 1)}
          />
        </div>

        <div className={styles.right_top}>
          <div className={styles.slide_container}>
            <SlideComponent markdown={slide.slide} />
          </div>
        </div>

        <div className={styles.left_bottom}>
          <ScriptEditor slideNumber={index} />
        </div>

        <div className={styles.right_bottom}>
          <MdEditorComponent slideNumber={index} />
        </div>
      </section>
    </>
  );
}
