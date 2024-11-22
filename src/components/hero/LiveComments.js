import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LiveComments.css'; // Optional: For custom styling

const LiveComments = () => {
  const [comments, setComments] = useState([]); // State to store the fetched comments

  // Fetch comments from the backend
  useEffect(() => {
    const fetchComments = async () => {
      try {
        // Make sure this URL points to your backend API
        const response = await axios.get('http://localhost:5000/api/feedback'); // Change to your live API URL if needed
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="comments-container">
      {comments.length === 0 ? (
        <p>Loading comments...</p>
      ) : (
        // Display comments in a grid where two comments are in each row
        <div className="comments-grid">
          {comments.map((comment) => (
            <div key={comment._id} className="comment-box">
              <h3>{comment.username}</h3>
              <p>{comment.comments}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LiveComments;
