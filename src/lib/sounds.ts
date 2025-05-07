// @ts-ignore
import { Howl } from "howler";
import { getMusicEnabled } from "~/lib/storage";

export const backgroundMusic = new Howl({
  src: ["music.mp3"],
  loop: true,
  autoplay: getMusicEnabled(),
  volume: 0.3,
});

export const levelUpSfx = new Howl({
  src: ["VictorySmall.mp3"],
});

export const successSfx = new Howl({
  src: ["success.mp3"],
});

export const errorSfx = new Howl({
  src: ["error.mp3"],
});

export const clickSfx = new Howl({
  src: ["vgmenuhighlight.mp3"],
});
