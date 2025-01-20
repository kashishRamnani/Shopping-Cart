import React, { useState } from 'react';
import Ratting from '../components/Ratting'; // Assuming this is the correct import for your rating component

const reviewTitle = "Add a review";

let ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];

const Review = () => {
  const [reviewShow, setReviewShow] = useState(false); // Initialize with `false`

  return (
    <>
      <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
        <li className="desc" onClick={() => setReviewShow(false)}>Description</li>
        <li className="rev" onClick={() => setReviewShow(true)}>Reviews 4</li>
      </ul>

      <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
        {reviewShow ? (
          <div className="review-showing">
            <ul className="content lab-ul">
              {ReviewList.map((review, i) => (
                <li key={i}>
                  <div className="post-thumb">
                    <img src={review.imgUrl} alt={review.imgAlt} />
                  </div>
                  <div className="post-content">
                    <div className="entry-meta">
                      <div className="posted-on">
                        <a href="#">{review.name}</a>
                        <p>{review.date}</p>
                      </div>
                    </div>
                    <div className="entry-content">
                      <p>{review.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="client-review">
              <div className="review-form">
                <div className="review-title">
                  <h5>{reviewTitle}</h5>
                </div>
                <form action="action" className="row">
                  <div className="col-md-4 col-12">
                    <input type="text" name="name" id="name" placeholder="Full Name *" />
                  </div>
                  <div className="col-md-4 col-12">
                    <input type="email" name="email" id="email" placeholder="Your Email *" />
                  </div>
                  <div className="col-md-4 col-12">
                    <div className="rating">
                      <span className="me-2">Your Rating</span>
                      <Ratting />
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <textarea name="message" id="message" rows="8" placeholder="Type Your Message Here"></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="default-button">
                      <span>Submit Review</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam dolorem incidunt voluptatem velit nam iure necessitatibus inventore possimus ullam! Inventore similique aperiam doloribus accusamus ab natus animi soluta optio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repellat pariatur suscipit nostrum qui nobis tempora! Exercitationem, autem recusandae debitis voluptate quo dignissimos unde consequuntur possimus animi quod numquam minima!Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, quo eum obcaecati facilis est qui? Totam laborum odio magnam omnis non neque delectus? Id sit fugit nostrum? Nam, quibusdam culpa?</p>
            <div className="post-item">
              <div className="post-thumb">
                <img src="/src/assets/images/shop/01.jpg" alt="" />
              </div>
              <div className="post-content">
                <ul className="lab-ul">
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel</li>
                </ul>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem totam dolorem incidunt voluptatem velit nam iure necessitatibus inventore possimus ullam! Inventore similique aperiam doloribus accusamus ab natus animi soluta optio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repellat pariatur suscipit nostrum qui nobis tempora! Exercitationem, autem recusandae debitis voluptate quo dignissimos unde consequuntur possimus animi quod numquam minima!Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, quo eum obcaecati facilis est qui? Totam laborum odio magnam omnis non neque delectus? Id sit fugit nostrum? Nam, quibusdam culpa?</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Review;
