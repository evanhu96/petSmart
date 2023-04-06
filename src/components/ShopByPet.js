import React from 'react';

export default function ShopByPet() {
  return (
    <div className="container">
      <h3>Shop by Pet</h3>
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <a href="google.com">
            <img className="rounded-circle mx-auto d-block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpCsi_bIaHyRMR4ZWuQe8NSdDonCu4Il0IPm1QiYfG&s" alt="Dog" width="150" height="150" />
            <h4 className="text-center">Dog</h4>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="google.com">
            <img className="rounded-circle mx-auto d-block" src="https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg" alt="Cat" width="150" height="150" />
            <h4 className="text-center">Cat</h4>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="google.com">
            <img className="rounded-circle mx-auto d-block" src="https://stylesatlife.com/wp-content/uploads/2019/10/Types-of-Fish-Species-In-World-and-Their-Facts.jpg" alt="Fish" width="150" height="150" />
            <h4 className="text-center">Fish</h4>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="google.com">
            <img className="rounded-circle mx-auto d-block" src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/1200" alt="Bird" width="150" height="150" />
            <h4 className="text-center">Bird</h4>
          </a>
        </div>
      </div>
    </div>
  );
}
