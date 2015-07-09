/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 *
 */

var xml2js = require('xml2js');
var UI = require('ui');
var ajax = require('ajax');
var Vector2 = require('vector2');

//construct URL
var commandName = 'predictions';
var agencyTag = 'ttc';
var stopId = '4405';
var additionalParams = '';
var URL = 'http://webservices.nextbus.com/service/publicXMLFeed?command=' + commandName + '&a=' + agencyTag + '&stopId=' + stopId + '&' + additionalParams;

//misc
var statusText = 'Downloading data...';

//make the request
ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    //success:
    statusText = 'successfully fetched data';
  },
  function(error) {
    //failure
    statusText = 'failed fetching data:' + error;
  }
);

// Show splash while waiting for data
var splashWindow = new UI.Window();

// Text elt to inform user
var text = new UI.Text({
  position: new Vector2(0, 0),
  size: new Vector2(144,168),
  text: statusText,
  font: 'GOTHIC_28_BOLD',
  textOverflow: 'wrap',
  textAlign: 'center',
//  color: 'vivid_cerulean',
//  color: 'vividcerulean',
//  color: 'VividCerulean',
//  color: '#00AAFF',
//  color: 'GColorVividCerulean',
//  color: 'inchworm', // works
  color: 'white',
//   backgroundColor: 'blue_moon'
//   backgroundColor: 'bluemoon'
//   backgroundColor: 'BlueMoon'
//   backgroundColor: '#0055FF'
//   backgroundColor: 'GColorBlueMoon'
//   backgroundColor: 'liberty' // works
  backgroundColor: 'red'
});

// Add to splashWindow and show
splashWindow.add(text);
splashWindow.show();