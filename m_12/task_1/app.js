new Vue({
    el: '#app',
    data: {
        tasks: [
            { id: 1, title: 'Task 1', completed: false },
            { id: 2, title: 'Task 2', completed: true },
            // Add more tasks as needed
        ],
        newTask: {
            title: '',
            completed: false,
        },
        showCompleted: 'all',
    },
    methods: {
        addTask() {
            if (this.newTask.title.trim() !== '') {
                this.tasks.push({
                    id: this.tasks.length + 1,
                    title: this.newTask.title,
                    completed: this.newTask.completed,
                });
                this.newTask.title = '';
                this.newTask.completed = false;
            }
        },
        toggleCompletion(taskId) {
            const task = this.tasks.find(t => t.id === taskId);
            if (task) {
                task.completed = !task.completed;
            }
        },
    },
    computed: {
        filteredTasks() {
            if (this.showCompleted === 'incomplete') {
                return this.tasks.filter(task => !task.completed);
            } else if (this.showCompleted === 'completed') {
                return this.tasks.filter(task => task.completed);
            } else {
                return this.tasks;
            }
        },
        incompleteTaskCount() {
            return this.tasks.filter(task => !task.completed).length;
        },
        completedTaskCount() {
            return this.tasks.filter(task => task.completed).length;
        },
    },
    watch: {
        tasks: {
            handler() {
                console.log('Task list modified!');
            },
            deep: true,
        },
    },
});
