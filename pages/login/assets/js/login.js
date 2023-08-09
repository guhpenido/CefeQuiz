import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { auth, db } from "./firebase.js";
import { doc, setDoc, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

let user = "";

let signUpBtn = document.querySelector('#sign-up-btn');
signUpBtn.addEventListener('click', cadastraUsuario);


function cadastraUsuario() {

    let signUpTipo = document.querySelector('input[name="tipo2"]:checked').value
    let signUpNome = document.querySelector('#sign-up-nome').value;
    let signUpEmail = document.querySelector('#sign-up-email').value;
    let signUpPassword = document.querySelector('#sign-up-password').value;
    let signUpCurso = document.querySelector('#sign-up-curso').value;
    let signUpCod = document.querySelector('#sign-up-cod').value;
    console.log(signUpCurso);

    if(signUpTipo == "professor"){
        if (signUpCod == "123") {
            createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
            .then((userCredential) => {
                // Signed in 
                user = userCredential.user;
                // ...

                const usuario = {
                    nome: signUpNome,
                    email: signUpEmail,
                    uid: user.uid,
                    tipo: "professor"
                }
            
                setDoc(doc(db, "professor", user.uid), usuario);

                // Cadastrar Código aleatório e exibi-lo

                window.location.href = "../home/index.html";

            })
            .catch((error) => {
                console.log(error.message)
            });
        } else {
            errorHandler("cod-invalid")
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
                tipo: "aluno"
            }
        
            setDoc(doc(db, "aluno", user.uid), usuario);
    
            window.location.href = "../home/index.html";
    
        })
        .catch((error) => {
            console.log(error.message)
        });
    }

    

}

let signInBtn = document.querySelector('#sign-in-btn');
signInBtn.addEventListener('click', loginUsuario);

async function loginUsuario() {

    let codEl = document.querySelector('#sign-in-cod').value;
    let signInTipo = document.querySelector('input[name="tipo"]:checked').value;
    let signInEmail = document.querySelector('#sign-in-email').value;
    let signInPassword = document.querySelector('#sign-in-password').value;

    if (signInTipo == "professor") {

        let profQuery = query(collection(db, "professor"), where("cod", "==", codEl), where("email", "==", signInEmail));
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
                window.location.href = "../../services/verificaCertificado.html";
            })
            .catch((error) => {
                errorHandler(error, true);    
            });
        } else {
            errorHandler("cod-invalid", false); 
        }

        
    } else {
        signInWithEmailAndPassword(auth, signInEmail, signInPassword)
        .then((userCredential) => {
            user = userCredential.user;
            window.location.href = "../home/index.html";
        })
        .catch((error) => {
            errorHandler(error, true)
        });
    }


}

function verificaUsuario() {
    onAuthStateChanged(auth, (user) => {
        return user
    });
}

function errorHandler(erro, cod) {

    let erroLoginEl = document.querySelector('#span-error')

    // True indica que o erro é do Firebase
    if(cod){
        erro = erro.code;
    }

    console.log(erro)

    switch (erro) {
        case "auth/invalid-email":
            erroLoginEl.textContent = "Email Inválido."
            break;
        case "auth/invalid-password":
        case "auth/wrong-password":
            erroLoginEl.textContent = "Senha Inválida."
            break;

        case "auth/user-not-found":
            erroLoginEl.textContent = "Usuário não encontrado. Email ou Senha Incorretas"
            break;
        case "cod-invalid":
            erroLoginEl.textContent = "Código Inválido"
            break;
        default:
            erroLoginEl.textContent = "Ocorreu um erro. Tente novamente."
            break;
    }
}


