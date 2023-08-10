import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { auth, db } from "./firebase.js";
import {
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

let user = "";

let signUpBtn = document.querySelector("#sign-up-btn");
signUpBtn.addEventListener("click", cadastraUsuario);

function cadastraUsuario() {
  let signUpTipo = document.querySelector('input[name="tipo2"]:checked').value;
  let signUpNome = document.querySelector("#sign-up-nome").value;
  let signUpEmail = document.querySelector("#sign-up-email").value;
  let signUpPassword = document.querySelector("#sign-up-password").value;
  let signUpCurso = document.querySelector("#sign-up-curso").value;
  let signUpCod = document.querySelector("#sign-up-cod").value;

  if (signUpTipo == "professor") {
    if (signUpCod == "3562") {
      createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
        .then((userCredential) => {
          // Signed in
          user = userCredential.user;
          // ...

          const professor = {
            nome: signUpNome,
            email: signUpEmail,
            uid: user.uid,
            tipo: "professor",
            cod: "3562"
          };

          setDoc(doc(db, "professor", user.uid), professor);

          window.location.href = "./verificaCertificado.html";

        })
        .catch((error) => {
            errorHandlerCad(error, true);
        });
    } else {
      errorHandlerCad("cod-invalid", false);
    }
  } else {
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
      .then((userCredential) => {
        // Signed in
        user = userCredential.user;
        // ...

        const usuario = {
          nome: signUpNome,
          email: signUpEmail,
          uid: user.uid,
          curso: signUpCurso,
          tipo: "aluno",
        };

        setDoc(doc(db, "aluno", user.uid), usuario);

        window.location.href = "./index.html";
      })
      .catch((error) => {
        errorHandlerCad(error, true);
      });
  }
}

let signInBtn = document.querySelector("#sign-in-btn");
signInBtn.addEventListener("click", loginUsuario);

async function loginUsuario() {
  let codEl = document.querySelector("#sign-in-cod").value;
  let signInTipo = document.querySelector('input[name="tipo"]:checked').value;
  let signInEmail = document.querySelector("#sign-in-email").value;
  let signInPassword = document.querySelector("#sign-in-password").value;

  if (signInTipo == "professor") {
    let profQuery = query(
      collection(db, "professor"),
      where("cod", "==", codEl),
      where("email", "==", signInEmail)
    );
    const querySnapshot = await getDocs(profQuery);

    let profDoc;

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      profDoc = doc.data();
    });

    if (profDoc) {
      signInWithEmailAndPassword(auth, signInEmail, signInPassword)
        .then((userCredential) => {
          user = userCredential.user;
          window.location.href = "./verificaCertificado.html";
        })
        .catch((error) => {
          errorHandlerLog(error, true);
        });
    } else {
      errorHandlerLog("cod-invalid", false);
    }
  } else {
    signInWithEmailAndPassword(auth, signInEmail, signInPassword)
      .then((userCredential) => {
        user = userCredential.user;
        window.location.href = "./menu.html";
      })
      .catch((error) => {
        errorHandlerLog(error, true);
      });
  }
}

function verificaUsuario() {
  onAuthStateChanged(auth, (user) => {
    return user;
  });
}

function errorHandlerLog(erro, cod) {
  let erroLoginEl = document.querySelector("#span-error");

  // True indica que o erro é do Firebase
  if (cod) {
    erro = erro.code;
  }

  switch (erro) {
    case "auth/invalid-email":
      erroLoginEl.textContent = "Email Inválido.";
      break;
    case "auth/invalid-password":
    case "auth/wrong-password":
      erroLoginEl.textContent = "Senha Inválida.";
      break;
    case "auth/user-not-found":
      erroLoginEl.textContent = "Usuário não encontrado. Email ou Senha Incorretas";
      break;
    case "cod-invalid":
      erroLoginEl.textContent = "Código Inválido";
      break;
    case "email-already-in-use":
      erroLoginEl.textContent = "E-mail já utilizado.";
      break;
    default:
      erroLoginEl.textContent = "Ocorreu um erro. Tente novamente.";
      break;
  }
}

function errorHandlerCad(erro, cod) {
  let erroCadEl = document.querySelector("#span-error-cad");

  // True indica que o erro é do Firebase
  if (cod) {
    erro = erro.code;
  }

  switch (erro) {
    case "auth/invalid-email":
      erroCadEl.textContent = "Email Inválido.";
      break;
    case "auth/invalid-password":
    case "auth/wrong-password":
      erroCadEl.textContent = "Senha Inválida.";
      break;
    case "auth/user-not-found":
      erroCadEl.textContent = "Usuário não encontrado. Email ou Senha Incorretas";
      break;
    case "cod-invalid":
      erroCadEl.textContent = "Código Inválido";
      break;
    case "email-already-in-use":
      erroCadEl.textContent = "E-mail já utilizado.";
      break;
    default:
      erroCadEl.textContent = "Ocorreu um erro. Tente novamente.";
      break;
  }
}

let recSenha = document.querySelector('#senha-recover');
recSenha.addEventListener('click', recuperarSenha);

function recuperarSenha() {

  let signInEmail = document.querySelector("#sign-in-email").value;

  if(signInEmail == ""){
    let spanError = document.querySelector('#span-error')
    spanError.textContent = "Preencha o seu email."
  } else {
    sendPasswordResetEmail(auth, signInEmail)
    .then(() => {
      let spanSuccess = document.querySelector('#span-success');
      spanSuccess.textContent = "Email de recuperação enviado!";
    })
    .catch((error) => {
      errorHandlerLog(error, true)
    });
  }
 
  

}