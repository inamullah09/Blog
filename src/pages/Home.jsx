import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const posts = [
    {
      id: 1,
      title: 'Post 1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere erat a ante venenatis dapibus posuere velit aliquet.',
      img: 'https://source.unsplash.com/random'
    },
    {
      id: 2,
      title: 'Post 2',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere erat a ante venenatis dapibus posuere velit aliquet.',
      img: 'https://source.unsplash.com/random'
    },
    {
      id: 3,
      title: 'Post 3',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere erat a ante venenatis dapibus posuere velit aliquet.',
      img: 'https://source.unsplash.com/random'
    },
    {
      id: 4,
      title: 'Post 4',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere erat a ante venenatis dapibus posuere velit aliquet.',
      img: 'https://source.unsplash.com/random'
    }
  ]
  return (
    <div className='container'>
      {posts.map( post => {
        return (
          <div key={post.id} className='row g-5 my-5'>
            <div className='post-content col-md-7'>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              <Link to={'Post/'+post.id}>
              <button className="btn btn-primary">Read More</button>              
              </Link>
            </div>
            <img src={post.img} alt={post.title} className='post-image col-md-5'/>
          </div>
        )
      })}
    </div>
  )
}

export default Home