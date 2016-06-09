import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  poketeam: storageFor('poketeam'),

  actions: {
    addPokemon () {
      let store = this.get('store');
      let poke = this.get('pokemon.pokedex_id');
      store.createRecord('poketeam', poke);

      // console.log(this.get('poketeam._initialContent'));
      // this.get('poketeam._initialContent')
      // this.get('poketeam').addObject(log);
      console.log(this.get('poketeam'));
      console.log(this.get('store'));

      // let poketeam = this.get('poketeam').get('id', result.user.id);
      // this.sendAction('addPokemon', pokemon);
    }
  },
});
