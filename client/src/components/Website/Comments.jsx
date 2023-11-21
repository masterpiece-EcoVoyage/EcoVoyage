import React, { useEffect, useState } from "react";
import axios from "axios";

const Comments = (id) => {
  // console.log(id)
  const [comments, setComments] = useState([]);
  const [endpoint, setEndpoint] = useState(``);
  const [addEndpoint, setAddEndpoint] = useState(``);
  const [formattedComments, setFormattedComments] = useState({
    formattedDate: "",
    formattedTime: "",
  });
  const [formData, setFormData] = useState({
    comment_text: "",
  });
  const convertTimestampToDateTime = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return {
      formattedDate: `${day}/${month}/${year}`,
      formattedTime: `${hours}:${minutes}`,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id.type === "Accommodations") {
        setFormData({
          ...formData,
          accommodation_id: id.id,
        })
        axios.post(`http://localhost:3999/addComment`, formData)
      .then((response)=>{
        setFormData({
          comment_text:"",
        })
      })

      } else if (id.type === "Packages") {
        setFormData({
          ...formData,
          packages_id: id.id,
        })
        axios.post(`http://localhost:3999/addCommentPac`, formData)
      .then((response)=>{
        setFormData({
          comment_text:"",
        })
      })
      } else if (id.type === "Activities") {
        axios.post(`http://localhost:3999/addCommentPac`, formData)
      .then((response)=>{
        setFormData({
          comment_text:"",
        })
      })
      }
  };

  useEffect(() => {
    if (id.type === "Accommodations") {
      setEndpoint("getAccommodationsWithComments");
    } else if (id.type === "Packages") {
      setEndpoint("getPackagesWithComments");
    } else if (id.type === "Activities") {
      setEndpoint("getActivitiesWithComments");
    }
    axios
      .get(`http://localhost:3999/${endpoint}/${id.id}`)
      .then((response) => {
        // Handle the response data here
        setComments(response.data);
        const formattedData = response.data.map((comment) =>
          convertTimestampToDateTime(comment.comment_timestamp)
        );
        setFormattedComments(formattedData);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }, [id]);
  //   console.log(comments);

  return (
    <div>
      <div>
        <h1 className="text-sky-700 text-start text-3xl font-bold">Reviews</h1>
        <div className="p-5">
          {comments.map((comment, index) => (
            <div className="p-5 border border-sky-700 rounded-xl my-3 w-3xl">
              <div className="flex gap-4 flex-wrap">
                <h5 className="text-start text-xl font-bold">
                  {comment.first_name}
                </h5>
                <h5 className="text-start text-xl font-bold pb-2">
                  {comment.last_name}
                </h5>
              </div>
              {/* {convertTimestampToDateTime(comment.comment_timestamp)} */}
              <p className="text-lg text-start text-gray-500 pb-5">
                {formattedComments[index].formattedDate} at{" "}
                {formattedComments[index].formattedTime}
              </p>
              <p className="text-lg text-start text-black pb-5">
                {comment.comment_text}
              </p>
            </div>
          ))}
        </div>
        <div className="p-5">
          <form action="" className="p-5 text-start" onSubmit={handleSubmit}>
            <label className="px-3 self-start">Add your comment</label>
            <textarea
              id="comment"
              value={formData.comment_text}
              onChange={(e) =>
                setFormData({comment_text:e.target.value})
              }
              className="w-full mb-3 p-2 border border-sky-700 rounded-md"
            />
            <button
              type="submit"
              className="py-3 w-64 text-xl text-white hover:text-sky-900 bg-sky-900 border-2 hover:bg-white border-sky-900 rounded-2xl"
            >
              Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Comments;