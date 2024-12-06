import React, { Component } from 'react';

class ToggleImgComp extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isImageOne: true, 
    };
  }
  toggleImage = () => {
    this.setState((prevState) => ({
      isImageOne: !prevState.isImageOne,
    }));
  };

  render() {
    const { isImageOne } = this.state;
    return (
      <div>
       
        <img
          src={isImageOne 
            ? 'https://img.jagranjosh.com/imported/images/E/GK/MS-Dhoni-Biography.jpg'  
            : 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Virat_Kohli_in_PMO_New_Delhi.jpg' 
          }
          alt="Toggled"
          width="300"
          height="200"
        />
        <br />
       
        <button onClick={this.toggleImage}>Toggle Image</button>
      </div>
    );
  }
}

export default ToggleImgComp;
