import { Container } from "react-bootstrap";
import { travelExperiences } from "../screens/HomeScreen";

const TravelCard = ({ data }) => {
  return (
    <div className="travel-card">
      <div
        className="card-background"
        style={{ backgroundImage: `url(${data.imageUrl})` }}
      >
        <span className="best-seller-badge">Best Seller</span>
        <div className="card-content">
          <h2 className="card-title">{data.title}</h2>
          <div className="location-badge">
            <i className="bi bi-geo-alt-fill"></i> {data.location}
          </div>
          <div className="trip-details">
            <span>
              <i className="bi bi-clock"></i> {data.duration}
            </span>
            <span>
              <i className="bi bi-calendar"></i> {data.season}
            </span>
          </div>
          <div className="card-footer">
            <div className="price">₹ {data.price.toLocaleString()}</div>
            <div className="rating">
              {"★".repeat(5)}{" "}
              <span className="review-count">({data.reviewCount})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TravelGrid = () => {
  return (
    <div className="container-fluid py-4">
      <div className="row g-4">
        {travelExperiences?.map((experience) => (
          <div
            key={experience.id}
            className="col-12 col-sm-6 col-lg-4 col-xl-3"
          >
            <TravelCard data={experience} />
          </div>
        ))}
      </div>
    </div>
  );
};

export const TravelCardMap = ({ title }) => {
  return (
    <>
      <style>
        {`
          .travel-card {
            height: 100%;
            cursor: pointer;
            transition: transform 0.3s ease;
          }
          
          .travel-card:hover {
            transform: translateY(-5px);
          }
          
          .card-background {
            height: 400px;
            border-radius: 15px;
            background-size: cover;
            background-position: center;
            position: relative;
            overflow: hidden;
          }
          
          .card-background::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%);
          }
          
          .best-seller-badge {
            position: absolute;
            top: 15px;
            left: 15px;
            background-color: #007bff;
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 12px;
            z-index: 1;
          }
          
          .card-content {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 20px;
            color: white;
          }
          
          .card-title {
            font-size: 1.25rem;
            font-weight: bold;
            margin-bottom: 10px;
            line-height: 1.3;
          }
          
          .location-badge {
            display: inline-block;
            background-color: rgba(255, 255, 255, 0.2);
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 12px;
            margin-bottom: 10px;
          }
          
          .trip-details {
            display: flex;
            gap: 15px;
            font-size: 14px;
            margin-bottom: 10px;
          }
          
          .card-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          
          .price {
            font-size: 20px;
            font-weight: bold;
          }
          
          .rating {
            color: #FFD700;
            font-size: 14px;
          }
          
          .review-count {
            color: white;
            font-size: 12px;
          }
          
          @media (max-width: 576px) {
            .card-background {
              height: 300px;
            }
            
            .card-title {
              font-size: 1.1rem;
            }
            
            .price {
              font-size: 18px;
            }
            
            .trip-details {
              font-size: 12px;
              gap: 10px;
            }
          }
          
          @media (min-width: 577px) and (max-width: 991px) {
            .card-background {
              height: 350px;
            }
          }
        `}
      </style>
      <Container className="mt-4rem">
        <h4
          style={{
            marginTop: "2rem",
            marginBottom: "-0.7rem",
            marginLeft: "1rem",
          }}
        >
          {title}
        </h4>
        <TravelGrid />
      </Container>
    </>
  );
};
