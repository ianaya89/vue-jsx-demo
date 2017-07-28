new Vue({
  el: '#app',

  data: {
    isLove: true,
    selectedColor: 'steelblue',
    colors: ['tomato', 'lightgreen', 'steelblue']
  },

  computed: {
    msg () {
      const emoji = this.isLove ? '❤️' : '💔'
      return `Vue ${emoji} JSX`
    }
  },

  methods: {
    toggleLove () {
      this.isLove = !this.isLove
    },

    setColor (e) {
      this.selectedColor = e.target.value
    }
  },

  render (h) {
    return (
      <div style='text-align: center'>
        <h1 style={{ color: this.selectedColor}}>
          {this.msg}
        </h1>

        <fieldset class='form-group'>
          <button class={['btn', (this.isLove ? 'btn-error' : 'btn-success')]} on-click={this.toggleLove}>
            {this.isLove ? 'Break up 😩' : 'Reconciliation 😊' }
          </button>
        </fieldset>

        <fieldset class='form-group'>
          <select class='form-control' placeholder='Select color...' value={this.selectedColor} on-change={this.setColor}>
            {this.colors.map(c => <option value={c}>{c}</option>)}
          </select>
        </fieldset>
      </div>
    )
  }
});