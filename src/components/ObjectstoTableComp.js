import React, { Component } from 'react';

class EmpDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emp: [
        {
          empid: '001',
          empname: 'Amit',
          emppost: 'Software Engineer',
          empsal: '₹60000',
          empcontact: '9876543210',
          empaddress: '123, MG Road, Bengaluru, Karnataka'
        },
        {
          empid: '002',
          empname: 'Priya',
          emppost: 'Project Manager',
          empsal: '₹80000',
          empcontact: '9123456789',
          empaddress: '456, Brigade Road, Bengaluru, Karnataka'
        },
        {
          empid: '003',
          empname: 'Ravi',
          emppost: 'UX Designer',
          empsal: '₹70000',
          empcontact: '9876547890',
          empaddress: '789, Indiranagar, Bengaluru, Karnataka'
        },
        {
          empid: '004',
          empname: 'Anjali',
          emppost: 'HR Manager',
          empsal: '₹75000',
          empcontact: '9988776655',
          empaddress: '101, Whitefield, Bengaluru, Karnataka'
        },
        {
          empid: '005',
          empname: 'Sandeep',
          emppost: 'Data Analyst',
          empsal: '₹65000',
          empcontact: '9234567890',
          empaddress: '202, Koramangala, Bengaluru, Karnataka'
        },
        {
          empid: '006',
          empname: 'Sunita',
          emppost: 'Marketing Manager',
          empsal: '₹85000',
          empcontact: '9201234567',
          empaddress: '303, Jayanagar, Bengaluru, Karnataka'
        },
        {
          empid: '007',
          empname: 'Rajesh',
          emppost: 'Sales Executive',
          empsal: '₹55000',
          empcontact: '9112233445',
          empaddress: '404, Malleshwaram, Bengaluru, Karnataka'
        },
        {
          empid: '008',
          empname: 'Neha',
          emppost: 'Content Writer',
          empsal: '₹50000',
          empcontact: '9012345678',
          empaddress: '505, BTM Layout, Bengaluru, Karnataka'
        },
        {
          empid: '009',
          empname: 'Vikram',
          emppost: 'System Admin',
          empsal: '₹70000',
          empcontact: '9988774433',
          empaddress: '606, HSR Layout, Bengaluru, Karnataka'
        },
        {
          empid: '010',
          empname: 'Kavita',
          emppost: 'Software Developer',
          empsal: '₹72000',
          empcontact: '9876543234',
          empaddress: '707, Bannerghatta Road, Bengaluru, Karnataka'
        }
      ]
    };
  }

  render() {
    const columns = Object.keys(this.state.emp[0]); // Extract keys for column names
    return (
      <div>
        <h2>Employee Details</h2>
        <table border="2" cellPadding="10" cellSpacing="0" style={{ width: '100%', textAlign: 'left' }}>
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th key={index}>{col.charAt(0).toUpperCase() + col.slice(1)}</th> // Capitalize the first letter
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.emp.map((employee, index) => (
              <tr key={employee.empid}>
                {columns.map((col, idx) => (
                  <td key={idx}>{employee[col]}</td> // Access value by column name
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmpDetails;
