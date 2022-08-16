import React from 'react';
import { Dropdown } from 'react-bootstrap';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: null,
      selectedItem: null
    };
  }

  componentWillMount(){
    const { results } = this.props;
    fetch(results)
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        menuItems: data.results
      });
    }).catch((err) => console.log(err));
  }

  choiceSelect = (event) => {
    const { choice } = this.props;
    choice(event.target.attributes.getNamedItem('data-key').value);
  }

  render(){
    const {menuItems} = this.state;
    if(!menuItems) return null;
    return (
      <div class="row selector">
        <div class="col-md-12">
          <Dropdown aria-label="Dataset Selector" onClick={e => {
            this.setState({ selectedItem: e.target.innerText });
          } }>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              {this.state.selectedItem ? this.state.selectedItem:menuItems[0].toUpperCase()}
            </Dropdown.Toggle>
            <Dropdown.Menu onClick={this.choiceSelect}>
              {menuItems.map((item, i) => <Dropdown.Item data-key={++i} key={i}>{item.toUpperCase()}</Dropdown.Item>)}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default Index;
