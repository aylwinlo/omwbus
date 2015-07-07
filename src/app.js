/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 *
 */

var UI = require('ui');
var ajax = require('ajax');
var Vector2 = require('vector2');

// Show splash while waiting for data
var splashWindow = new UI.Window();

// Text elt to inform user
var text = new UI.Text({
  position: new Vector2(0, 0),
  size: new Vector2(144,168),
  text: 'Downloading weather data...',
  font: 'GOTHIC_28_BOLD',
  color: 'black',
  textOverflow: 'wrap',
  textAlign: 'center',
  backgroundColor: 'white'
});

// Add to splashWindow and show
splashWindow.add(text);
splashWindow.show();