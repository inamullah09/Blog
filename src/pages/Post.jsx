import React from 'react'
import { Link } from 'react-router-dom'

function Post() {
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
        <div className="container">
            <div className="row g-5 mt-5">
                <div className="col-9">
                    <img src='https://source.unsplash.com/random' alt='img' className='post-detail-image' />
                    <div className="poster-details">
                        <div className="d-flex align-items-center my-4">
                            <img src='https://source.unsplash.com/random' alt='img' className='profile-image' />
                            <div className='mx-3'>
                                <h5>Inam</h5>
                                <p>Posted 2 days ago</p>
                            </div>
                            <div>
                                <button className="btn btn-sm btn-success">E</button>
                                <button className="btn btn-sm btn-danger ms-2">X</button>
                            </div>
                        </div>
                    </div>
                    <div className="post-content">
                        <h1>Post 4</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, necessitatibus! Eius nobis qui ex esse quae voluptatem aspernatur! Sint inventore nulla magnam quidem quis corrupti, est dignissimos deleniti, aut ad blanditiis rem magni, porro at! Earum unde necessitatibus, ad sequi voluptate iure ut debitis, repudiandae consectetur dolores nostrum rerum quas voluptatem. Earum illum, distinctio ea a ullam in cumque praesentium architecto officia possimus at tempora debitis nesciunt enim similique consequatur quisquam. Optio error itaque commodi atque, quae minus molestiae asperiores tempore vel laudantium, non eos voluptate? Eum magni dolorem quas corrupti totam ducimus quaerat fugit placeat labore nam voluptates, provident alias voluptate quisquam ad minima dolore aliquam distinctio praesentium officia veniam itaque! Soluta, sint? Non a recusandae tenetur, vero ad amet dignissimos cum totam cupiditate magnam, at eligendi, vitae natus atque earum explicabo nam quasi? Quam suscipit adipisci illum labore? Id ullam obcaecati ea possimus itaque aliquam doloribus repellendus. Reiciendis earum perspiciatis sit obcaecati reprehenderit est enim unde totam suscipit non dicta inventore quibusdam laborum debitis rem maiores, aperiam fugit. Quaerat eius, ab deleniti nemo ipsum provident enim adipisci blanditiis, illo minus illum voluptates aspernatur quas, exercitationem quam totam inventore saepe accusantium libero doloribus. In inventore saepe corrupti officia voluptas hic. Quam quos velit voluptatem dicta sapiente odit voluptatum autem distinctio doloribus inventore, nihil cum repellat delectus aliquam pariatur. Iste nulla enim sunt perferendis optio accusantium, placeat pariatur ad neque! Autem, perspiciatis cupiditate aspernatur itaque facilis qui sint at odit dolores illo eaque aliquam, sit nostrum quibusdam quidem ducimus alias totam culpa consectetur libero voluptate ipsa. Autem ipsam nihil quia non molestias laboriosam iure inventore officiis qui laborum aliquam dignissimos in veritatis dolorem, repellendus eum a officia tempora cum beatae accusantium. Iusto doloremque iste dolores impedit? Unde ducimus deleniti illo vitae, error sunt nam cum doloribus tenetur nemo labore est.</p>
                    </div>
                </div>
                <div className="col-3">
                    <h5>Other posts you might like</h5>
                    {
                        posts.map(post => {
                            return (
                                <div key={post.id} className="my-4">
                                    <div className=''>
                                    <img src={post.img} alt={post.title} className='post-suggestion-image mb-2' />
                                        <h3>{post.title}</h3>
                                        <Link to={'Post/' + post.id}>
                                            <button className="btn btn-sm btn-primary">Read More</button>
                                        </Link>
                                    </div>
                                   
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Post