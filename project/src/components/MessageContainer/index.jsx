import React, {useEffect, useState} from "react";
import MessageItem from "../MessageItem";
import styles from './MessageContainer.module.css'
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts, readPost} from "../../redux/slices/postSlice";



const MessageContainer = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.posts.posts);
    const totalCount = items.length;
    const readCount = useSelector(state => state.posts.readPostsCount)
    const handleReadPost = (id) => {
        dispatch(readPost(id))
    }
   useEffect(() => {
       dispatch(fetchPosts());
   }, [dispatch, handleReadPost])


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
           <p className={styles.link}>Mark all as read</p>
           {
               items.map((obj, i) => <MessageItem onClick={id => handleReadPost(id)} {...obj} key={i}/>)
           }
       </div>
    );
};




export default MessageContainer;
