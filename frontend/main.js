const { createApp } = Vue;

createApp({
  data() {
    return {
      profile: {
        name: "",
        title: "",
        skills: [],
        link: ""
      },
      newSkill: ""
    };
  },
  mounted() {
    const socket = io("http://localhost:5000");
    this._socket = socket;

    socket.on("init_data", (data) => {
      this.profile = data;
    });

    socket.on("update_skills", (data) => {
      this.profile.skills = data.skills;
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
