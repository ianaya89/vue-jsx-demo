'use strict';

new Vue({
  el: '#app',

  data: {
    isLove: true,
    selectedColor: 'steelblue',
    colors: ['tomato', 'lightgreen', 'steelblue']
  },

  computed: {
    msg: function msg() {
      var emoji = this.isLove ? '❤️' : '💔';
      return 'Vue ' + emoji + ' JSX';
    }
  },

  methods: {
    toggleLove: function toggleLove() {
      this.isLove = !this.isLove;
    },
    setColor: function setColor(e) {
      this.selectedColor = e.target.value;
    }
  },

  render: function render(h) {
    return h(
      'div',
      { style: 'text-align: center' },
      [h(
        'h1',
        { style: { color: this.selectedColor } },
        [this.msg]
      ), h(
        'fieldset',
        { 'class': 'form-group' },
        [h(
          'button',
          { 'class': ['btn', this.isLove ? 'btn-error' : 'btn-success'], on: {
              'click': this.toggleLove
            }
          },
          [this.isLove ? 'Break up 😩' : 'Reconciliation 😊']
        )]
      ), h(
        'fieldset',
        { 'class': 'form-group' },
        [h(
          'select',
          { 'class': 'form-control', attrs: { placeholder: 'Select color...' },
            domProps: {
              'value': this.selectedColor
            },
            on: {
              'change': this.setColor
            }
          },
          [this.colors.map(function (c) {
            return h(
              'option',
              {
                domProps: {
                  'value': c
                }
              },
              [c]
            );
          })]
        )]
      )]
    );
  }
});