import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),

  model() {
    let store = this.get('store');
    return store.queryRecord('poketeam', {})
    .then(function(data) {
      console.log(data.get('slot1'));
      let poke = data.get('slot1');
      if (poke) {
        return store.findRecord('pokemon', poke)
        .then(function(data) {
          console.log(data.get('name'));
          return data;
        });
      } else {
        return Promise.resolve({});
      }
    });
  }
});
