import { React, useEffect, useState } from 'react';
import classes from './items.module.css';
import Item from './Item'
import { useSelector, useDispatch } from 'react-redux';
 
import { fetchPosts, deletePost, editPost } from '../../redux/index'
function ListItems() {
    let dispatch = useDispatch()

    const { posts, loading } = useSelector((state) => state.postSlice);

    const [upDataPost,setUpDataPost]= useState(false);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const [isId, setId] = useState(null);

   // edit input data 
    const [editData, setEditData] = useState({
        editTitle: '',
        editDescription: ''
    })

    // delete items
    const handelDeletePost = (id) => {
        dispatch(deletePost(id))
    }

    //  edit items
    const handelEditPost = (id, title,discrption) => {
        setId(id)
        setEditData({
            editTitle: title,
            editDescription: discrption,
        });
        setUpDataPost(true)
    }

    // up data items
    const handelupdatePosts = (id, editTitle,editDescription ) => {
        dispatch(editPost({id, editTitle,editDescription}));
        console.log(id,editTitle, editDescription)
         setUpDataPost(false)
    }

    // const LOCALSTORGE_KEY = "add items to localStorage";

    // useEffect(() => {
    //     const storgeScore = JSON.parse(localStorage.getItem(LOCALSTORGE_KEY));
    //     if (storgeScore) {
    //         return storgeScore
    //     }
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem(LOCALSTORGE_KEY, JSON.stringify(posts));
    // }, [posts]);

    return (
        <div className={classes.items}>

            {
                loading ? (<p className={classes.items_loading}>Loading...</p>) :

                    posts.length > 0 ? posts.map((post) => (

                        <div key={post.id} >

                            <Item
                                post={post}
                                loading={loading}
                                handelDeletePost={handelDeletePost}
                                handelEditPost={handelEditPost}
                                handelupdatePosts={handelupdatePosts}
                                editData={editData}
                                setEditData={setEditData}
                                isId={isId}
                                upDataPost={upDataPost}
                            />

                        </div>
                    )) : (<p style={{ color: 'black' }}>sorry, there is not posts  </p>)}
        </div>
    );
}

export default ListItems;
