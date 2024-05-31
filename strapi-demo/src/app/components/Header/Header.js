import React from 'react';
import config from '@/config';
import Link from 'next/link';

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
  

const Header =async () => {
    const routeData = await fetchRoutes();
  const routes = await routeData.data;
  return (
    <header>
        <div className="container">
            <div className="nav_bar">
                <div className="main_logo">
                    <Link href="/">
                        <img alt="logo"  className="logo_img" src="\assets\images\main_logo.jpg" />
                    </Link>
                </div>
                <div className="nav_element">
                    <ul className="nav_list">
                        {
                            routes.length > 0 && routes.map((val,i)=>(
                                <li className="nav_item" key={i}><Link className="anchor"  href={val.attributes.route}>{val.attributes.name}</Link></li>
                            ))
                        }
                    </ul>
                </div>
                
                {/*<button className="mobile_btn" onclick="showHiddenItems()"  aria-label="icon    ">
                    <i className="fa fa-bars" id="icon"  onclick="showHiddenItems()"></i>
  </button>
                
                <div className="dark_mode">
                    <a href="#"> <img className="dark_btn " src="\assets\images\dark-mode.png" /></a>
                </div>*/}

                <div className="nav_button">
                    <button className="button_nav">Start 14 Days Free Trial</button>
                </div>
                
                
            </div>
        </div>
    </header>
  )
}

export default Header