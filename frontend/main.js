const { createApp } = Vue;

createApp({
  data() {
    return {
      name: "",
      title: "",
      description: "",
      skills: [],
      link: ""
    };
  },
  mounted() {
    const socket = io("http://localhost:5000");

    socket.on("user_data", (data) => {
      this.name = data.name;
      this.title = data.title;
      this.description = data.description;
      this.skills = data.skills;
      this.link = data.link;
    });
  }
}).mount("#app");
