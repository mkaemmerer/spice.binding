# spice.binding

A data binding library for $spice

## Example Usage

```javascript
	var model = Bacon.Model({first_name: '', last_name: ''});

  $spice.select('form')
  	//Create a text field bound to the first-name property
  	.textField().bind(model.lens('first_name')).close()
  	//Create a text field bound to the last-name property
  	.textField().bind(model.lens('last_name')).close()
  .close();
```

There is also a full example in the examples directory.


## API

spice.binding defines a number of tag helpers for creating common types of inputs.


### stream.textField(*attrs*)
Creates a new input element with type 'text'. Returns a stream for the new element.

### stream.passwordField(*attrs*)
Creates a new input element with type 'password'. Returns a stream for the new element.

### stream.checkbox(*attrs*)
Creates a new input element with type 'checkbox'. Returns a stream for the new element.

### stream.radioButton(*attrs*)
Creates a new input element with type 'radio'. Returns a stream for the new element.

### stream.radioGroup(*attrs*)
Returns a stream for creating a set of linked radio buttons.
If ```attrs``` contains a ```name``` key, all radio buttons created within this group will have their name attribute set to it.
If no ```name``` key is given, one will be automatically generated.


### inputstream.bind(*model*)
Two-way bind the current element to ```model```, and return the current stream.
This method is defined for ```textarea```, ```select```, ```input```, ```textField```, ```passwordField```, ```checkbox```, ```radioButton```, and ```radioButtonGroup```.
