import { Component } from "react";

class VirtualDOM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakFast: [
        { id: 101, name: "IDLY", price: "30 &#8377;" },
        { id: 102, name: "DOSA", price: "30 &#8377;" },
        { id: 103, name: "VADA", price: "30 &#8377;" },
        { id: 104, name: "UPMA", price: "30 &#8377;" }
      ],
      courses: ["Java", "Python", "DOT NET"]
    };
  }

  render() {
    const { breakFast, courses } = this.state;
    return (
      <div>
        <h2>This is Virtual DOM Component</h2>
        <ul>
          {
            breakFast.length > 0 && breakFast.map((val) => {
              return (
                <li key={val.id}> 
                  {val.name} - <span dangerouslySetInnerHTML={{ __html: val.price }} />
                </li>
              );
            })
          }
        </ul>
        <hr />
        <label>Select your Course</label>
        <select>
          {
            courses.length > 0 && courses.map((val, index) => {
              return <option value={val} key={index}>{val}</option>;
            })
          }
        </select>
      </div>
    );
  }
}

export default VirtualDOM;
