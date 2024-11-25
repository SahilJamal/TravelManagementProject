import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CiBookmark, CiHeart } from "react-icons/ci";
import { FiMessageCircle } from "react-icons/fi";
import { IoShareOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const InstagramPosts = () => {
  // Sample data - replace with your actual data source
  const posts = [
    {
      id: 1,
      profileImage:
        "https://parade.com/.image/c_limit,cs_srgb,fl_progressive,q_auto:good,w_700/MTkwNTc2MDAxNjMzMDM1Mzg5/travel-instagram-captions.jpg",
      username: "Trippy India",
      followers: "223K",
      image:
        "https://wanderlustcrew.com/wp-content/uploads/2019/06/NYC-with-Kids-Staten-Island-Ferry-2.jpg",
      likes: 356,
      title: "Why a LEH-LEH trip is an ideal choice?",
      location: "Leh Ladakh - The Land of High Passes",
    },
    {
      id: 2,
      profileImage:
        "https://parade.com/.image/c_limit,cs_srgb,fl_progressive,q_auto:good,w_700/MTkwNTc2MDAxNjMzMDM1Mzg5/travel-instagram-captions.jpg",
      username: "Trippy India",
      followers: "223K",
      image:
        "https://wanderlustcrew.com/wp-content/uploads/2019/06/NYC-with-Kids-Staten-Island-Ferry-2.jpg",
      likes: 192,
      title: "Beyond Fears Into the Wild",
      subtitle: "Giving tips and tricks for women travelers",
    },
    {
      id: 3,
      profileImage:
        "https://parade.com/.image/c_limit,cs_srgb,fl_progressive,q_auto:good,w_700/MTkwNTc2MDAxNjMzMDM1Mzg5/travel-instagram-captions.jpg",
      username: "Trippy India",
      followers: "223K",
      image:
        "https://wanderlustcrew.com/wp-content/uploads/2019/06/NYC-with-Kids-Staten-Island-Ferry-2.jpg",
      likes: 549,
      title: "A Girl's Ticket to Paradise!",
      subtitle: "Decoding all girls trips",
    },
  ];

  return (
    <Container className="mt-2rem">
      <Row className="g-4">
        {posts.map((post) => (
          <Col key={post.id} xs={12} md={4}>
            <div className="instagram-post">
              <div className="post-header">
                <div className="profile-info">
                  <img
                    src={post.profileImage}
                    alt={post.username}
                    className="profile-image"
                  />
                  <div className="username-container">
                    <span className="username">{post.username}</span>
                    <span className="followers">
                      {post.followers} followers
                    </span>
                  </div>
                </div>
                <button className="view-profile-btn">View profile</button>
              </div>

              <div className="post-image-container">
                <img src={post.image} alt={post.title} className="post-image" />
              </div>

              <div className="post-actions">
                <div className="action-buttons">
                  <CiHeart className="action-icon" />
                  <FiMessageCircle className="action-icon" />
                  <IoShareOutline className="action-icon" />
                </div>
                <CiBookmark className="action-icon" />
              </div>

              <div className="post-details">
                <div className="likes">{post.likes} likes</div>
                <Link to={"/"} className="view-more">
                  View more on Instagram
                </Link>
                <div className="add-comment">Add a comment...</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default InstagramPosts;
