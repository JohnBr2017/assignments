The 5 principles:
1) Declarative - we have to tell react what to do
2) State-based -
  state: the current mutable data set of the app
  handling state-changes: provide a new state, and compare with old state, and render changes
3) Mono-flow -
  cyclical data flow
    state --> view --> trigger state-change --> new state --> view --trigger state-change --> etc...
4) Component-based (feature-based)- broken up into smaller parts that perform individual tasks
5) VIRTUAL DOM!!!
  - virtural DOM is javascript object representing real DOM.
  - as view triggers changes in the state, the virtual dom is updated, then compared with real DOM, and view is therefor updated containing new changes.


Purposes of a web page:
1) extact data from user
2) manipulate data
3) display data



