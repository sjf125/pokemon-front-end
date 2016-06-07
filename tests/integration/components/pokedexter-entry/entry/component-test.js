import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pokedexter-entry/entry', 'Integration | Component | pokedexter entry/entry', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pokedexter-entry/entry}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pokedexter-entry/entry}}
      template block text
    {{/pokedexter-entry/entry}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
