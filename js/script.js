const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            taskList: [],
        }
    },
    methods: {
        getTask(){
            axios.get('./server.php').then((res) => {
                console.log(res.data);
                const tasks = JSON.parse(res.data);
                this.taskList = tasks;
            });
        }
    },
    created() {
        this.getTask();
    }
}).mount('#app')