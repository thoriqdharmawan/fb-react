import React from "react";
import firebase from "../../fbConfig";

export default function InputField({
  title,
  setTitle,
  time,
  setTime,
  id,
  setId
}) {
  const handleChangeNumber = e => {
    setTime(e.target.value);
  };

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = () => {
    if (title !== "" && time !== "") {
      firebase
        .firestore()
        .collection("times")
        .add({
          title,
          time_seconds: time
        });
    }
    setTime("");
    setTitle("");
  };

  const handleUpdate = () => {
    firebase
      .firestore()
      .collection("times")
      .doc(id)
      .update({
        title,
        time_seconds: time
      });

    setTime("");
    setTitle("");
    setId(null);
  };

  const handleCancel = () => {
    setTime("");
    setTitle("");
    setId(null);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 400,
        backgroundColor: "#fc6c85",
        padding: "0px 50px 20px 50px",
        boxSizing: "border-box",
        borderRadius: "5px"
      }}
    >
      <p>Title: </p>
      <input type="text" value={title} onChange={handleChange} />
      <p>time: </p>
      <input type="number" value={time} onChange={handleChangeNumber} />
      {id !== null ? (
        <>
          <button style={{ marginTop: 10 }} onClick={handleUpdate}>
            Update
          </button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <button style={{ marginTop: 10 }} onClick={handleSubmit}>
          Kirim
        </button>
      )}
    </div>
  );
}
