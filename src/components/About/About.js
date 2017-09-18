import React, { Component } from 'react'
import { connect } from 'react-redux'
import SectionTitle from '../SectionTitle'
import { setPointer } from '../../actions/set_pointer'


const Category = ({ extraClass, image, text }) => (
  <div className='col-sm-12 col-lg-4 category'>
    <div className={`card ${extraClass}`}>
      <img 
        className='card-img-top'
        src={require(`../../assets/images/${image}`)}
        alt='category block'
      />
      <div className='card-block'>
        <p className='card-text'>{ text }</p>
      </div>
    </div>
  </div>
)

class About extends Component {
  componentDidMount() { this.props.setPointer({ about: this.about }) }
  
  render() {  
    const about = "Just a Junior Developer with a passion for software and a drive to become the best at it, while making money of course! Ive had more experience working on the Frontend but love the backend work too."
    const hobbies = "I love playing various sports like Basketball, Football, etc. My absolute favorite however is Tennis, which I played throughout my entire Highschool career."
    const facts = "I was actually born in the Cameroon, a small country in mid-western Africa. I left and came to the U.S. around the 4yrs of age however, and have lived in Virginia ever since."
  
    return (
      <section className='about-wrapper' ref={el => { this.about = el }}>
        <div className='container'>
          <SectionTitle main='About' sub />
          <div className='row'>
            <Category
              extraClass='smaller'
              image='about-me.jpeg' 
              text={about} 
            />
            <Category
              extraClass='middle'
              image='hobbies.jpg' 
              text={hobbies} 
            />
            <Category
              extraClass='smaller'
              image='cool-facts.jpeg' 
              text={facts} 
            />
          </div>
        </div>
      </section>
    )
  }
}

export default connect(null, { setPointer })(About)