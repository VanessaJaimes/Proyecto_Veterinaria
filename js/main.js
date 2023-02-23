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
      const rest = await fetch('https://randomuser.me/api/?results=10');
      const data = await rest.json();
      console.log(data);
      this.users = data.results;
      this.users[0].rol = "Admin";
      console.log(this.user);
      // this.users = this.users[0].rol="Admin";
      // this.users = data.results
      console.log(this.users);
    },
    signIn(e) {
      e.preventDefault();
      //console.log(this.users);
      this.users.forEach(element => {
        console.log(element);
        console.log(element.login.username);
        console.log(this.userInput);
        if (element.login.username == this.userInput && element.login.password == this.passwordInput) {
          if (element.rol) {
            window.location.href = '../admin.html'
            return;
          }
          window.location.href = '../cards.html'
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