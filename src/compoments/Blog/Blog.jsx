import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Blog.css';
import athourImg from '../../assets/image/pexels-photo-614810.webp'
const Blog = () => {
    return (
        <Card className='card_blog'>
            <Card.Img variant="top" src="https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?w=1060&t=st=1680203978~exp=1680204578~hmac=f0a9a7f0482c5cbbe7a269bf031137dcaa72c8f94e445ea1edeb10a8810862a0" />

            <Card.Body>
                <div className='d-flex justify-content-between'>
                    <div className='athour-area d-flex'>
                        <div>
                            <img src={athourImg} alt="" />
                        </div>
                        <div className='ms-4'>
                            <h5>Mr. Raju</h5>
                            <p>Mar 14 (4 Days ago)</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h5>05 min read</h5>
                        </div>
                        <div>
                        <i class="fa-regular fa-bookmark"></i>

                        </div>

                    </div>

                </div>
                <Card.Title>How to get your first job as a self-taught programmer</Card.Title>
                <Card.Text>
                   <p><samp>#beginners </samp> <span> #programming</span></p>
                </Card.Text>
               <a href="/Mark as read">Mark as read</a>
            </Card.Body>
        </Card>
    );
};

export default Blog;