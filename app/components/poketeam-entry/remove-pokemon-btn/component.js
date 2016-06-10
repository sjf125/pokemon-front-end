import Ember from 'ember';

export default Ember.Component.extend({
  flashMessages: Ember.inject.service(),
  store: Ember.inject.service(),
  auth: Ember.inject.service(),

  actions: {
    removePokemon () {

      this.get('store').queryRecord('poketeam', {})
      .then(function(data) {
        console.log(data.get('slot1'));
        data.set('slot1', null);
        data.save();
      })
      .then(function() {
          this.get('flashMessages')
            .warning('You removed the pokemon from your team!');
      });
    }
  }
});
