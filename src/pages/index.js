import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast?q=Jakarta&appid=d3ef5d764c282e9ddf8a824c491d7f7f"
      );
      console.log(res.data.list);
      setData(res.data.list);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data.slice(14));
  console.log(data.slice(7));

  const handleDate = (a) => {
    // a.replace(/ 00:00:00/g, "");
    const event = new Date(a.replace(/ 00:00:00/g, ""));
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return event.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <h1>Weather Forecast:</h1>
      {data.slice(7, 8).map((item) => (
        <p key={item.dt}>
          <h2>
            {handleDate(item.dt_txt)}: {item.main.temp} ℃
          </h2>
        </p>
      ))}
      {data.slice(15, 16).map((item) => (
        <p key={item.dt}>
          <h2>
            {handleDate(item.dt_txt)}: {item.main.temp} ℃
          </h2>{" "}
        </p>
      ))}
      {data.slice(23, 24).map((item) => (
        <p key={item.dt}>
          <h2>
            {handleDate(item.dt_txt)}: {item.main.temp} ℃
          </h2>{" "}
        </p>
      ))}
      {data.slice(31, 32).map((item) => (
        <p key={item.dt}>
          <h2>
            {handleDate(item.dt_txt)}: {item.main.temp} ℃
          </h2>{" "}
        </p>
      ))}
      {data.slice(39, 40).map((item) => (
        <p key={item.dt}>
          <h2>
            {handleDate(item.dt_txt)}: {item.main.temp} ℃
          </h2>{" "}
        </p>
      ))}
    </>
  );
}
