import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pokedexter-entry/add-pokemon-btn', 'Integration | Component | pokedexter entry/add pokemon btn', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pokedexter-entry/add-pokemon-btn}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pokedexter-entry/add-pokemon-btn}}
      template block text
    {{/pokedexter-entry/add-pokemon-btn}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
