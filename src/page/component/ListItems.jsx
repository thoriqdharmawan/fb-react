import React, { useEffect, useState } from "react";
import firebase from "../../fbConfig";

const useTimes = () => {
  const [times, setTImes] = useState(null);
  useEffect(() => {
    firebase
      .firestore()
      .collection("times")
      // .orderBy("title", "desc")
      .onSnapshot(snapshot => {
        console.log(snapshot.docs[0].data().title);
        const newTImes = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTImes(newTImes);
      });
  }, []);

  return times;
};

export default function ListItems({ setTitle, setTime, setId }) {
  const times = useTimes();

  const handleClickData = (e, data) => {
    e.stopPropagation();
    firebase
      .firestore()
      .collection("times")
      .doc(data.id)
      .delete()
      .then(function() {
        console.log("Document successfully deleted!");
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
  };

  const setClick = data => {
    setId(data.id);
    setTitle(data.title);
    setTime(data.time_seconds);
  };

  return (
    <div
      style={{
        backgroundColor: "grey",
        padding: "10px 20px",
        width: "inherit",
        borderRadius: "5px"
      }}
    >
      {times &&
        times.map(res => {
          return (
            <div
              onClick={() => setClick(res)}
              key={res.id}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <p style={{ color: "#fff", cursor: "pointer" }}>{res.title}</p>
              <div
                style={{
                  color: "#fff",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <p>{res.time_seconds}</p>
                <div
                  style={{
                    marginLeft: 10,
                    cursor: "pointer",
                    backgroundColor: "yellow",
                    padding: 5,
                    color: "red",
                    borderRadius: 5
                  }}
                  onClick={e => handleClickData(e, res)}
                >
                  DELETE
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
