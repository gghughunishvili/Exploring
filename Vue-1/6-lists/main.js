Vue.component('tasks', {
    template: '#tasks-template',
    props: ['list'],
    computed: {
        remaining: function () {
            var vm = this;

            return this.list.filter(this.inProgress).length;
            /*return this.list.filter(function(task){
                return !vm.isCompleted(task);
            }).length;*/
        }
    },
    methods: {
        isCompleted: function (task) {
            return task.completed;
        },
        inProgress: function (task) {
            return !this.isCompleted(task);
        },
        deleteTask: function (task) {
            this.list.$remove(task);
        },
        clearCompleted: function () {
            this.list = this.list.filter(this.inProgress);
        }
    }
});

new Vue({
    el: '#app',
    data: {
        tasks: [
            {body: 'Do something 1', completed: false},
            {body: 'Do something 2', completed: false},
            {body: 'Do something 3', completed: true},
            {body: 'Do something 4', completed: false}
        ]
    }
});