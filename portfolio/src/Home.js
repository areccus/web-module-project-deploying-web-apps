import React from 'react'
import animeSite from './images/animeSite.png'
import gitSearch from './images/gitSearch.png'
import instaClone from './images/instaClone.png'
const Home = () => {

    return (
        <div>
            <div className="top">
                <div className="intro">
                    <h1>My Name Is Areccus Branch</h1>
                    <h1 className='devtype'>Web Developer</h1>
                </div>
            </div>

            <div className="about">
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus porro soluta blanditiis consequatur ullam corporis repudiandae nisi id voluptatibus nihil, autem veritatis alias et, amet nostrum inventore perspiciatis iusto architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est maiores harum quo. Placeat id cupiditate facere optio blanditiis perspiciatis iusto accusamus tenetur doloribus, repellat, architecto neque, corrupti voluptas consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, eius nam necessitatibus explicabo accusantium, repudiandae esse dolore quae voluptatem eveniet delectus veritatis praesentium blanditiis obcaecati odit dolores earum. Repellendus, explicabo.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam hic maxime alias cum soluta tenetur nam libero, enim saepe quo, cupiditate, sint quibusdam accusamus laboriosam. Tenetur accusamus fugiat facilis autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ullam magni. Enim, reprehenderit ipsum. Accusantium, enim quia doloribus unde at provident, voluptas voluptates, fugit omnis deserunt ipsa inventore modi officiis.</p>
            </div>

            <div className="projects">
                <h1>Projects</h1>
                <div className="projectsIMG">
                <img src={animeSite} alt="animesite"/>
                <img src={gitSearch} alt="gitsearch"/>
                <img src={instaClone} alt="instaclone"/>
                </div>
            </div>

            <div className="contact">

                <h1>Contact:</h1>
                <div className="contactInfo">
                <a href="mailto: areccusbranch92@gmail.com"> Email: areccusbranch92@gmail.com</a><br></br>
                <a href="tel:7068168021">Phone: (706)816-8021</a>
                </div>
            </div>

        </div>
    )
}

export default Home
