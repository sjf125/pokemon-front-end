import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  hidden: attr('boolean'),
  type1: attr('string'),
  type2: attr('string'),
  hp: attr('number'),
  attack: attr('number'),
  defense: attr('number'),
  spatk: attr('number'),
  spdef: attr('number'),
  speed: attr('number'),
  image: attr('string')
});
