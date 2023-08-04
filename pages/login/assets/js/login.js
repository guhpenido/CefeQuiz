import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { auth, db } from "./firebase.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

let user = "";

let signUpBtn = document.querySelector('#sign-up-btn');
signUpBtn.addEventListener('click', cadastraUsuario);

function cadastraUsuario() {

    let signUpNome = document.querySelector('#sign-up-nome').value;
    let signUpEmail = document.querySelector('#sign-up-email').value;
    let signUpPassword = document.querySelector('#sign-up-password').value;
    let signUpCurso = document.querySelector('#sign-up-curso').value;
    console.log(signUpCurso);

    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
        // Signed in 
        user = userCredential.user;
        // ...

        const usuario = {
            nome: signUpNome,
            email: signUpEmail,
            uid: user.uid,
            curso: signUpCurso
        }
    
        setDoc(doc(db, "aluno", user.uid), usuario);

        window.location.href = "../home/index.html";

    })
    .catch((error) => {
        console.log(error.message)
    });

}

let signInBtn = document.querySelector('#sign-in-btn');
signInBtn.addEventListener('click', loginUsuario);

function loginUsuario() {

    let signInEmail = document.querySelector('#sign-in-email').value;
    let signInPassword = document.querySelector('#sign-in-password').value;

    signInWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then((userCredential) => {
        user = userCredential.user;
        window.location.href = "../home/index.html";
    })
    .catch((error) => {
        console.log(error.message);
    });

}

function verificaUsuario() {
    onAuthStateChanged(auth, (user) => {
        return user
    });
}


