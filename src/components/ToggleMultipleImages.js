import React, { Component } from 'react';

class ToggleMulImgComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      images: [
        {
          src: 'https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg', 
          name: 'MS Dhoni'
        },
        {
          src: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Virat_Kohli_in_PMO_New_Delhi.jpg',
          name: 'Virat Kohli'
        },
        {
          src: 'https://sachintendulkar.com/wp-content/uploads/2023/05/tendulkar_mi_ipl_1650777563845_1652256166916-1.jpg',
          name: 'Sachin Tendulkar'
        },
        {
          src: 'https://2.bp.blogspot.com/-eB4NFDxXXxI/WDLqbtgi6fI/AAAAAAAAAW0/qj_nkYjN4pAgul9e9tysRcnj8yda7UCDwCLcB/s1600/Yuvraj%2BSingh%2BImages-hd.jpg',
          name: 'Yuvraj Singh'
        }
      ]
    };
  }

  handleImageToggle = (index) => {
    this.setState({ currentImage: index });
  };

  render() {
    const { currentImage, images } = this.state;
    const { src, name } = images[currentImage];

    return (
      <div>
        <img src={src} alt={name} width="300" height="200" />
        <h3>{name}</h3>
        <div>
          {images.map((image, index) => (
            <button key={index} onClick={() => this.handleImageToggle(index)}>
              Show {image.name}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default ToggleMulImgComp;
