import { LANG1_CODE } from "~/lib/constants.ts";

export function tts(text: string) {
  try {
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.lang = LANG1_CODE;
    window.speechSynthesis.speak(msg);
  } catch (e) {
    console.log(e);
  }
}
