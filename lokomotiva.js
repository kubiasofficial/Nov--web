// Tento soubor bude obsahovat logiku pro správu obsazenosti lokomotiv/trasy ve Firestore.
// Prozatím pouze návrh struktury a základní funkce.

import { db } from './firebase.js';
import { doc, getDoc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Zámek lokomotivy/trasy
export async function zamkniLokomotivu({ trasa, zamestnanecId, konecJizdy }) {
  // Prozatím máme jen jednu lokomotivu, takže dokument bude "lokomotiva_1"
  const ref = doc(db, "lokomotivy", "lokomotiva_1");
  await setDoc(ref, {
    obsazeno: true,
    trasa,
    zamestnanecId,
    konecJizdy, // timestamp (např. Date.now() nebo serverTimestamp())
    zmeneno: serverTimestamp()
  });
}

export async function zjistiObsazenost() {
  const ref = doc(db, "lokomotivy", "lokomotiva_1");
  const snap = await getDoc(ref);
  if (!snap.exists()) return { obsazeno: false };
  return snap.data();
}
