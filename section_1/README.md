## Notes

#### What is react 
> Javascript library to display html.

> Components are snippets of code that produces HTML

> Multiple different components and nest them inside each other.

#### Const 
> An ES6 syntax. This is the final value for this variable, it is never going to change!

#### Import 
> React has to be imported in to each javascript file you want to use it in.
> Also need to import ReactDOM 

#### Self closing 
> Can use self closing tags for html like so '< hello world /> '

## More Notes
> Always have one component per file

#### Class 
> Any class made must have a render method

#### Handling Events
> Declare an Event handler, function that runs whenever the event occurs
> Pass the event handler to the element that we want to monitor for events.

> Event handler arguments should be called event
> Event object describes what is happening


## State 
> ONLY CLASS BASED COMPONENTS, functional components do not have state
> State is a javascript object used to record and react to user events. 
> Each class based compoonent we define has its own state object. 
> Whenever a component state is changed the component immediately re renders and forces all of its children to re render as well.

> Whenever we use state we have to initialise it with ' this.state = '


## Constructor 
> Runs automatically in class based components. 
> Initialises variables etc, sounds very similar to initialise method in ruby.

> Only within constructor do you manipulate this.state
> When you want to change the state outside of a constructor you use this.setState

## Controlled Components
> When the values are set by the state, so its value only ever changes when the state changes.