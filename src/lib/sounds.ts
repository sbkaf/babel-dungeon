// @ts-ignore
import { Howl } from "howler";
import { getSoundEnabled } from "~/lib/storage";

export const backgroundMusic = new Howl({
  src: ["music.mp3"],
  loop: true,
  autoplay: getSoundEnabled(),
  volume: 0.3,
});

export const levelUpSfx = new Howl({
  src: ["VictorySmall.mp3"],
});
