import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  poketeam: storageFor('poketeam'),

  actions: {
    addPokemon (pokemon) {
      let log = this.get('pokemon');
      console.log(log);

      // let poketeam = this.get('poketeam').get('id', result.user.id);
      // this.sendAction('addPokemon', pokemon);
    }
  },
});
