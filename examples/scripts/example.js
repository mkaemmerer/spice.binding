(function($spice, Bacon){
  'use strict';

  var model = new Bacon.Model({
    email:                'bovik@cs.cmu.edu',
    password:             'password',
    size:                 'M',
    color:                'g',
    terms_and_conditions: false,
    comment:              'A few words'
  });

  $spice.select('body')
    .div({'class': 'ui two column page grid'})
      .div({'class': 'column'})
        //COMPLETE FORM
        .div({'class': 'ui inverted form segment'})
          .h1({'class': 'ui header'}).text('Example Form').close()
          .call(textFields)
          .call(textArea)
          .call(selection)
          .call(checkbox)
          .button({'class': 'ui blue submit button'}).text('Submit').close()
        .close()
      .close()
      .div({'class': 'column'})
        //TEXT FIELDS
        .div({'class': 'ui form segment attached top'})
          .h1({'class': 'ui header'}).text('Text fields').close()
          .call(textFields)
        .close()
        .div({'class': 'ui tiny attached bottom header'})
          .text(
            model
              .lens('password')
              .map(function(c){
                return c.length < 8 ? 'Password too short. Must be at least 8 characters' : 'Password okay';
              })
          )
        .close()

        //TEXT AREA
        .div({'class': 'ui form segment attached top'})
          .h1({'class': 'ui header'}).text('Text Area').close()
          .call(textArea)          
        .close()
        .div({'class': 'ui tiny attached bottom header'})
          .text('Word count: ').text(model.lens('comment').map(function(c){ return c.trim().split(' ').length; }))
        .close()

        //SELECTION
        .div({'class': 'ui form segment'})
          .h1({'class': 'ui header'}).text('Selection').close()
          .call(selection)
        .close()

        //CHECKBOX
        .div({'class': 'ui form segment'})
        .h1({'class': 'ui header'}).text('Checkbox').close()
          .call(checkbox)
        .close()

      .close()
    .close()
  .close();

  function textFields(){
    this
      .div({'class': 'two fields'})
        .div({'class': 'field'})
          .label().text('Email').close()
          .textField().bind(model.lens('email')).close()
        .close()
        .div({'class': 'field'})
          .label().text('Password').close()
          .passwordField().bind(model.lens('password')).close()
        .close()
      .close();
  }
  function textArea(){
    this
      .div({'class': 'field'})
        .label().text('Comments').close()
        .textarea().bind(model.lens('comment'))
          .text('foobar')
        .close()
      .close();
  }
  function selection(){
    this
      .div({'class': 'field'})
        .label().text('Size').close()
        .select().bind(model.lens('size'))
          .option({value: 'XS'}).text('Extra Small').close()
          .option({value: 'S'}).text('Small').close()
          .option({value: 'M'}).text('Medium').close()
          .option({value: 'L'}).text('Large').close()
          .option({value: 'XL'}).text('Extra Large').close()
        .close()
      .close()
      
      .div({'class': 'field'})
        .label().text('Color').close()
      .close()
      .radioGroup({'class': 'grouped inline fields'}).bind(model.lens('color'))
        .div({'class': 'field'})
          .label()
            .radioButton({value: 'r'}).close()
            .text(' Red')
          .close()
        .close()
        .div({'class': 'field'})
          .label()
            .radioButton({value: 'y'}).close()
            .text(' Yellow')
          .close()
        .close()
        .div({'class': 'field'})
          .label()
            .radioButton({value: 'g'}).close()
            .text(' Green')
          .close()
        .close()
        .div({'class': 'field'})
          .label()
            .radioButton({value: 'b'}).close()
            .text(' Blue')
          .close()
        .close()
      .close()
  }
  function checkbox(){
    this
      .div({'class': 'field'})
        .label()
          .checkbox().bind(model.lens('terms_and_conditions')).close()
          .text(' I agree to the Terms and Conditions')
        .close()
      .close();
  }
})(window.$spice, window.Bacon);