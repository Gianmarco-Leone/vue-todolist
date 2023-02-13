// ? TRACCIA:
// Rifare l'esercizio della to do list.

// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// **MILESTONE 1**
// Stampare all'interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// **MILESTONE 2**
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

// **MILESTONE 3**
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

// **Bonus:**
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista

// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

// ? SVOLGIMENTO:

const app = Vue.createApp({
  data() {
    return {
      tasks: [
        {
          text: "Portare fuori il cane",
          done: true,
        },
        {
          text: "Ritirare i panni",
          done: true,
        },
        {
          text: "Andare in palestra",
          done: false,
        },
      ],
      newTask: {
        text: "",
        done: false,
      },
    };
  },
  methods: {
    // MILESTONE 3 - Recupero valore scritto nell'input, lo inserisco in un oggetto non "proxy" e lo aggiungo alla lista dei tasks, infine svuoto l'input tag
    addTask() {
      const newInsertTask = { text: this.newTask.text };
      this.tasks.push(newInsertTask);
      this.newTask.text = "";
    },
    // MILESTONE 2 - Creo una funzione per rimuovere elemento dalla lista
    removeTask(i) {
      this.tasks.splice(i, 1);
    },
    // BONUS 2 - Cliccando sul testo dell'item inverto la condizione "done"
    taskToDo(i) {
      if (this.tasks[i].done == true) {
        this.tasks[i].done = false;
      } else {
        this.tasks[i].done = true;
      }
    },
  },
});

app.mount("#app");
