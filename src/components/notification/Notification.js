import PropTypes from "prop-types";

function Notification({ message }) {
  return <p>{message}</p>;
}
Notification.protoType = {
  message: PropTypes.string,
};
export default Notification;
