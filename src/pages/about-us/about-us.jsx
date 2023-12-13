import React from 'react';
import './about-us.scss';
import img1 from '../../assets/images/img1.webp';
import img2 from '../../assets/images/img2.webp';
import img3 from '../../assets/images/img3.webp';

function AboutUs() {
    return (
        <>
            <div className="about-us-general-cont">
                <h1 className='header-title'>Description du club</h1>
                <div className="about-us-img-cont black">
                    <img src={img1} alt="about-us" />
                    <div className="article">
                        <h1>Titre</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium obcaecati quis reiciendis optio vitae sint, eligendi ut rerum accusantium labore voluptatem omnis unde soluta aut tempora quae, et vero provident?
                            Molestiae enim excepturi voluptas expedita qui corporis consectetur nihil et illo voluptatibus inventore rem autem maiores odit at atque dolorum veniam, in odio sequi praesentium? Incidunt quod nobis quidem consectetur.
                            Ab, accusantium reiciendis sapiente harum, at tempora quas voluptas placeat, perspiciatis eius quos repudiandae fugiat ipsum ratione magni corrupti eaque sint a quo unde voluptatem dignissimos illo. Quisquam, doloremque mollitia.</p>

                    </div>
                </div>
                <div className="about-us-img-cont">
                    <div className="article">
                        <h1>Titre</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium obcaecati quis reiciendis optio vitae sint, eligendi ut rerum accusantium labore voluptatem omnis unde soluta aut tempora quae, et vero provident?
                            Molestiae enim excepturi voluptas expedita qui corporis consectetur nihil et illo voluptatibus inventore rem autem maiores odit at atque dolorum veniam, in odio sequi praesentium? Incidunt quod nobis quidem consectetur.
                            Ab, accusantium reiciendis sapiente harum, at tempora quas voluptas placeat, perspiciatis eius quos repudiandae fugiat ipsum ratione magni corrupti eaque sint a quo unde voluptatem dignissimos illo. Quisquam, doloremque mollitia.</p>

                    </div>
                    <img src={img2} alt="about-us" />
                </div>
                <div className="about-us-img-cont black">

                    <img src={img3} alt="about-us" />
                    <div className="article">
                        <h1>Titre</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium obcaecati quis reiciendis optio vitae sint, eligendi ut rerum accusantium labore voluptatem omnis unde soluta aut tempora quae, et vero provident?
                            Molestiae enim excepturi voluptas expedita qui corporis consectetur nihil et illo voluptatibus inventore rem autem maiores odit at atque dolorum veniam, in odio sequi praesentium? Incidunt quod nobis quidem consectetur.
                            Ab, accusantium reiciendis sapiente harum, at tempora quas voluptas placeat, perspiciatis eius quos repudiandae fugiat ipsum ratione magni corrupti eaque sint a quo unde voluptatem dignissimos illo. Quisquam, doloremque mollitia.</p>

                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;