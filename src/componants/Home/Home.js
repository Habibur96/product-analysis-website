

import { Link } from 'react-router-dom';
import useReviews from '../../hook/useReviews';

import ReviewDetail from '../ReviewDetail/ReviewDetail'

import './Home.css'


const Home = () => {
    const [reviews, setReviews] = useReviews([]);


    return (
        <div >
            <div className='product-container'>
                <p className='text'>
                    <h1 id='name1'>Camera Drones <br />
                        <span id='name2'> Which Camera Drone is Right for You?</span>  </h1>
                    A drone camera is an unmanned aircraft and is officially called UAVs (unmanned aerial vehicles) or UASes (unmanned aircraft systems). It is a flying robot that can be operated remotely otherwise fly separately through inbuilt embedded system software that works in combination with GPS & onboard sensors
                </p>
                <img src="https://5.imimg.com/data5/SM/WM/MY-66755087/drone-camera-500x500.jpg" alt="" />
            </div>

            <h2 className='header'>Customer Reviews(3)</h2>

            <div className='review-container'>

                {
                    reviews.slice(0, 3).map(review =>

                        <ReviewDetail
                            key={review.name}
                            reviewe={review}
                        ></ReviewDetail>)

                }
                <br /> <br />
                <Link to='/reviews'> <button id='btn'>See All Reviews</button></Link>
            </div>

        </div>

    );

};



export default Home;

