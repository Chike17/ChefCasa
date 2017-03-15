import React from 'react';
import MenuItem from './menuItem.jsx'; 
import {Button, ButtonToolbar, ButtonGroup} from 'react-bootstrap';


class MenuBuilder extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      numMenuItems: 0,
      menuItems: {}
    };
  }

  render () {
    const menuItemComponents = [];

    for (var i = 0; i < this.state.numMenuItems; i++) {
      menuItemComponents.push(
        <MenuItem 
          index={i} 
          getFormData={this.onGetFormData.bind(this)}
          key={i}
        />
      );
    }
    
    return (
      <Menu 
        saveMenu={this.onSaveMenu.bind(this)} 
        addMenuItem={this.onAddMenuItem.bind(this)} 
        removeMenuItem={this.onRemoveMenuItem.bind(this)} 
        menuItems={menuItemComponents} 
      />
    );
  }
  onSaveMenu () {
    window.test = this.state.menuItems;
    var data = JSON.stringify(this.state.menuItems); 
    fetch('./api/menus', {  
      method: 'post',
      headers: {  
        "Content-type": "application/json; charset=UTF-8"  
      },   
      body: data  
    })
    .then(function (data) {  
      console.log('Request succeeded with JSON response', data);  
    })  
    .catch(function (error) {  
      console.log('Request failed', error);  
    });
   
    
  }
  onGetFormData (i, name, item) {
    var obj = this.state.menuItems;
    if ( !obj[i] ) {
      obj[i] = {};
    }
    obj[i][name] = item;
    this.setState({
      menuItems: obj
    });
    console.log(this.state.menuItems);
  }
  onAddMenuItem () {
    this.setState({
      numMenuItems: this.state.numMenuItems + 1
    });
  }
  onRemoveMenuItem () {
    delete this.state.menuItems[this.state.numMenuItems - 1];
    this.setState({
      numMenuItems: this.state.numMenuItems - 1
    });
  }
}

class Menu extends React.Component {
  render () {
    return (
      <div id="menuBuilder">
        <ButtonToolbar className="spacerT10 spacerL10">
          <ButtonGroup>
            <Button onClick={this.props.addMenuItem}>Add Menu Item</Button>
            <Button onClick={this.props.removeMenuItem}>Remove Menu Item</Button>
            <Button onClick={this.props.saveMenu}>Save Menu</Button>
          </ButtonGroup>
        </ButtonToolbar>
        
        <div className="spacerT10" id="menuItems-pane">
          {this.props.menuItems}
        </div>
      </div>
    );
  }
}



module.exports = MenuBuilder;


