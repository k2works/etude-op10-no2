import './index.css';
require("./index.scss");
import _ from 'lodash'

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.map(['Hello','webpack'], function(item){
    return item + ' ';
  });

  return element;
}

document.body.appendChild(component());

// ES2015 arrow function
[1,2,3].map(n => console.log(n + 1));

// ES2015 Class
import Human from './Human';
var obj = new Human('BABEL');
var name = obj.hello();
document.body.appendChild(render(name));

function render (name) {
  var element = document.createElement('div');
  element.setAttribute('class', 'Contents__name');

  /* lodash is required for the next line to work */
  element.innerHTML = name;

  return element;
}
