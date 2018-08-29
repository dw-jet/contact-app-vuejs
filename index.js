let contactHolder = new Vue({
  el: "#app",
  data: {
    contact: {
      first: "",
      last: "",
      company: "",
      cell: "",
      office: "",
      email: ""
    },
    contacts: []
  },
  methods: {
    clearContact: function(){
      return {
      first: "",
      last: "",
      company: "",
      cell: "",
      office: "",
      email: ""
    }},
    addContact: function(){
      this.contacts.push(this.contact);
      this.contact = this.clearContact();
      let store = window.localStorage;
      store.setItem('contacts', JSON.stringify(this.contacts));
    },
    loadLocalStorage: function() {
      let store = window.localStorage;
      if (store.getItem('contacts').length > 0) {
        this.contacts = JSON.parse(store.getItem('contacts'));
      }
    }
  },
  filters: {
    phoneMask: function(value, empty) {
      if (!value) { return empty; }
      value = value.toString();
      return "(" + value.slice(0, 3) + ") " + value.slice(3, 6) + "-" + value.slice(6);
    }
  },
  beforeMount() {
    this.loadLocalStorage();
  }
});