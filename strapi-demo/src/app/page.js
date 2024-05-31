import config from "@/config";
import Card from "./components/Card";
import Link from "next/link";

const fetchBlogs = async (params) => {
  const reqOptions = {
    headers: {
        "Cache-Control": "no-cache, no-store",
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    cache: 'no-cache',
  };

  const request = await fetch(`${config.api}/api/blogs?populate=*&sort=id:desc`, reqOptions);
  // const request = await fetch(`${config.api}/api/blogs?populate=*&filters[IsFeatured][$eq]=true`,reqOptions);
  // const request = await fetch(`${config.api}/api/blogs?populate=*${params}`,reqOptions);
  const response = await request.json();
  // console.log("response", response);
  return response;
};
const fetchCards = async (params) => {
  const reqOptions = {
    headers: {
        "Cache-Control": "no-cache, no-store",
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    cache: 'no-cache',
  };

  const request = await fetch(`${config.api}/api/cards?populate=*`, reqOptions);
  const response = await request.json();
  return response;
};
const fetchRoutes = async (params) => {
  const reqOptions = {
    headers: {
        "Cache-Control": "no-cache, no-store",
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    cache: 'no-cache',
  };

  const request = await fetch(`${config.api}/api/routes?populate=*`, reqOptions);
  const response = await request.json();
  return response;
};

export default async function Home() {
  const data = await fetchBlogs();
  const cardData = data.data.slice(0, 2);
  // const featureddata = await fetchBlogs('&filters[IsFeatured][$eq]=true');
  // const data = await fetchBlogs('&filters[IsFeatured][$eq]=false');
  // const [featureddata,data] = await Promise.all([await fetchBlogs('&filters[IsFeatured][$eq]=true'),await fetchBlogs('&filters[IsFeatured][$eq]=false')])
  const data1 = await fetchCards();
  const cardsData = await data1.data

  const routeData = await fetchRoutes();
  const routes = await routeData.data;
  return (
    <>

    {/*<header>
        <div className="container">
            <div className="nav_bar">
                <div className="main_logo">
                    <a href="#">
                        <img alt="logo"  className="logo_img" src="\assets\images\main_logo.jpg" />
                    </a>
                </div>
                <div className="nav_element">
                    <ul className="nav_list">
                        {
                            routes.length > 0 && routes.map((val,i)=>(
                                <li className="nav_item" key={i}><a className="anchor"  href={val.attributes.route}>{val.attributes.name}</a></li>
                            ))
                        }
                    </ul>
                </div>
                
                

                <div className="nav_button">
                    <button className="button_nav">Start 14 Days Free Trial</button>
                </div>
                
                
            </div>
        </div>
            </header>*/}
    

    <section className="home" >
        <div className="container">
            <div className="home_content">
                <div className="home_info">
                        <p className="sub_info home_subinfo">MEET THE ONE AND ONLY COCA</p>                 
                        <h1 className="head title">The Ultimate Saas</h1>
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
                    <img alt="dashboard_img" className="dashboard_img" src="\assets\images\dashboard.png" />
                </div>
            </div>
            </div>
        </div>
    </section>

    <section className="best_Saas">
        <div className="container">
            <div className="best_content">
                <div className="best_title">
                    <h2 className="best_head">Coca is the best
                        Saas for any Business</h2>
                </div>
                <div className="user1">
                    <p className="no">
                        15K+
                    </p>
                    <p className="no_info">
                        15k+ users used Dash for their business today.
                    </p>
                </div>
                <div className="user1">
                    <p className="no">
                        25%
                    </p>
                    <p className="no_info">
                        Decrease expense more than 25%/mo
                    </p>
                </div>
                <div className="user2">
                    <p className="no">
                        60%
                    </p>
                    <p className="no_info">
                        Business revenue increase significantly.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section className="features">
        <div className="container">
            <div className="features_content">
                <div className="feature_image">
                    <img alt="feature_img" className="feature_img" src="\assets\images\feature.png" />
                </div>
                <div className="feature_details">
                    <p className="sub_info">OUR FEATURES</p>
                    <div className="feature_title">
                        <h2 className="header">Upgrade to pro to
                            unlock all features.</h2>
                    </div>
                    <div className="feature_type_details">
                        <div className="feature_type">
                            <div className="type_img">
                                <img alt="type_img" className="type_img" src="\assets\images\feature_analytical.png" />
                            </div>
                            <div className="type_info">
                                <h3 className="type_head">
                                    Analytical
                                </h3>
                                <p className="type_des">
                                    Our analytical tools make it easy to track progress in real-time.
                                </p>
                            </div>
                        </div>
                        <div className="feature_type">
                            <div className="type_img">
                                <img alt="type_img2" className="type_img" src="\assets\images\feature_dashboard.png" />
                            </div>
                            <div className="type_info">
                                <h3 className="type_head">
                                    Dashboard
                                </h3>
                                <p className="type_des">
                                    Our dashboard is easy to understand and track your business.
                                </p>
                            </div>
                        </div>
                    </div>
                        <button className="button feature_button">Get Started Now</button>
                </div>
            </div>
        </div>
    </section>

    <section className="reviews">
        <div className="container"> 
            <div className="review_title">
                <h2 className="header">Don’t just take our word.</h2>
            </div>
            <div className="topreviews">
                <div className="cardwrapper">
                    {
                      cardsData && cardsData.map((val,i) => (
                        <div className="card" key={i}>
                        <div className="per_details">
                            <div className="per_img">
                              <img alt="person_img" className="person_img" src={`${config.api}${val.attributes.userimg.data[0].attributes.url}`} />
                            </div>
                            <div className="per_info">
                                <h4 className="per_name">{val.attributes.title}</h4>
                                <p className="company_name">{val.attributes.author}</p>
                            </div>
                        </div>
                        <div className="per_des">
                            <p className="per_comment">{val.attributes.desc}</p>
                        </div>
                            <p className="per_date">{val.attributes.time}</p>
                    </div>
                      ))
                    }
                </div>

            </div>
        </div>
    </section>

    <section className="articles">
        <div className="container">
            <div className="article_content">
                <div className="article_info">
                    <div className="article_title">
                        <h2 className="header">
                            Our Latest Blogs
                        </h2>
                    </div>
                    <p className="article_des">
                        To succeed in the modern world, companies must embrace the latest tech innovations.
                    </p>
                    
                        <div className="see_all"> 
                                <Link href='/blogs'><p className="seeall_art">
                                    See all articles
                                </p></Link>
                            <Link className="anchor" href="/blogs">
                                <div className="seeall_arrow">
                                    <img alt="arrow" className="seeall_img_arrow" src="\assets\images\arrow-right.png" />
                                </div>
                            </Link>
                        </div>
                                    
                </div>
                {
                  cardData.map((val,i) =>(
                    <div className="article_card" key={i}>
                    <div className="article_img">
                        <img alt="article_img" className="image_article" src={`${config.api}${val.attributes.Thumbnail.data.attributes.url}`} />
                    </div>
                    <div className="card_detail">
                        <p className="card_name">{val.attributes.Category}</p>
                    </div>
                    <div className="article_details">
                        <h4 className="article_title">{val.attributes.Title}</h4>
                        <p className="article_des">{val.attributes.Summary}</p>
                    </div>
                </div>
                  ))
                }
            </div>
        </div>
    </section>

    <section className="join">
        <div className="container">
            <div className="joining_contents">
                <div className="join_title">
                    <p className="sub_info">NEWSLETTER</p>
                    <h2 className="header">
                        Join to get exclusive contents.
                    </h2>
                </div>
                <div className="email_box">
                    <input autoComplete="off" type="email" name="email" id="email" placeholder="Your email address" />
                    <button className="button">Join Now</button>
                </div>
                <div className="join_box">                 
                    <div className="check">
                        <div className="check_image">
                            <img alt="check" src="\assets\images\check.png" />
                        </div>
                        <p className="box_content">
                            Weekly reports
                        </p>
                    </div>
                    <div className="check">
                        <div className="check_image">
                            <img alt="check" src="\assets\images\check.png" />
                        </div>
                        <p className="box_content">
                            Unlimited free resources
                        </p>
                    </div>
                    <div className="check">
                        <div className="check_image">
                            <img alt="check" src="\assets\images\check.png" />
                        </div>
                        <p className="box_content">
                            Premium contents
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div className="container">
            <div className="footer_Allcontents">
                <div className="foot_content1">
                    <div className="logo_footer">
                        <a href="#" className="anchor">
                            <img alt="footer_img" className="footer_img" src="\assets\images\foot_logo.png" />
                        </a>
                    </div>
                    <div className="start_content">
                        <p className="ready_to_start">Ready to get started?</p>
                        <div className="footer_button">
                            <button className="foot_button">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="divider">
                    <hr />
                </div>
                <div className="foot_content2">
                    <div className="subscribe">
                        <p className="subscribe_text">Subscribe to our
                            newsletter
                        </p>
                        <div className="foot_email_box">
                            <input autoComplete="off" type="email" name="email" className="foot_email" placeholder="Email address" />
                            <a href="#" className="anchor"><img alt="foot_submit" className="foot_submit" src="\assets\images\foot_Submit.png" /></a>    
                        </div>
                    </div>
                    <div className="link_content">
                        <p className="list_title">Services</p>
                        <ul className="foot_list">
                            <li className="list"><a href="#" className="anchor">Email Marketing</a></li>
                            <li className="list"><a href="#" className="anchor">Campaigns</a></li>
                            <li className="list"><a href="#" className="anchor">Branding</a></li>
                            <li className="list"><a href="#" className="anchor">Offline</a></li>
                        </ul>                       
                    </div>
                    <div className="link_content">
                        <p className="list_title">About</p>
                        <ul className="foot_list">
                            <li className="list"><a href="#" className="anchor">Our Story</a></li>
                            <li className="list"><a href="#" className="anchor">Benefits</a></li>
                            <li className="list"><a href="#" className="anchor">Team</a></li>
                            <li className="list"><a href="#" className="anchor">Careers</a></li>
                        </ul>                       
                    </div>
                    <div className="link_content">
                        <p className="list_title">Help</p>
                        <ul className="foot_list">
                            <li className="list"><a href="#" className="anchor">FAQs</a></li>
                            <li className="list"><a href="#" className="anchor">Contact Us</a></li>
                        </ul>                       
                    </div>
                </div>
                <div className="foot_content3">
                    <div className="policies">
                        <p className="policy"><a href="#" className="anchor">Terms & Conditions</a></p>
                        <p className="policy"><a href="#" className="anchor">Privacy Policy</a></p>
                    </div>
                    <ul className="footer_social">
                        <li className="footer_social_item">
                            <a href="#" className="anchor_foot">
                                <i className="fa fa-facebook"></i>
                            </a>
                        </li>
                        <li className="footer_social_item">
                            <a href="#" className="anchor_foot">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </li>
                        <li className="footer_social_item">
                            <a href="#" className="anchor_foot">
                                <i className="fa fa-instagram" ></i>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </>
  );
}
