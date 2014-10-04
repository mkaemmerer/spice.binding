(function($spice, $, Bacon){
  'use strict';

  var radio_group_id = 0;

  $spice
    .defineTag('textarea', function(attrs){
      return this.open($('<textarea></textarea>')[0])
        .attrs(attrs || {})
        .defineModifier('bind', function(el, model){
          model = this.eval(model, true);
          Bacon.$.textFieldValue($(el)).bind(model);
        });
    })
    .defineTag('textField', function(attrs){
      return this.open($('<input type="text"></input>')[0])
        .attrs(attrs || {})
        .defineModifier('bind', function(el, model){
          model = this.eval(model, true);
          Bacon.$.textFieldValue($(el)).bind(model);
        });
    })
    .defineTag('passwordField', function(attrs){
      return this.open($('<input type="password"></input>')[0])
        .attrs(attrs || {})
        .defineModifier('bind', function(el, model){
          model = this.eval(model, true);
          Bacon.$.textFieldValue($(el)).bind(model);
        });
    })
    .defineTag('checkbox', function(attrs){
      return this.open($('<input type="checkbox"></input>')[0])
        .attrs(attrs || {})
        .defineModifier('bind', function(el, model){
          model = this.eval(model, true);
          Bacon.$.checkBoxValue($(el)).bind(model);
        });
    })
    .defineTag('radioButton', function(attrs){
      return this.open($('<input type="radio"></input>')[0])
        .attrs(attrs || {})
        .defineModifier('bind', function(el, model){
          model = this.eval(model, true);
          Bacon.$.checkBoxValue($(el)).bind(model);
        });
    })
    .defineTag('radioGroup', function(attrs){
      var group_id = attrs.name || radio_group_id++;
      delete attrs.name;

      return this.div(attrs)
        .defineTag('radioButton', function(attrs){
          delete attrs.name;

          return this.open($('<input type="radio"></input>'))
            .attrs(attrs || {})
            .attr('name', group_id);
        })
        .defineModifier('bind', function(el, model){
          model = this.eval(model, true);
          window.setTimeout(function(){
            var radio_buttons = $(el).find('[name="' + group_id + '"]');
            Bacon.$.radioGroupValue(radio_buttons).bind(model);
          }, 0);
        });
    })
    .defineTag('input', function(attrs){
      return this.open($('<input></input>')[0])
        .attrs(attrs || {})
        .defineModifier('bind', function(el, model){
          model = this.eval(model, true);
          Bacon.$.textFieldValue($(el)).bind(model);
        });
    })
    .defineTag('select', function(attrs){
      return this.open($('<select></select>')[0])
        .attrs(attrs || {})
        .defineModifier('bind', function(el, model){
          model = this.eval(model, true);
          this.value(model);
          window.setTimeout(function(){
            Bacon.$.selectValue($(el)).bind(model);
          }, 0);
        });
    });
    
})(window.$spice, window.$, window.Bacon);