import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getFeedsAPI } from "../store/feed/feed.actions";

const Home = () => {
  const disptch = useDispatch()
  const {data,getFeeds}=useSelector(()=>state.feed)

  useEffect(()=>{
    if(data.lenght===0){
    disptch(getFeedsAPI())}
  },[])
  const [feeds, setFeeds] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/feeds").then((r) => {
      setFeeds(r.data);
    });
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <br />

      {getFeeds.loading&&<div>Loading...</div>}
      {getFeeds.error&&<div>Loading...</div>}
      {!getFeeds.loading&&
      data.map((feed) => (
        <div
          key={feed.id}
          style={{
            padding: "10px",
            margin: "auto",
            marginTop: "10px",
            border: "1px solid grey",
            maxWidth: "200px",
          }}
        >
          <div>{feed.title}</div>
          <div>{feed.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
