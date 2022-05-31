import styles from "../styles/testimonials.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { useState } from "react";

SwiperCore.use([Navigation, Autoplay, Pagination]);

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      name: "Olle Henriksson",
      testimonial:
        "Hussein is an actor with fantastic range, provides excellent communication, support and ideas to the projects he works with. He is one of a kind, and is a must-cast for any director looking to have someone onboard whose ambition leaps off the screen in all the right and exciting ways.",
      key: 1,
    },
    {
      name: "Star Wars Imperial Historian",
      testimonial:
        "Super professional with both their talent and equipment. A very powerful voice giving the character a demanding and ever-present of absolute power within the scene, perfect delivery of lines. Great to work with and very punctual in sending lines way before the deadline. Their voice talent was also complemented with crystal clear audio, no noises or constant gain in the background at all, this person is 100% professional and a great talent.",
      key: 2,
    },
    {
      name: "Rebecca Uesugi",
      testimonial:
        "Hussein is an amazingly versatile actor with an incredible range! It has been a pleasure working with him on Erai's Destiny and I hope we can continue to work together on future projects. He is friendly, professional, and incredibly supportive of his fellow performers. He has both the talent and dedication to elevate any voice acting endeavor to the next level and is an asset to any project!",
      key: 3,
    },
    {
      name: "Diana Kennedy",
      testimonial: `Hussein is a talent to watch! He's incredibly versatile and powerful in his readings, and gives 110% to his projects. It's rare to find someone with equal professionalism and charisma as Hussein proves to show. I've enjoyed working with him on "Erai's Destiny" and you will do well to hire him for your voice acting needs.`,
      key: 4,
    },
    {
      name: "Norris Packard",
      testimonial:
        "Fantastic range while also being super easy and professional to work with. But most of all, he can provide some truly epic gravely voices that can fit any badass warrior and/or imposing villain figures. A fantastic actor and a true talent to watch out for.",
      key: 5,
    },
    {
      name: "Simplymiprii",
      testimonial:
        "Hussein is a beyond consistent and impressive voice actor. You won't even believe the levels at which he can create and reanimate a voice for a character. I am so happy to have had them in my cast, and so will you!",
      key: 6,
    },
  ]);

  return (
    <div id="testimonials" className={styles.testimonials}>
      <h1>Testimonials</h1>
      <Swiper
        navigation={true}
        className={styles.swiper}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        pagination={
          {
            clickable: true,
          }
        }
      >
        {testimonials.map((elem) => (
          <SwiperSlide className={styles.slide} key={elem.key}>
            <div className={styles.testimonial}>
              <blockquote>
                <p>"{elem.testimonial}"</p>
              </blockquote>
              <p>— {elem.name}</p>
            </div>
          </SwiperSlide>
        ))}
        {/* <div className="swiper-pagination"></div> */}
      </Swiper>
    </div>
  );
};

export default Testimonials;
