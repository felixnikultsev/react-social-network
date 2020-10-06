import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';
import { initializeApp } from './redux/app-reducer'
import { connect } from 'react-redux'
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) return <Preloader />

    return (
      <div className="App">
        <HeaderContainer />
        <main className="main">
            <div className="container grid">
                <Nav />
                <Content />
            </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, {
  initializeApp
})(App);
