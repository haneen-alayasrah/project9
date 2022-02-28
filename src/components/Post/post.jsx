import React from "react";
import "./style.css";

function Post({ post, index, removePost }) {

  const [comment, setComment] = React.useState(""
  );
    const handleSubmit = e => {
        e.preventDefault();
      
         localStorage.setItem('comment', JSON.stringify(comment))
      

        if (!comment) return;
        addComment(comment);
        setComment("");
    
 
       
      };
      const addComment = text => {
        const newcomments = [...comment, { text }];
    
        setComment(newcomments);
    
      };
      const commentlist = JSON.parse(localStorage.getItem('comment'))
      const titlelist = JSON.parse(localStorage.getItem('Title'))

  return (
    <article className="post__card-2">
    <div className="post__card_-2">
    <div
    className="post__card__image-2"
    style={{
        backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/7c8a1e90624231.5e997520e9b9b.jpg")`
    }}
    ></div>
      <div>
    <div className="post__card_meta-2">
    <div>
    <button className="post__card_cat" onClick={() => removePost(index)}>Delete Post</button>
    </div>
         <p className="post__card_title-2">{titlelist}</p>
    <p className="post__card_alttitle-2">
    {post.text}
    </p>

      </div>
         </div>
         <form onSubmit={handleSubmit}>
     <div className="form-group mt-3">
     <label>Comment</label>
      <input
        type="text"
        className="form-control"
        name="comment" 
       onChange={e => setComment(e.target.value)}
      />
      </div>
      <button type="submit"  className="btn btn-dark mt-2 btn-block">
        Comment
        </button>

    </form>

    <p className="post__card_title-2 mt-4">Commemts: {commentlist}</p>
  </div>
    </article>
  );
}

function PostForm({ addPost }) {
  const [value, setValue] = React.useState("");
  const [title, setTitle] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addPost(value);
    setValue("");

    if (!title) return;
    addPost(title);
    setTitle("");

    localStorage.setItem(
        "Post",
        JSON.stringify(value)
      );
      localStorage.setItem(
        "Title",
        JSON.stringify(title)
      );

  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      <h3>Add Post</h3>
     <div className="form-group">
     <label>Title</label>
      <input
        type="text"
        className="form-control"
        name="title" 
        value={title}

       onChange={e => setTitle(e.target.value)}
      />
        <label>Post</label>
        <input
        type="text"
        className="form-control"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      </div>
      <button type="submit"  className="btn btn-dark btn-lg btn-block mt-4">
        Post
        </button>

    </form>
    </div>
  );
}

function App() {
  const [posts, setposts] = React.useState([]);
  const [titles, settitles] = React.useState([]);


  const addPost = text => {
    const newposts = [...posts, { text }];
    const newtitles = [...titles, { text }];

    setposts(newposts);
    settitles(newtitles);

  };


  const removePost = index => {
    const newposts = [...posts];
    newposts.splice(index, 1);
    setposts(newposts);
  };

  return (
      
    <div className="container pt-3">
    <div className="row">

        {posts.map((post, index) => (
          <Post
            key={index}
            index={index}
            post={post}

            removePost={removePost}
          />
        ))}
        <PostForm addPost={addPost} />
      </div>
    </div>
  );
}

export default App;
