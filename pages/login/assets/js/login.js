import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { auth, db } from "./firebase.js";
import {
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

let user = "";

let signUpBtn = document.querySelector("#sign-up-btn");
signUpBtn.addEventListener("click", cadastraUsuario);

async function cadastraUsuario() {
  try {
    const signUpNome = document.querySelector("#sign-up-nome").value;
    const signUpEmail = document.querySelector("#sign-up-email").value;
    const signUpPassword = document.querySelector("#sign-up-password").value;
    const signUpCurso = document.querySelector("#sign-up-curso").value;

    // Input validation goes here

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      signUpEmail,
      signUpPassword
    );
    const user = userCredential.user;

    const usuario = {
      nome: signUpNome,
      email: signUpEmail,
      uid: user.uid,
      curso: signUpCurso,
    };

    await setDoc(doc(db, "aluno", user.uid), usuario);

    alert("Usuário cadastrado com sucesso!");

    window.location.href = "../home/index.html";
  } catch (error) {
    console.log(error.message);
    alert(error.message);
  }
}

let signInBtn = document.querySelector("#sign-in-btn");
signInBtn.addEventListener("click", loginUsuario);

function loginUsuario() {
  let signInEmail = document.querySelector("#sign-in-email").value;
  let signInPassword = document.querySelector("#sign-in-password").value;

  signInWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then((userCredential) => {
      user = userCredential.user;
      window.location.href = "../../../../pages/menu/index.html";
    })
    .catch((error) => {
      console.log(error.message);
    });
}

async function verificaUsuario() {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            resolve(user);
        });
    });
}

