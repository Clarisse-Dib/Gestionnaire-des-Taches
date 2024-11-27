function Stuart(form, ol, taskInput) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // récuperer la valeur envoyer
        let newTask = taskInput.value;
        console.log(newTask);

        // créer un élément de liste
        let li = document.createElement("li");
        li.textContent = newTask;

        // créer mon boutton X
        let buttonX = document.createElement("button");
        buttonX.textContent=("X")

        // créer mon boutton modif
        let buttonM = document.createElement("button")
        buttonM.textContent=("Modifier")

        // les mettres les uns dans les autres
        li.appendChild(buttonX);
        li.appendChild(buttonM);
        console.log(li);
        ol.appendChild(li);

        // supprimer mon "li" avec mon "button"
        buttonX.addEventListener("click", function () {
            li.remove();
        })

        // modifier mon text "li"
        buttonM.addEventListener("click", function () {
            // créer mon "form"
            let formI=document.createElement("form");
            let indI=document.createElement("input")
            let butI=document.createElement("button");
            butI.textContent=("Sauvgarder")
            this.remove(buttonM)
            // l'embriquer
        li.appendChild(formI);
        formI.appendChild(indI);
        formI.appendChild(butI);
        // remplacer ancien text par nouveau
        formI.addEventListener("submit", function() {
        let newName=indI.value;
        console.log(newName);
        this.closest("li").textContent=(newName);
        // remettre mes bouttons
        li.appendChild(buttonX);
        li.appendChild(buttonM);
        })
        })
    })
}
// recuperer mes données pour l'appel

// Ménage
let taskM = document.getElementById('taskM');
let formM = document.getElementById('formM');
let Ménage = document.getElementById("ménage");
// Courses
let taskC = document.getElementById('taskC');
let formC = document.getElementById('formC');
let Courses = document.getElementById("Courses");
// Rendez-vous
let taskR = document.getElementById('taskR');
let formR = document.getElementById('formR');
let Rendez = document.getElementById("Rendez");

// Appel de ma fonction
Stuart(formM, Ménage, taskM)
Stuart (formC, Courses, taskC)
Stuart (formR, Rendez, taskR)