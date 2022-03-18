import { React } from 'react';
import classes from './items.module.css';

function Item({
    post,
    handelEditPost,
    handelDeletePost,
    editData,
    setEditData,
    handelupdatePosts,
    isId,
    upDataPost

}) {

    const handelOnChange = ({ target }) => {
        let values = { ...editData }
        values[target.id] = target.value
        setEditData(values)
    }

    const items = (
        <div className={classes.c} key={post.id}>
            <h3>{post.title}</h3>
            <div className={classes.body}>
                <p>{post.description} </p>
                <div className={classes.buttons}>

                    <button
                        className={classes.edit}
                        onClick={
                            () => handelEditPost(
                                post.id,
                                post.title,
                                post.description
                            )} >edit</button>

                    <button
                        className={classes.delete}
                        onClick={() => handelDeletePost(post.id)}
                    >Delete
                    </button>

                </div>
            </div>

            {
                upDataPost && isId === post.id &&
                <div className={classes.items_edit}>

                    <input
                        type='text'
                        id='editTitle'
                        placeholder='edit title'
                        onChange={(e) => handelOnChange(e)}
                        value={editData.editTitle}
                    />

                    <input
                        type='text'
                        id='editDescription'
                        placeholder='edit post'
                        onChange={(e) => handelOnChange(e)}
                        value={editData.editDescription}
                    />

                    <button className={classes.edit}
                        onClick={() => handelupdatePosts(
                                post.id,
                                editData.editTitle,
                                editData.editDescription,
                         )}>
                        upDate
                    </button>
                </div>
            }
        </div>
    )
    return <div>
        {items}

    </div>;
}

export default Item;
