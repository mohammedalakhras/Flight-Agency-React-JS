import React, { useState } from "react";
import classes from "./discover.module.css";
//import './discover.css';
import Header from "../Header";
//Plane Icon
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

//menu
import { Select, MenuItem } from "@mui/material";

// DatePiker

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
//Button
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

import { useLoaderData } from "react-router-dom";
import img from "./a.jpg";
var fromCity;
var toCity;
var fromDate;
var toDate;

export default function Discover(props) {
  const [selectedItem1, setSelectedItem1] = useState(1);
  const [selectedItem2, setSelectedItem2] = useState(1);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  function submit(e) {
    // e.preventDefault(event);
    const data = {};
    data["from_cite_id"] = toCity;
    data["to_cite_id"] = fromCity;
    data["from_date"] = fromDate;
    data["to_date"] = toDate;
    // fetch('', {
    //   method: 'post',
    //   headers: { 'content-type': 'appliction/json' },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => props.setData(data))
    //   .catch((err) => console.log(err));
    //   console.log(data);
    props.setData({ data: {} });
    props.state(false);
  }

  const handleSelectChange1 = (event) => {
    setSelectedItem1(event.target.value);
    fromCity = event.target.value - 2;
    console.log(`Selected item: ${fromCity}`);
  };

  const handleSelectChange2 = (event) => {
    setSelectedItem2(event.target.value);
    toCity = event.target.value - 2;
    console.log(`Selected item: ${toCity}`);
  };

  //date
  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
    fromDate = date;
    console.log(`Selected date: ${fromDate}`);
  };

  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
    toDate = date;

    console.log(`Selected date: ${toDate}`);
  };

  const data = useLoaderData();
  return (
    <div className={classes.container}>
      <Header />

      <div className={classes.content}>
        <h2 id="text1" style={{ marginright: "2%", marginleft: "5%" }}>
          أحجز رحلتك مع أفضل شركة طيران
        </h2>
        <h6 id="text2" style={{ marginright: "5%", marginleft: "5%" }}>
          أبحث , قارن , و أختر أفضل عروض الطيران
        </h6>
      </div>

      <form className={classes.Search} onSubmit={submit}>
        <div className={classes.fromto}>
          <Select
            value={selectedItem1}
            onChange={handleSelectChange1}
            defaultValue="1"
            className={classes.citySelect}
            sx={{
              direction: "rtl",
              backgroundColor: "lightgray",
              color: "gray"
            }}
          >
            <MenuItem disabled value="1" selected hidden>
              <AirplanemodeActiveIcon /> محطة المغادرة
            </MenuItem>
            {data.data.map((e) => {
              return (
                <MenuItem key={e.id} value={e.id + 2}>
                  {" "}
                  {e.city}{" "}
                </MenuItem>
              );
            })}
          </Select>

          <Select
            value={selectedItem2}
            onChange={handleSelectChange2}
            defaultValue="1"
            className={classes.citySelect}
            sx={{
              direction: "rtl",
              backgroundColor: "lightgray",
              color: "gray"
            }}
          >
            <MenuItem disabled value="1" selected hidden>
              <AirplanemodeActiveIcon sx={{ transform: "rotate(180deg)" }} />{" "}
              محطة الوصول
            </MenuItem>
            {data.data.map((e) => {
              return (
                <MenuItem key={e.id} value={e.id + 2}>
                  {" "}
                  {e.city}{" "}
                </MenuItem>
              );
            })}
          </Select>
        </div>

        <div className={classes.dateselect}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className={classes.singledateselect}>
              <DatePicker
                value={selectedDate1}
                onChange={handleDateChange1}
                label="من تاريخ"
                sx={{
                  direction: "ltr",
                  backgroundColor: "lightgray",
                  color: "gray",
                  width: "290px",
                  borderRadius: "5px",
                  margin: "0 9% 0 9%"
                }}
              />
            </div>
            <div className={classes.singledateselect}>
              <DatePicker
                value={selectedDate2}
                onChange={handleDateChange2}
                label="الى تاريخ"
                sx={{
                  direction: "ltr",
                  backgroundColor: "lightgray",
                  color: "gray",
                  width: "290px",
                  borderRadius: "5px",
                  margin: "0 9% 0 9%"
                }}
              />
            </div>
          </LocalizationProvider>
        </div>
        <div className={classes.Butt}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#EB5A5A",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
            onClick={() => {}}
          >
            <p align="center">
              <SearchIcon fontSize="large" />
              <br />
            </p>
            <p align="center"> ابحث عن رحلات </p>
          </Button>
        </div>
      </form>
    </div>
  );
}
