import React from 'react'
import fetchBlogs from '../../helpers/fetch-blog'
import style from './blogdetail.module.css'
import config from '@/config'
import Link from 'next/link'

const BlogDetail = async (props) => {
    const param = props.params.slug
    const blog = await fetchBlogs(`filters[slug][$eq]=${param}`);
    // console.log("blog from blog",blog.data)
  return (
    <section>
        <div className="container">
        <h1 style={{textAlign:"center"}}>Blog Detail</h1>
            {
                blog.data.map((data,i) => (
                    <div className={style.blog_detail_container} key={i}>
                        <span className='category'>{data.attributes.Category}</span>
                        <h2 className={style.title}>{data.attributes.Title}</h2>
                        <img src={`${config.api}${data.attributes.Thumbnail.data.attributes.url}`} className="" alt="..." />
                        <div className={style.main_content}>
                        {data.attributes.Content.map((val,i) =>(
                            <p dangerouslySetInnerHTML={{ __html: val.children[0].text }} key={i}></p>
                        ))}
                        </div>
                        <p className="">{data.attributes.Summary}</p>
                        <Link href='/' className='link' style={{marginTop:"15px"}}>Home</Link>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default BlogDetail