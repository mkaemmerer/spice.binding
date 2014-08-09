(function($spice, $, Bacon){
  'use strict';

  var radio_group_id = 0;

  $spice
    .defineTag('textField', function(attrs){
      return this.open($('<input type="text"></input>'))
        .attrs(attrs)
        .defineModifier('bind', function(el, model){
          Bacon.$.textFieldValue(el).bind(model);
        });
    })
    .defineTag('passwordField', function(attrs){
      return this.open($('<input type="password"></input>'))
        .attrs(attrs)
        .defineModifier('bind', function(el, model){
          Bacon.$.textFieldValue(el).bind(model);
        });
    })
    .defineTag('checkbox', function(attrs){
      return this.open($('<input type="checkbox"></input>'))
        .attrs(attrs)
        .defineModifier('bind', function(el, model){
          Bacon.$.checkBoxValue(el).bind(model);
        });
    })
    .defineTag('radioButton', function(attrs){
      return this.open($('<input type="radio"></input>'))
        .attrs(attrs)
        .defineModifier('bind', function(el, model){
          Bacon.$.checkBoxValue(el).bind(model);
        });
    })
    .defineTag('select', function(attrs){
      return this.open($('<select></select>'))
        .attrs(attrs)
        .defineModifier('bind', function(el, model){
          this.value(model);
          window.setTimeout(function(){
            Bacon.$.selectValue(el).bind(model);
          }, 0);
        });
    })
    .defineTag('radioGroup', function(attrs){
      var group_id = radio_group_id++;

      return this.div(attrs)
        .defineTag('radioButton', function(attrs){
          delete attrs.name;

          return this.open($('<input type="radio"></input>'))
            .attrs(attrs)
            .attr('name', group_id);
        })
        .defineModifier('bind', function(el, model){
          window.setTimeout(function(){
            var radio_buttons = $(el).find('[name="' + group_id + '"]');
            Bacon.$.radioGroupValue(radio_buttons).bind(model);
          }, 0);
        });
    });
})(window.$spice, window.$, window.Bacon);