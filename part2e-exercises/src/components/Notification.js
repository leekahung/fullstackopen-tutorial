const Notification = ({ notification }) => {
  const notificationStyles = {
    general: {
      backgroundColor: "lightgrey",
      padding: "10px",
      fontSize: "20px",
      marginBottom: "16px",
      borderRadius: "10px",
    },
    notification: {
      color: "green",
      border: "3px solid green",
    },
    error: {
      color: "red",
      border: "3px solid red",
    },
  };

  const errorMessageStyle = {
    ...notificationStyles.general,
    ...notificationStyles.error,
  };

  const notificationStyle = {
    ...notificationStyles.general,
    ...notificationStyles.notification,
  };

  return notification === "" ? null : notification.includes("removed") ? (
    <div style={errorMessageStyle}>{notification}</div>
  ) : (
    <div style={notificationStyle}>{notification}</div>
  );
};

export default Notification;
