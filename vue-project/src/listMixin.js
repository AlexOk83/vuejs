export default {
  data () {
    return {
      names: ['Vlad', 'Max', 'Kate', 'Alex'],
      searchName: ''
    }
  },
  computed: {
    filteredNames() {
      return this.names.filter(name => name.toLowerCase().includes(this.searchName.toLowerCase()) )
    }
  },
}
