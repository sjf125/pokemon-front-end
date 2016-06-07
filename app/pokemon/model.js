import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from 'ember';
// import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  capname: Ember.computed('name', function() {
    return this.get('name').capitalize();
  }),
  type1: attr('string'),
  type2: attr('string'),
  typeone: Ember.computed('type1', function() {
    return this.get('type1').toUpperCase();
  }),
  typetwo: Ember.computed('type2', function() {
    return this.get('type2').toUpperCase();
  }),
  hp: attr('number'),
  attack: attr('number'),
  defense: attr('number'),
  spatk: attr('number'),
  spdef: attr('number'),
  speed: attr('number'),
  image: attr('string'),
  stats: Ember.computed('hp', 'attack', 'defense', 'spatk', 'spdef', 'speed', function() {
    return [
            {label: "HP", value: this.get('hp')},
            {label: "Attack", value: this.get('attack')},
            {label: "Defense", value: this.get('defense')},
            {label: "Sp Atk", value: this.get('spatk')},
            {label: "Sp Def", value: this.get('spdef')},
            {label: "Speed", value: this.get('speed')}
          ];
  }),
});
