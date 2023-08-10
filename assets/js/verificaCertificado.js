import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

let btnVer = document.querySelector('#btn-verificar');
btnVer.addEventListener('click', verificaCert);


async function verificaCert() {

    let inputCertEl = document.querySelector('#input-cert').value;
    let spanError = document.querySelector('#span-error')
    let spanNome = document.querySelector('#user-cert')
    let spanTurma = document.querySelector('#turma-cert')

    if(inputCertEl != ""){
        let certQuery = query(
            collection(db, "certificado"),
            where("id", "==", inputCertEl)
          );
          const querySnapshot = await getDocs(certQuery);
      
          let certDoc;
      
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            certDoc = doc.data();
        });
    
        console.log(certDoc)
    
        if(certDoc){

            let userQuery = query(
                collection(db, "aluno"),
                where("uid", "==", certDoc.alunoId)
              );
              const querySnapshotUser = await getDocs(userQuery);
          
              let userDoc;
          
              querySnapshotUser.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                userDoc = doc.data();
            });

            spanNome.textContent = userDoc.nome;
            spanTurma.textContent = userDoc.curso;

            $('#modalSuccess').modal('show')

        } else {
            $('#modalError').modal('show')
        }
    } else {
        spanError.textContent = "Preencha o Campo."
    }


}

