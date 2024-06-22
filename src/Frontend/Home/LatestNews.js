import React, { useContext } from 'react';
import { AdminContext } from '../Admin/Context/AdminContext';
import moment from 'moment';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const LatestNews = () => {
  const { displayNews } = useContext(AdminContext);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div className='LatestNews'>
      <h1>Latest News</h1>
      <Carousel responsive={responsive} showDots={true} swipeable={true}>
        {displayNews?.map((News, index) => (
          <div key={index} className='news-box'>
            <img src={News.NewsImage.secure_url} alt="News" />
            <h4>{moment(News?.createdAt).calendar()}</h4>
            <p>{News.News}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default LatestNews;
