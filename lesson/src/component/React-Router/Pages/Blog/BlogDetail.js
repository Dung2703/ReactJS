/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import GoBackButton from "../../../GobackButton";

function BlogDetail() {
    const params = useParams();
    const [post, setPost] = useState();
    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setPost(data);
            })
    }, []);
    console.log(post);

    return (
        <>
            <GoBackButton />
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </>
            )}
        </>
    )
}

export default BlogDetail;