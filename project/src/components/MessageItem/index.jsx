import React from "react";
import styles from './MessageItem.module.css'
import {useDispatch, useSelector} from "react-redux";
import {readPost} from "../../redux/slices/postSlice";




const MessageItem = ({createdAt, name, avatar, post, read, id}) => {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()
    const postRead =() => {
        const postItem = {
            id,
            read,
            post,
            avatar,
            name,
            createdAt
        }
        dispatch(readPost(postItem))
    }


    return (
        <>
            {
                read ? (<div classes={styles.wrapper }>
                    <div className={styles.wrapper__left}>
                        <img className={styles.avatar} src={avatar} />
                    </div>
                    <div onClick={()=>setOpen((!open))} className={styles.wrapper__right}>
                        <p className={styles.text}><span className={styles.name}>{name}</span> {post} </p>
                        <p className={styles.time}>{createdAt} </p>
                        {
                            open ? <textarea className={styles.textArea}></textarea> : ''
                        }
                    </div>
                </div>) :
                    ((<div onClick={postRead} className={styles.wrapper}>
                        <div className={styles.wrapper__left}>
                            <img className={styles.avatar} src={avatar} />
                        </div>
                        <div onClick={()=>setOpen((!open))} className={styles.wrapper__right}>
                            <div className={styles.circle}></div>
                            <p className={styles.text}><span className={styles.name}>{name}</span> {post} </p>
                            <p className={styles.time}>{createdAt} </p>
                            {
                                open ? <textarea className={styles.textArea}></textarea> : ''
                            }
                        </div>
                    </div>) )
            }

        </>
    );
};

export default MessageItem;
