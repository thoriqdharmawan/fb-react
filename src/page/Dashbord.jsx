import React, { useState } from "react";
import ListItems from "./component/ListItems";
import InputField from "./component/InputField";

export default function Dashbord() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [id, setId] = useState(null);

  return (
    <div
      style={{
        width: 400,
        height: "auto",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <h3>Hello Thoriq</h3>
      <ListItems setTitle={setTitle} setTime={setTime} setId={setId} />
      <InputField
        setId={setId}
        id={id}
        title={title}
        time={time}
        setTitle={setTitle}
        setTime={setTime}
      />
    </div>
  );
}
