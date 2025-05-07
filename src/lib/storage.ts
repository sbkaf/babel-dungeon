import Dexie, { type EntityTable } from "dexie";

export const db = new Dexie("gamedb") as Dexie & {
  monsters: EntityTable<Monster, "id">;
};
db.version(1).stores({ monsters: "id, streak, due" });

export function getSession(): Session | null {
  const session = localStorage.gameSession;
  return session ? JSON.parse(session) : null;
}

export function setSession(session: Session) {
  localStorage.gameSession = JSON.stringify(session);
}

export function getMaxSerial(): number {
  return parseInt(localStorage.maxSerial || "0");
}

export function setMaxSerial(maxSerial: number) {
  localStorage.maxSerial = maxSerial;
}

export function getShowIntro(): number {
  return parseInt(localStorage.showIntro || "1");
}

export function setShowIntro() {
  localStorage.showIntro = 0;
}

export function getSoundEnabled(): boolean {
  return parseInt(localStorage.sounds || "1") === 1;
}

export function setSoundEnabled(enabled: boolean) {
  localStorage.sounds = enabled ? 1 : 0;
}

export function getTTSEnabled(): boolean {
  return parseInt(localStorage.tts || "0") === 1;
}

export function setTTSEnabled(enabled: boolean) {
  localStorage.tts = enabled ? 1 : 0;
}

export function getMode(): boolean {
  return parseInt(localStorage.mode || "1") === 1;
}

export function setMode(mode: boolean) {
  localStorage.mode = mode ? 1 : 0;
}

export function getUnseenIndex(): number {
  return parseInt(localStorage.unseenIndex || "0");
}

export function setUnseenIndex(unseenIndex: number) {
  localStorage.unseenIndex = unseenIndex;
}

export function getStreak(): number {
  return parseInt(localStorage.streak || "0");
}

export function setStreak(streak: number) {
  localStorage.streak = streak;
}

export function getLevel(): number {
  return parseInt(localStorage.level || "1");
}

export function setLevel(level: number) {
  localStorage.level = level;
}

export function getXp(): number {
  return parseInt(localStorage.xp || "0");
}

export function setXp(xp: number) {
  localStorage.xp = xp;
}

export function getEnergy(): { energy: number; time: number } {
  return {
    energy: parseInt(localStorage.energy || "30"),
    time: parseInt(localStorage.energyTimestamp || "0"),
  };
}

export function setEnergy(energy: number, time: number) {
  localStorage.energy = energy;
  localStorage.energyTimestamp = time;
}

export function getStudiedToday(): number {
  return parseInt(localStorage.studiedToday || "0");
}

export function setStudiedToday(count: number) {
  localStorage.studiedToday = count;
}

export function getLastPlayed(): number {
  return parseInt(localStorage.lastPlayed || "0");
}

export function setLastPlayed(day: number) {
  localStorage.lastPlayed = day;
}

// @ts-ignore: for testing
window.reset = () => {
  db.delete();
  localStorage.clear();
  window.location.reload();
};
