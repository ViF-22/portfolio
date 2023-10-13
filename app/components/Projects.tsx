"use client";

import { client } from "../../sanity/lib/client";
import ScrollProject from "./ui/ScrollProject";

import React, { useState, useEffect } from "react";
// import HorizontalScrollComponent from '../components/HorizontalScrollComponent';

const Projects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data asynchronously using an async function
    async function fetchData() {
      const query = `*[_type == "post"]`;
      try {
        const data = await client.fetch(query);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <ScrollProject data={data} />
    </div>
  );
};

export default Projects;
