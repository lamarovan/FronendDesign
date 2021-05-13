import React from "react";
import Slider from "react-slick";
import "./testimonial.scss";
import ClientWrapper from "./testimonialStyle";
import data from "./Testimonials";

export default function Testimonial() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderData = data.map(function (data) {
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">
            <img
              src="https://img.icons8.com/ultraviolet/40/000000/quote-left.png"
              alt="quote"
            />{" "}
          </h4>
          <div className="template-demo">
            <p>{data.review}</p>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-2">
              <img
                className="profile-pic"
                src="https://img.icons8.com/bubbles/100/000000/edit-user.png"
                alt="user"
              />
            </div>
            <div className="col-sm-10">
              <div className="profile">
                <h4 className="cust-name">{data.name}</h4>
                <p className="cust-profession">{data.profession}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <ClientWrapper>
      <h3 className="mx-4 my-3">Client Testimonials</h3>
      <div className="items">
        <Slider {...settings}>{sliderData}</Slider>
      </div>
    </ClientWrapper>
  );
}
//   return (
//     <div className="items">
//       <div className="card">
//         <div className="card-body">
//           <h4 className="card-title">
//             <img
//               src="https://img.icons8.com/ultraviolet/40/000000/quote-left.png"
//               alt="quote"
//             />{" "}
//           </h4>
//           <div className="template-demo">
//             <p>
//               Online reviews can make or break a customer's decision to make a
//               purchase. Read about these customer review sites where your
//               customers'
//             </p>
//           </div>
//           <hr />
//           <div className="row">
//             <div className="col-sm-2">
//               <img
//                 className="profile-pic"
//                 src="https://img.icons8.com/bubbles/100/000000/edit-user.png"
//                 alt="user"
//               />
//             </div>
//             <div className="col-sm-10">
//               <div className="profile">
//                 <h4 className="cust-name">Delbert Simonas</h4>
//                 <p className="cust-profession">Store Owner</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="card">
//         <div className="card-body">
//           <h4 className="card-title">
//             <img
//               src="https://img.icons8.com/ultraviolet/40/000000/quote-left.png"
//               alt="quote"
//             />
//           </h4>
//           <div className="template-demo">
//             <p>
//               When you think of Apple you automatically think expensive if your
//               anything like me. When purchasing this laptop I was skeptical on
//               laptops i purchased.
//             </p>
//           </div>
//           <hr />
//           <div className="row">
//             <div className="col-sm-2">
//               <img
//                 className="profile-pic"
//                 src="https://img.icons8.com/bubbles/100/000000/edit-user.png"
//                 alt="user"
//               />
//             </div>
//             <div className="col-sm-10">
//               <div className="profile">
//                 <h4 className="cust-name">Tikoh Amin</h4>
//                 <p className="cust-profession">Salon Owner</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="card">
//         <div className="card-body">
//           <h4 className="card-title">
//             <img
//               src="https://img.icons8.com/ultraviolet/40/000000/quote-left.png"
//               alt="quote"
//             />
//           </h4>
//           <div className="template-demo">
//             <p>
//               I’ve wanted a MacBook for a while now because of the build quality
//               and the simplicity of the OS. I spend an average 6 hours a day
//               using it for college and the battery still has a fair.
//             </p>
//           </div>
//           <hr />
//           <div className="row">
//             <div className="col-sm-2">
//               {" "}
//               <img
//                 className="profile-pic"
//                 src="https://img.icons8.com/bubbles/100/000000/edit-user.png"
//                 alt="user"
//               />{" "}
//             </div>
//             <div className="col-sm-10">
//               <div className="profile">
//                 <h4 className="cust-name">Malachi Lensing</h4>
//                 <p className="cust-profession">Marketing Manager</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="card">
//         <div className="card-body">
//           <h4 className="card-title">
//             <img
//               src="https://img.icons8.com/ultraviolet/40/000000/quote-left.png"
//               alt="quote"
//             />{" "}
//           </h4>
//           <div className="template-demo">
//             <p>
//               This MacBook has excellent processing speed. The screen is crystal
//               clear and I really enjoy the touchbar. I set up the fingerprint
//               reader.
//             </p>
//           </div>
//           <hr />
//           <div className="row">
//             <div className="col-sm-2">
//               {" "}
//               <img
//                 className="profile-pic"
//                 src="https://img.icons8.com/bubbles/100/000000/edit-user.png"
//                 alt="user"
//               />{" "}
//             </div>
//             <div className="col-sm-10">
//               <div className="profile">
//                 <h4 className="cust-name">Christian Isla</h4>
//                 <p className="cust-profession">Android Developer</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="card">
//         <div className="card-body">
//           <h4 className="card-title">
//             <img
//               src="https://img.icons8.com/ultraviolet/40/000000/quote-left.png"
//               alt="quote"
//             />
//           </h4>
//           <div className="template-demo">
//             <p>
//               For the last 10 years, I have owned an old Gateway laptop.
//               Although it was amazing and lasted me, it was time for an upgrade.
//               I own an Apple phone so I decided to look into a computer.
//             </p>
//           </div>
//           <hr />
//           <div className="row">
//             <div className="col-sm-2">
//               {" "}
//               <img
//                 className="profile-pic"
//                 src="https://img.icons8.com/bubbles/100/000000/edit-user.png"
//                 alt="user"
//               />{" "}
//             </div>
//             <div className="col-sm-10">
//               <div className="profile">
//                 <h4 className="cust-name">Lori Charles</h4>
//                 <p className="cust-profession">Sales manager</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
