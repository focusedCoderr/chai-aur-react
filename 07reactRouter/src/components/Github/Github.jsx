import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/focusedcoderr")
  //       .then((res) => res.json())
  //       .then((res) => setData(res));
  //   }, []);

  const data = useLoaderData();

  return (
    <>
      <div className="bg-gray-700 text-center p-4 text-white text-3xl m-4">
        Github followers: {data.followers}
      </div>
      <img src={data.avatar_url} alt="Git picture" width="300" />
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/focusedcoderr");
  return response.json();
};
