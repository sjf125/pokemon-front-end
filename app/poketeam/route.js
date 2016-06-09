import Ember from 'ember';

export default Ember.Route.extend({
  store: Ember.inject.service(),

  model() {
    let poketeam = this.get('store').findAll('poketeam');
    // .then(function(data) {console.log(data.get('slot1'));});

    return poketeam;
  }
});
