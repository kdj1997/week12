new Vue({
    el: '#app',
    data: {
        user: {
            name: 'Merey Zhursinadilova',
            email: 'mzhursinadilova@example.com',
            birthdate: '2004-03-17',
            profilePicture: 'https://via.placeholder.com/150/3498db/ffffff',
            isAdmin: true,
        },
    },
    computed: {
        userAge() {
            const birthdate = new Date(this.user.birthdate);
            const today = new Date();
            return Math.floor((today - birthdate) / (365.25 * 24 * 60 * 60 * 1000));
        },
    },
    methods: {
        updateProfile() {
            // Handle profile update logic (e.g., send a request to the server)
            console.log('Profile updated:', this.user);
        },
    },
    watch: {
        user: {
            handler() {
                console.log('User details modified!');
            },
            deep: true,
        },
    },
});
