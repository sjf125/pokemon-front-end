import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),
  store: Ember.inject.service(),
  auth: Ember.inject.service(),
  poketeam: storageFor('poketeam'),

  actions: {
    addPokemon () {
      let store = this.get('store');
      let thisPoke = this.get('pokemon.pokedex_id');
      store.queryRecord('poketeam', {})
        .then(function(data) {
          if (!data) {
            this.get('flashMessages')
              .success('You added your first Pokemon to your team!');
            return store.createRecord('poketeam', { slot1: thisPoke }).save();
          }
          let team = [];
          for (var i = 1; i <= 6; i++) {
            let slot = data.get(`slot${i}`);
            if (slot) {
              team.push(parseInt(slot));
            }
          }
          console.log('old team: ' + team);
          let newTeam = team;
          if (team.length < 6) {
            newTeam.push(thisPoke);
            data.set('slot1', newTeam[0]);
            data.set('slot2', newTeam[1]);
            data.set('slot3', newTeam[2]);
            data.set('slot4', newTeam[3]);
            data.set('slot5', newTeam[4]);
            data.set('slot6', newTeam[5]);
            data.save();
            console.log('new team: ' + newTeam);
          }
          else {
            console.log('Your team is full!  Remove a pokemon first');
            this.get('flashMessages')
              .warning('Your team is full!  Remove a pokemon first');
          }
      // }).then(function(team) {

      }).catch(function() {
        console.log('catch');
      });
    }
  },
});
