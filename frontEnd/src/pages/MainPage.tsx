import Popup from "../components/Popup/Popup";
import Ticket from "../components/Ticket/Ticket";
export default () => {
  return (
    <div style={{ zIndex: -10 }}>
      <h1
        style={{
          margin: "100px",
          textAlign: "center",
          fontSize: "55px",
        }}
      >
        Buy Tickets
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "50px",
        }}
      >
        {[0, 0, 0].map(() => (
          <Ticket />
        ))}
      </div>
    </div>
  );
};
