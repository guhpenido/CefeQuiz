import { db } from "../pages/login/assets/js/firebase.js";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

function generateUniqueID() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const idLength = 8;
  let id = "";

  for (let i = 0; i < idLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters.charAt(randomIndex);
  }

  return id;
}
async function getUserName(uid) {
  const docRef = doc(db, "aluno", uid);

  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      return userData.nome; // Assuming 'nome' is the field containing the user's name
    } else {
      return null; // User document doesn't exist
    }
  } catch (error) {
    console.error("Error getting user data:", error);
    return null;
  }
}

async function addCertificado(userId, fase) {
  const certificadosRef = collection(db, "certificado");

  try {
    let uniqueId;
    let isUniqueId = false;

    while (!isUniqueId) {
      uniqueId = generateUniqueID();

      // Check if the generated ID is already in use
      const q = query(certificadosRef, where("id", "==", uniqueId));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        isUniqueId = true;
      }
    }

    // Add the new certificado document
    await addDoc(certificadosRef, {
      id: uniqueId,
      alunoId: userId,
      fase: fase,
      // Add more fields as needed
    });

    let nomeI = document.getElementById("nomeAluno");
    let faseI = document.getElementById("fase");
    let codigoI = document.getElementById("codigo");

    nomeI.innerHTML = getUserName(uid);
    faseI.innerHTML = fase;
    codigoI.innerHTML = uniqueId;
    console.log("Certificado added successfully.");
  } catch (error) {
    console.error("Error adding certificado:", error);
  }
}

// Example usage:
const userId = localStorage.getItem("uid");
const fase = localStorage.getItem("fase");

addCertificado(userId, fase);
localStorage.setItem("uid", null);
localStorage.setItem("fase", null);