const app = Vue.createApp({
  data() {
    return {
      userscopia: [],
      users: [],
      userInput: '',
      passwordInput: ''
    }
  },
  methods: {
    async getUsers() {
      const rest = await fetch('https://randomuser.me/api/?results=5');
      const data = await rest.json();
      console.log(data);
      this.users = data.results;
      // this.users = data.results
      // console.log(this.users);
    },
    signIn(e) {
      e.preventDefault();
      //console.log(this.users);
      this.users.forEach(element => {
        console.log(element);
        console.log(element.login.username);
        console.log(this.userInput);
        if (element.login.username == this.userInput && element.login.password == this.passwordInput) {
          window.location.href = '../tabla.html'
        }
      });

    }
  },
  async mounted() {

  },
  created() {
    this.getUsers()
  },
});
app.mount('#myApp');