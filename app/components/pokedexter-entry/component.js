import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addPokemon (pokemon) {
      this.sendAction('addPokemon', pokemon);
    }
  },
});
