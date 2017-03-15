import React from 'react';

class DisplayMenus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Menus: {}
    };
    this.retrieveMenus(); 
  }
  

  retrieveMenus() {
    var context = this;
    fetch('./api/menus')  
      .then(  
        function(response) {  
          if (response.status !== 200) {  
            console.log('Looks like there was a problem. Status Code: ' +  
              response.status);  
            return;  
          }
          response.json().then(function(data) { 
            context.setState({
              Menus: data
            }); 
          });  
        }
      )  
      .catch(function(err) {  
        console.log('Fetch Error :-S', err);  
      });
  }

  render () {
    const menuComponents = [];
    for ( var i = 0; i < this.state.Menus.length; i++) {
      var menuData = JSON.parse(this.state.Menus[i].MenuItemDesc);
      menuComponents.push(
        <Menu 
          index={i}
          menu={menuData}
          key={i}
        />
      );
    }
    
    return (
      <div id="menuViewer">
        <h3 className="spacerL90">YOUR MENUS</h3>
        {menuComponents}
      </div>
    );
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
     
  }
  render () {
    const menuLineComponents = [];
    for (var key in this.props.menu) {
      var data = this.props.menu[key];
      menuLineComponents.push(
        <MenuLine 

          data={data}
          key={key}
        />
      );
    }
    return (
      <div className="spacerL90 spacerT10">
        MENU {this.props.index}
        { menuLineComponents }
      </div>
    );
  }
}

class MenuLine extends React.Component {
  render () {
    return (
      <div >
        { this.props.data.select + ': ' + this.props.data.item }
      </div>
    );
  }
}

module.exports = DisplayMenus;

