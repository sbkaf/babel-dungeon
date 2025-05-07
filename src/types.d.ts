declare type Payload = { uid: string } & (
  | {
      cmd: "init";
      sessionHook: (session: Session | null) => void;
      playerHook: (player: Player) => void;
      modalHook: (modal: ModalPayload | null) => void;
    }
  | {
      cmd: "mon-up";
      monster: Monster;
      xp: number;
    }
  | {
      cmd: "new";
      energy: number;
      time: number;
      mode: boolean;
    }
);

declare interface Monster {
  id: number;
  streak: number;
  due: number; // Timestamp
  seen: number; // Timestamp
}

declare interface Card {
  id: number;
  sentence: string;
  meanings: string[];
}

declare interface Session {
  xp: number;
  correct: Monster[];
  failed: Monster[];
  pending: Monster[];
}

declare interface Player {
  lvl: number;
  xp: number;
  totalXp: number;
  energy: number;
  maxEnergy: number;
  streak: number;
  studiedToday: number; // number of sentences studied today
  toReview: number;
  seen: number; // number of sentences seen
  mastered: number; // number of sentences mastered
  total: number; // total number of sentences
}

declare type ModalPayload =
  | {
      type: "levelUp";
      newLevel: number;
      newEnergy: number;
    }
  | {
      type: "intro";
    }
  | {
      type: "credits";
    }
  | {
      type: "settings";
    };
