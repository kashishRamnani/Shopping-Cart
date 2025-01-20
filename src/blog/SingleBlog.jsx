import React, { useState } from 'react';
import blogList from '../utilis/blogdata';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Tags from "../shop/Tags";
import PopularPost from "../shop/PopularPost"
const socialList = [ { link: "#", iconName: "icofont-facebook", className: "facebook", }, { link: "#", iconName: "icofont-twitter", className: "twitter", }, { link: "#", iconName: "icofont-linkedin", className: "linkedin", }, { link: "#", iconName: "icofont-instagram", className: "instagram", }, { link: "#", iconName: "icofont-pinterest", className: "pinterest", }, ];
  

const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList)
    const { id } = useParams()
    
    // Filter the blog based on the ID from the URL parameters
    const result = blog.filter((b) => b.id === Number(id))
    
    // Make sure result[0] exists before accessing its properties
    const selectedBlog = result[0]

    return (
        <div>
            <PageHeader title={"Single Blog Pages"} curPage={"Blog / Blog Details"} />
            <div className='blog-section blog-single padding-tb section-bg'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-8 col-12'>
                            <article>
                                <div className='section-wrapper'>
                                    <div className='row row-cols-1 justify-content-center g-4'>
                                        <div className='col'>
                                            <div className='post-item style-2'>
                                                <div className='post-inner'>
                                                    {selectedBlog ? (
                                                        <div>
                                                            <div className='post-thumb'>
                                                                <img src={selectedBlog.imgUrl} alt={selectedBlog.title} className='w-100' />
                                                            </div>
                                                            <div className='post-content'>
                                                                <h3>{selectedBlog.title}</h3>
                                                                <div className='meta-post'>
                                                                    <ul className='lab-ul'>
                                                                        {selectedBlog.metaList?.map((val, i) => (
                                                                            <li key={i}>
                                                                                <i className={val.iconName}></i>{val.text}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                                <p>A blog (short for "weblog") is an online journal or informational website run by an individual, group, or corporation that offers regularly updated content (blog post) about a topic. It presents information in reverse chronological order and it's written in an informal or conversational style
                                                                They let you reach more people and engage them. Here are some tips: Use relevant and specific hashtags for your niche and post. Use popular hashtags that are trending in your niche.
                                                                </p>
                                                                <blockquote><p>Blogging is a communications mechanism handed to us by the long tail of the Internet. Blogging is to writing what extreme sports are to athletics: more free-form, more accident-prone, less formal, more alive.</p>
                                                                <cite>
                                                                    <a href="#">...Hyderabad</a>
                                                                </cite>
                                                                
                                                                </blockquote>
                                                                <p>The first thing you need to decide when you build your blog is what you want to accomplish with it, and what it can do if successful.
                                                                When you write remarkable content, you stay engaged and excited with your blog. Your readers follow suit.
                                                                If you love writing or making music or blogging or any sort of performing art, then do it. Do it with everything you’ve got. Just don’t plan on using it as a shortcut to making a living.
                                                                When blogging first became popular, many thought that it was just a passing trend. But it has stuck around – and more than that, only strengthened over time.
                                                                Social media is around for the long haul because we value our relationships with one another above just about everything else.  A blog entry isn’t just a block of text, but a slice of humanity and an opportunity to begin a real conversation.
                                                                </p>
                                                                <img src="/src/assets/images/blog/single/01.jpg" alt="" />
                                                                <p>Successful blogging is not about one time hits. It’s about building a loyal following over time.”
                                                                    First-time bloggers often chase the big spikes in traffic that come with a viral post or a big media mention. Then lightning finally strikes… and they come to realize that those surges in traffic are made up mostly of people who aren’t very engaged and who don’t stick around for very long.
                                                                    Matt’s right:  the Internet is absolutely bursting at the seams with valuable information, all available for free. Yet he and other bloggers like him are able to make six-figure incomes by creating information so specialized and valuable that people are more than willing to pony up the dough.
                                                                </p>
                                                                <div className='video-thumb'>
                                                                    <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                                                    <a href="https://youtu.be/PGuKjkdGrEI?si=C_6Yj-P3c4WC6P5a" className='video-button popup' target='_blank'>
                                                                    <i className='icofont-ui-play'></i>
                                                                    </a>

                                                                </div>
                                                                <p>I’ve long advised that bloggers seeking to make money from blogging spread their interests across multiple revenue streams so as not to put all their eggs in one basket.
                                                                It should feel genuinely good to earn income from your blog – you should be driven by a healthy ambition to succeed. If your blog provides genuine value, you fully deserve to earn income from it.
                                                                </p>
                                                                <div className='tags-section'>
                                                                    <ul className='tags lab-ul'>
                                                                        <li><a href="#">Agency</a></li>
                                                                        <li><a href="#">Business</a></li>
                                                                        <li><a href="#">Personal</a></li>

                                                                    </ul>
                                                                    <ul className='lab-ul social-icons'>
                                                                        {
                                                                            socialList.map((val,i)=>(
                                                                                <li key={i}>
                                                                                    <a href="#" className={val.className}><i className={val.iconName}></i></a>

                                                                                </li>
                                                                            ))
                                                                        }

                                                                    </ul>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <p>Blog not found.</p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className='navigations-part'>
                                                <div className='left'>
                                                    <a href="#" className='prev'><i className='icofont-double-left'>Previous Blog</i></a>
                                                    <a href="#" className='title'>Evisculate Parallel Processes via Technica sound Models  Authoritative</a>

                                                </div>
                                                <div className='right'>
                                                    <a href="#" className='prev'><i className='icofont-double-left'>Previous Blog</i></a>
                                                    <a href="#" className='title'>Evisculate Parallel Processes via Technica sound Models  Authoritative</a>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <aside>
                                <Tags/>
                                <PopularPost/>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog
