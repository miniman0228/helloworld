const { createApp } = Vue;

createApp({
  data() {
    return {
      name: "",
      title: "",
      description: "",
      skills: [],
      link: "",
      newSkill: ""
    };
  },
  mounted() {
    const socket = io("http://localhost:5000");
    this._socket = socket;

    socket.on("user_data", (data) => {
      this.name = data.name;
      this.title = data.title;
      this.description = data.description;
      this.skills = data.skills;
      this.link = data.link;
    });

    socket.on("update_skills", (data) => {
      this.skills = data.skills;
    });
  },
  methods: {
    addSkill() {
      if (!this.newSkill.trim()) return;
      this._socket.emit("add_skill", { skill: this.newSkill });
      this.newSkill = "";
    }
  }
}).mount("#app");
