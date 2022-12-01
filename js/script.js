const { createApp } = Vue;

const app = createApp({
    data() {

        return {
            todoList: [],
            newTodoText: '',
            apiUrl: './server.php'
        }
        
    },
    methods: {



        getToDo(){

            axios.get(this.apiUrl).then((res) => {
                // console.log(res.data);
                // const tasks = JSON.parse(res.data);
                this.todoList = res.data;
            });

        },



        addToDo() {

            const data = {
                newTodoText: this.newTodoText,
            }

            axios.post(
                this.apiUrl,
                data,
                {headers: {'Content-Type': 'multipart/form-data'}}
            ).then((response) => {
                
                this.getToDo();
                
            })
        },


        toggleTodo(index) {
            // console.log(index);
            const tofoFormData = {
                toggleTodoIndex: index,
            }

            axios.post (
                this.apiUrl,
                tofoFormData,
                {headers: {'Content-Type': 'multipart/form-data'}}
            ).then((response) => {
                this.getToDo();
            })
        },



        deleteToDo(Index) {
            const tofoFormData = {
                deleteTodoIndex: Index
            }

            axios.post (
                this.apiUrl,
                tofoFormData,
                {headers: {'Content-Type': 'multipart/form-data'}}
            ).then((response) => {
                this.getToDo();
            })

        }




    },

    mounted() {
        this.getToDo();
    }
}).mount('#app')