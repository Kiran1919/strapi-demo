import React from 'react'

const About = () => {
  return (
    <>
    <section className="home" >
        <div className="container">
            <div className="home_content">
                <div className="home_info">
                        <p className="sub_info home_subinfo">MEET THE ONE AND ONLY COCA</p>                 
                        <h1 className="head title">About Us Page</h1>
                    <div className="home_button">
                        <button className="button">Start 14 Days Free Trial</button>
                    </div>                       
                    <div className="magic_content">
                        <div className="arrow">
                            <a href="#" className="anchor"><img alt="play_arrow"  src="\assets\images\play_arrow.png" /></a> 
                        </div>
                        <div className="arrow_info">
                            <a href="#" className="anchor"><p className="info">See how the magic happens</p></a>
                        </div>
                </div>
                <div className="home_img">
                    <img alt="dashboard_img" className="dashboard_img" src="\assets\images\about us.jpg" />
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About