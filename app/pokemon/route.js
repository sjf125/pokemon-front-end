import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('pokemon', params.id);
  },

  actions: {
    addPokemon (data) {
      let pokemon = this.get('store').createRecord('pokemon', data.pokedex_id);
      return pokemon.save();
    }
  }
});
