import { Link} from 'react-router-dom'

import './style.css';
import React from "react"
class Home extends React.Component {

  
  render() {

    return (
      <div className="container pt-3">
        <div className="row">
            <article className="best-post">
              <div
                className="best-post-image"
                style={{
                  backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/projects/404/396f5591178321.Y3JvcCwxMjk0LDEwMTIsMCwzODQ.png")`
                }}
              ></div>
              <div className="best-post-content">

                <div className="best-post-content-title">
                  Lorem ipsum dolor sit amet, consectetur
                </div>

                <div className="best-post-content-sub">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis cupiditate hic maiores, 
              ipsum libero, voluptas distinctio laborum officiis aliquid inventore 
              expedita nihil incidunt? Accusantium ipsam velit consectetur veniam, labore eius?
                </div>
              </div>
            </article>
  
            <article className="post__card-2">
              <div className="post__card_-2">
                <div
                  className="post__card__image-2"
                  style={{
                    backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ad9cb894970549.5e8f28eecdea8.jpg")`
                  }}
                ></div>
                <div>
                  <div className="post__card_meta-2">
                    <div className="post__card_cat">youtube</div>
                    <p className="post__card_title-2">Lorem ipsum dolor sit</p>
                    <p className="post__card_alttitle-2">
                      Lorem Ipsum, masaüstü yayıncılık ve basın yayın sektöründe
                      kullanılan...
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <article className="post__card-2">
              <div className="post__card_-2">
                <div
                  className="post__card__image-2"
                  style={{
                    backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7fa56a51087311.5a227b15ad57a.jpg")`
                  }}
                ></div>
                <div>
                  <div className="post__card_meta-2">
                    <div className="post__card_cat">youtube</div>
                    <p className="post__card_title-2">Lorem ipsum dolor sit</p>
                    <p className="post__card_alttitle-2">
                      Lorem Ipsum, masaüstü yayıncılık ve basın yayın sektöründe
                      kullanılan...
                    </p>
                  </div>
                </div>
              </div>
            </article>
     
            <article className="post__card-2">
              <div className="post__card_-2">
                <div
                  className="post__card__image-2"
                  style={{
                    backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7c8a1e90624231.5e997520e9b9b.jpg")`
                  }}
                ></div>
                <div>
                  <div className="post__card_meta-2">
                    <div className="post__card_cat">youtube</div>
                    <p className="post__card_title-2">Lorem ipsum dolor sit</p>
                    <p className="post__card_alttitle-2">
                      Lorem Ipsum, masaüstü yayıncılık ve basın yayın sektöründe
                      kullanılan...
                    </p>
                  </div>
                </div>
              </div>
            </article>
       
        </div>
      </div>
    );
  }
}
export default Home ;