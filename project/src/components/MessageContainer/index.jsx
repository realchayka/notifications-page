import React, {useEffect} from "react";
import MessageItem from "../MessageItem";
import styles from './MessageContainer.module.css'
import {useDispatch, useSelector} from "react-redux";
import {clearPosts, fetchPosts} from "../../redux/slices/postSlice";



const MessageContainer = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.posts.posts);
    const totalCount = items.length;
    const readCount = useSelector(state => state.posts.readPostsCount)
    const clearItems = () => {
        dispatch(clearPosts())
    }
   useEffect(() => {
       dispatch(fetchPosts());
   }, [dispatch])


    return (
       <div className={styles.wrapper}>
           <div className={styles.wrapperTitle}>
               Notifications <span className={styles.wrapperMessage}>
                    {totalCount}
                </span>
               <span className={styles.wrapperRead}> Read </span> <span className={styles.wrapperMessage}>
                    {readCount.length}
                </span>
           </div>
           <p onClick={clearItems} className={styles.link}>Mark all as read</p>
           {
               items.map((obj) => <MessageItem {...obj} key={obj.id}/>)
           }
       </div>
    );
};




export default MessageContainer;
