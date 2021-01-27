import React from 'react';




const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';


class Colors extends React.Component {
  
  setBodyCooolr = color => {
    document.body.style.backgroundColor = color;
  }

  render() {
    return (
      <div className="colors">
        <button style={{
          backgroundColor: RED,
        }} 
        onClick={() => this.setBodyCooolr(RED)}
        className="colors__button" />

        <button style={{
          backgroundColor: GREEN,
        }}
        onClick={() => this.setBodyCooolr(GREEN)}
        className="colors__button" />

        <button style={{
          backgroundColor: BLUE,
        }}
        onClick={() => this.setBodyCooolr(BLUE)}
        className="colors__button" />
      </div>

    )
  }
}

export default Colors;