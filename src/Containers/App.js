// ___ Import libraries
// import {Component} since using class extended.
import React, { Component } from 'react';
//Connect method of react-redux to connect the components which want to use the store.
import { connect } from 'react-redux';

// ___ Import our own created components
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import { setSearchField, requestRobots } from '../actions'

// ___ Import robots data list
// Since in robots.js, it didn't export default, hence
// we need to destructure {robots}.
// Finally, we call API to get robot data.
// import { robots } from '../robots';

// ___ Import CSS
import './App.css';


// Tell me which state I need to listen to and send the state as props.
const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

// dispatch is to trigger the action
// Tell me which props I need to listen to and what action needs to be trigger/dispatch.
const mapDispatchToProps = (dispatch) => {
    return {
        // onSearchChange, which is a props, is going to receive an event.
        // event.target.value will change when you type every letter in the search box.
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

// ___ React.Component Lifecycle
// Components defined as classes currently provide more features than defining as function.
// Method render() mandatory, other methods are optional.
    //  ___ Mounting
    //  These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
        // 1. constructor()
        // 2. static getDerivedStateFromProps()
        // 3. render()
        // 4. componentDidMount()
            // ___ In this example, following methods had been called in the below seq.
                // 1. constructor()
                // 2. render() - render the page without robot data
                // 3. componentDidMount() - load the robot data
                // 4. render() - render the page with robot data/card.
    // ___ Updating
        // An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:
        // 1. static getDerivedStateFromProps()
        // 2. shouldComponentUpdate()
        // 3. render()
        // 4. getSnapshotBeforeUpdate()
        // 5. componentDidUpdate()

// The container folder should contain components with Lifecycle and state.
// The component folder should contain components which are pure functions.

class App extends Component {

    // ___ Without Redux    
    // constructor() {
    //     // Call super() in order to use 'this.'
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchField: ''
    //     }
    // }

    // ___ componentDidMount()
        // It is invoked immediately after a component is mounted (inserted into the tree). 
        // Initialization that requires DOM nodes should go here. 
    
        // If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
        // This method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in componentWillUnmount().
        
        // You may call setState() immediately in componentDidMount(). 
        // It will trigger an extra rendering, but it will happen before the browser updates the screen. 
        // This guarantees that even though the render() will be called twice in this case, the user won’t see the intermediate state. 
        // Use this pattern with caution because it often causes performance issues. 
        // In most cases, you should be able to assign the initial state in the constructor() instead. 
        // It can, however, be necessary for cases like modals and tooltips when you need to measure a DOM node before rendering something that depends on its size or position.

    // React function componentDidMount() will replace the html 'root' element with the all the things instructed in Render().
    componentDidMount() {
        // ___ Without Redux
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => this.setState({robots: users}));
        
        // ___ With Redux
        this.props.onRequestRobots();
    }

    // ___ No need when using Redux
        // How onSearchChange works:
        //                      [App] 
        //                      /   \
        // Component  [SearchBox]   [CardList]
        // 1. Everytime the onChange of the search box has been triggered, 
        // [SearchBox] calls its props (searchChange) to trigger the [App].onSearchChange function.
        // 2. Then use this input to communicate with the [CardList].
        
        // onSearchChange = (event) => {
        //     // You have to do this.setState, you can't do this.state.searchfield.
        //     this.setState({searchfield: event.target.value})
        // }

    render() {
        // ___ Without Redux
        // const { robots, searchfield } = this.state;
        // ___ With Redux
        const { searchField, onSearchChange, robots, isPending } = this.props;

        // Array.filter() method creates an array filled with all array elements that pass a test (provided as a function).
        // Example:
        // var ages = [32, 33, 16, 40];
        // function checkAdult(age) {
        //     return age >= 18;
        // }
        // ages.filter(checkAdult); // [32, 33, 40]

        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return isPending ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    {/* ___ Without Redux
                    <SearchBox searchChange={this.onSearchChange}/>
                    */}
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/> 
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

// export 2 functions: connect() and (app)
// connect() is a higher priority function to be run.
export default connect(mapStateToProps, mapDispatchToProps)(App);