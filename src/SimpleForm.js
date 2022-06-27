import React from "react";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function SimpleForm() {
  // -------------------DATE------------------
  var [date, setDate] = useState(new Date());

  var date2 = date.toISOString();
  var date3 = date2.slice(0, 10);
  // console.log(date3)

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 10000);
    return function cleanup() {
      clearInterval(timer);
    };
  });
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = weekday[d.getDay()];

  const [hidden, setHidden] = useState(false);

  const change = () => {
    setHidden(!hidden);
  };

  // --------------------INPUT---------------
  const [table, setTable] = useState([]);
  const [display, setDisplay] = useState({
    name: "",
    id: "",
    fleg: "",
  });
  const handleChange = (e) => {
    setDisplay({
      ...display,
      id: Math.random(),
      fleg: false,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const checkEmptyInput = !Object.values(display).every((res) => res === "");
    if (checkEmptyInput) {
      setTable([...table, display]);
      const emptyInput = { name: "" };
      setDisplay(emptyInput);
    }
  };

  // -------------ONE ROW DELETE----------------
  const deleteTableRows = (index) => {
    const rows = [...table];
    rows.splice(index, 1);
    setTable(rows);
  };

  // -----------------REMOVE ALL---------------------
  const remove = () => {
    setTable([]);
  };

  const a = table.length;

  const changeValue = (id) => {
    let dummy = table.map((val) => {
      if (val.id === id) {
        return { ...val, fleg: !val.fleg };
      } else {
        return val;
      }
    });
    setTable(dummy);
  };

  const b = table;
  let dummy1 = b.filter((val) => {
    if (val.fleg === true) {
      return val;
    }
  });
  let count = dummy1.length;
  // console.log("true", count);

  let dummy2 = table.filter((val) => {
    if (val.fleg === false) {
      return val;
    }
  });

  let count1 = dummy2.length;
  // console.log("false", count1);

  let mark = (count / a) * 100;

  let num = mark;
  let text = num.toString();
  var percentage = text.slice(0, 5);

  return (
    <div className="main">
      <div className="box">
        <div className="up">
          <div className="date">{day}</div>
          <div className="date">{date3}</div>
          <br />
          <div style={{ backgroundColor: "#dedad9" }}>
            <form onSubmit={(e) => onSubmit(e)}>
              <input
                className="inputText"
                type="text"
                name="name"
                onChange={handleChange}
                value={display.name}
                placeholder="Take the garbage out"
              />
              <button className="btn1" type="submit">
                +
              </button>
            </form>
          </div>
          {count1 === 0 ? (
            <>
              <div className="center">
                <img className="todoimg" src="./image/rtodo.png" alt="" />
                <div className="chill">Time To Chill You Have No Todos</div>
              </div>
            </>
          ) : (
            <p
              className="item"
              style={{ backgroundColor: "#dedad9", fontSize: "12px" }}
            >
              you have {count1} pending item
            </p>
          )}

          <div className="scrollbar">
            {table.map((data, index) => {
              if (data.fleg === false)
                return (
                  <>
                    <div>
                      <div className="fixbutton">
                        <div className="bg" style={{ display: "flex" }}>
                          <input
                            type="checkbox"
                            onChange={() => changeValue(data.id)}
                          />
                          <div className="bg">{data.name}</div>
                          <div className="setbtnrigth">
                            <button
                              className="btn btn-outline-danger"
                              onClick={() => deleteTableRows(index)}
                            >
                              <img
                                className="img"
                                src="./image/delete1.png"
                                alt=""
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
            })}
          </div>
          <div className="disable">
            {hidden ? (
              <div></div>
            ) : count === 0 ? (
              <div></div>
            ) : (
              <div style={{ fontSize: "12px" }}>
                complated task:{percentage}%
              </div>
            )}
            <div className="scrollbar">
              {table.map((data, index) => {
                if (data.fleg === true)
                  return (
                    <>
                      {!hidden && (
                        <div>
                          <div className="fixbutton">
                            <div className="bg" style={{ display: "flex" }}>
                              <input
                                type="checkbox"
                                checked={true}
                                onChange={() => changeValue(data.id)}
                              />
                              <div
                                className="bg"
                                style={{ textDecorationLine: "line-through" }}
                              >
                                {data.name}
                              </div>
                              <div className="setbtnrigth">
                                <button
                                  className="btn btn-outline-danger"
                                  onClick={() => deleteTableRows(index)}
                                >
                                  <img
                                    className="img"
                                    src="./image/delete1.png"
                                    alt=""
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  );
              })}
            </div>
          </div>
          <div className="line">
            {hidden ? (
              <div
                className="abc"
                onClick={() => {
                  setHidden(!hidden);
                }}
              >
                Show Complated
              </div>
            ) : count === 0 ? (
              <div></div>
            ) : (
              <div
                className="abc"
                onClick={() => {
                  setHidden(!hidden);
                }}
              >
                Hide Complated
              </div>
            )}

            {a === 0 ? (
              <div></div>
            ) : (
              <div className="abc" onClick={remove}>
                Clear All
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleForm;
