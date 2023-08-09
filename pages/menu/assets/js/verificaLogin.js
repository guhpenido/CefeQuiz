import { auth, db } from "../../../../pages/login/assets/js/firebase.js";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
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

async function checkCertificados() {
  const unsubscribe = auth.onAuthStateChanged(async (user) => {
    if (user) {
      const certificadosRef = collection(db, "certificado");
      const q = query(certificadosRef, where("alunoId", "==", user.uid));
      let botaoFase1 = document.getElementById("jogar-fase1");
      let botaoFase2 = document.getElementById("jogar-fase2");
      let botaoFase3 = document.getElementById("jogar-fase3");
      let mapa1 = document.getElementById("mapa-um");
      let mapa2 = document.getElementById("mapa-dois");
      let mapa3 = document.getElementById("mapa-tres");
      try {
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          const certificadoData = doc.data();
          const fase = certificadoData.fase;

          switch (fase) {
            case 1:
              botaoFase2.addEventListener("click", () => {
                window.location.href = "../../../../pages/quiz/permutacao.html";
              });
              mapa2.style.background =
                'url("../../../../pages/menu/assets/img/fase2.png")';
              mapa1.style.background =
                'url("../../../../pages/menu/assets/mg/fase1ok.png")';
              botaoFase1.innerHTML = "Realizado";
              botaoFase2.innerHTML = "Jogar";
              console.log("Fase 1 action:", certificadoData);
              break;
            case 2:
              botaoFase3.addEventListener("click", () => {
                window.location.href =
                  "../../../../pages/quiz/quizCombinacao.html";
              });
              mapa3.style.background =
                'url("../../../../pages/menu/assets/img/fase3.png")';
              mapa2.style.background =
                'url("../../../../pages/menu/assets/img/fase2ok.png")';
              botaoFase2.innerHTML = "Realizado";
              botaoFase3.innerHTML = "Jogar";
              console.log("Fase 2 action:", certificadoData);
              break;
            case 3:
              mapa3.style.background =
                'url("../../../../pages/menu/assets/img/fase3ok.png")';
              botaoFase3.innerHTML = "Realizado";
              console.log("Fase 3 action:", certificadoData);
              break;
            default:
              console.log("Unknown phase:", certificadoData);
          }
        });
      } catch (error) {
        console.error("Error checking certificados:", error);
      }

      // Unsubscribe from the listener
      unsubscribe();
    } else {
      console.log("No user is currently logged in.");
    }
  });
}

// Call the function when needed
checkCertificados();

async function getUserInfo() {
  // Listen for changes in authentication state
  const unsubscribe = auth.onAuthStateChanged(async (user) => {
    if (user) {
      // User is signed in
      console.log("User is signed in:", user);
      const userName = await getUserName(user.uid);

      if (userName) {
        let loginSpan = document.getElementById("nome");
        console.log("User's Name:", userName);
        loginSpan.innerHTML = userName;
      } else {
        console.log("User document not found.");
      }
    } else {
      alert("Você não está logado!");
      window.location.href = "../../../../pages/login/login.html";
    }

    // Unsubscribe to the listener
    unsubscribe();
  });
}

// Call the function when the page loads
getUserInfo();
