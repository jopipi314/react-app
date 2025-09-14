// src/components/ProfileCard.jsx
import PropTypes from "prop-types";

const ProfileCard = ({ name, major, interests = [], avatarUrl = "" }) => {
  return (
    <section className="card">
      <img
        src={avatarUrl || "/default-avatar.png"}
        alt={`${name}의 아바타`}
        className="avatar"
      />
      <h2>{name}</h2>
      <p>전공: {major}</p>
      <ul>
        {interests.map((interest, idx) => (
          <li key={idx}>{interest}</li>
        ))}
      </ul>
    </section>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  interests: PropTypes.arrayOf(PropTypes.string),
  avatarUrl: PropTypes.string,
};

export default ProfileCard;
