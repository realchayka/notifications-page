import React from "react";
import styles from './MessageItem.module.css'




const MessageItem = ({createdAt, name, avatar, post, read}) => {
    const [open, setOpen] = React.useState(false);

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
                    ((<div className={styles.wrapper}>
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
