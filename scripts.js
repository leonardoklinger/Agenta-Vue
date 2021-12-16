const TarefasForm = {
    data() {
        return {
            tarefas: [],
            novaTarefa: {
                done: false
            }
        }
    },
    methods: {
        addTarefa: function(){
            if(this.novaTarefa.texto){
                this.tarefas.push(this.novaTarefa)
                this.novaTarefa = {
                    done: false
                }
                localStorage.setItem("tarefas", JSON.stringify(this.tarefas))
            } else {
                alert("Preenche o campo para adicionar uma nova tarefa")
            }
        },
        storeTarefas(){
            localStorage.setItem("tarefas", JSON.stringify(this.tarefas))
        }
    },
    created() {
        this.tarefas = localStorage.getItem("tarefas") ? JSON.parse(localStorage.getItem("tarefas")) : this.tarefas
    },
}

Vue.createApp(TarefasForm).mount('#app');