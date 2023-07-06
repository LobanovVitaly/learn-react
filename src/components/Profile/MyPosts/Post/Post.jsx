import s from './Post.module.css';

const Post = (props) =>{
	return (
		 <div className={s.item}>
		 	<img src="https://faunistics.com/wp-content/uploads/2021/01/4.jpg" alt="" />
          	{props.message}
          	<div>Like: {props.likesCount}</div>
        </div>
	);
}

export default Post;