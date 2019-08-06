import React,{Component} from 'react';
import {connect} from'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
/*import ErrorBoundry from'../components/ErrorBoundry';*/
//import {robotsname} from './robotsname';           //{robotsname}is called de-structuring coz we have mutiple properties to return in rbotsname file   
import './App.css';

import {setSearchField,requestRobots} from '../Actions';

const mapStateToProps = (state) =>{
	return{
		searchField:state.searchRobots.searchField,
		robotsname:state.requestRobots.robotsname,
		isPending:state.requestRobots.isPending,
		error:state.requestRobots.error
	}
}

const mapDispatchToProps= (dispatch)=>{
	return{
		onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
		onRequestRobots:()=> dispatch(requestRobots())
	}
}

class App extends Component{
	/*constructor() {
		super()
		this.state={
			robotsname:[]
			searchfield: ''
		}
	}*/

	componentDidMount(){
			/*dispatch({type:REQUEST_ROBOTS_PENDING});
			fetch('https://jsonplaceholder.typicode.com/users')
			.then(users => this.setState({robotsname:users}));*/
			this.props.onRequestRobots();
	}

	/*onSearchChange= (event)=>{
		this.setState({searchfield:event.target.value})
	}
*/
	render(){
		/*const {robotsname}=this.state;*/
		const {searchField, onSearchChange, robotsname, isPending }=this.props;
		const filteredRobots=robotsname.filter(robotsname=>{
			return robotsname.username.toLowerCase().includes(searchField.toLowerCase());
		})
		return isPending ?								//Ternary operator:- binaryCondition ? valueReturnedIfTrue : valueReturnedIfFalse;
			<h1>Bots Are Getting Ready </h1>:
				(
				<div className='tc'>
				<h1 className='f1'>R.O.B.O.F.R.I.E.N.D.S.</h1>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
						<CardList robotsname={filteredRobots}/>	
					
				</Scroll>
				</div>
			);
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);