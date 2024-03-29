import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css'
import Card from '../../modules/Card/card';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const [posts,setPosts] = useState([])
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate('/post')
    }
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/posts-retrieve');

                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <>
        <button onClick={handleClick}>Add a post</button>
        <div className='post-container'>
            <div className='posts'>
                {posts.map(post => (
                    <Card key={post.id} id={post.id} photo={'/python3.12.png'} category = {post.category} title={post.title} date={post.date} likes={post.likes} bookmarks={post.bookmarks} liked = {post.liked} bookmarked={post.bookmarked}/>
                ))}
            </div>
        </div>
        </>
    );
}
