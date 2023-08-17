import { playingShortIdState, playingSoundState } from "@/store/state";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export function usePlayingSound() {
  const [playingSound, __setPlayingSound] = useRecoilState(playingSoundState);
  const [_shortId, setShortId] = useRecoilState(playingShortIdState);

  function switchShort(shortId: number) {
    if (_shortId !== shortId && playingSound) {
      playingSound.currentTime = 0;
      playingSound.pause();
      setShortId(shortId);
    }
  }

  function setPlayingSound(sound: HTMLAudioElement | null) {
    __setPlayingSound(sound);
    sound?.play();
  }

  return [playingSound, { setPlayingSound, switchShort }] as const;
}
