
export function Comment(props){
    return(
        <div className="comment">
        <a className="avatar" herf='#f'>
            <img src={props.img} alt='img'/>
        </a>
<div className="content">
    <a className="author" herf='#d' >{props.author}</a>
    <div className="metadata" >
        <span className="date">{props.date}</span>
    </div>
    <div className="text">
        {props.text}
    </div>
</div>


        </div>
    );
}